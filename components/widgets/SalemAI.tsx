"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import { BRANDS } from "@/lib/constants";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const FAQ: Record<string, string> = {
  حجز: "للاستفسارات، تواصل معنا مباشرة عبر الواتساب أو الاتصال الهاتفي",
  مواعيد: "مواعيد الإفطار تختلف حسب الفندق. للتأكيد يرجى التواصل معنا.",
  فطور: "مواعيد الإفطار تختلف حسب الفندق. للتأكيد يرجى التواصل معنا.",
  "واي فاي": "نعم، الواي فاي مجاني وسريع في جميع مرافق مجموعة سكناي",
  انترنت: "نعم، الإنترنت مجاني وسريع في جميع مرافق مجموعة سكناي",
  موقف: "يتوفر موقف سيارات مجاني لجميع ضيوفنا",
  سيارة: "يتوفر موقف سيارات مجاني لجميع ضيوفنا",
  مسبح: "نعم، يتوفر مسبح فاخر في فندق سكناي رويال ومنتجع سكناي",
  سبا: "تتوفر خدمات السبا والاسترخاء في فندق سكناي رويال ومنتجع سكناي",
  "check in": "وقت تسجيل الوصول هو الساعة 3:00 م، وتسجيل المغادرة 12:00 ظهراً",
  "check out": "وقت تسجيل المغادرة هو 12:00 ظهراً",
  وصول: "وقت تسجيل الوصول هو الساعة 3:00 م",
  مغادرة: "وقت تسجيل المغادرة هو 12:00 ظهراً",
  غرف: "نقدم مجموعة متنوعة من الغرف: غرف ديلوكس، سوبيريور، وأجنحة فاخرة. تفضل بزيارة صفحة الفندق للتفاصيل",
  خدمة: "خدمة الغرف متاحة على مدار الساعة في جميع فنادقنا",
  غادي: "غادي للشقق المخدومة توفر شققاً مجهزة بالكامل مثالية للإقامات الطويلة والعائلات",
  رويال: "فندق سكناي رويال يقع في حائل ويقدم تجربة إقامة فاخرة.",
  عقيق: "فندق سكناي العقيق يقع في الرياض ويوفر إقامة مريحة بموقع مميز.",
  منتجع: "منتجع سكناي يقع في الرياض ويوفر تجربة إقامة هادئة.",
  أياس: "فنادق أياس متوفرة في حائل والجوف وعنيزة.",
  اتصال: "يمكنك التواصل معنا على الرقم المركزي +966920031010",
  تواصل: "يمكنك التواصل معنا عبر الواتساب أو الاتصال المباشر +966920031010",
  هلا: "هلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟",
  مرحبا: "مرحباً! أنا سالم، مساعدك الذكي في مجموعة سكناي. كيف أقدر أساعدك؟",
  اسعار: "للاطلاع على الأسعار والتوافر، يرجى التواصل معنا مباشرة عبر قنوات الاتصال المتاحة",
  سعر: "للاسفسار عن الأسعار، يرجى التواصل معنا على الواتساب أو الاتصال بنا",
};

function buildBreakfastReply(): string {
  const schedules = BRANDS
    .map((brand) => brand.breakfastTimes)
    .filter((t) => t.weekday.trim() && t.weekend.trim());

  if (schedules.length === 0) {
    return "مواعيد الإفطار تختلف حسب الفندق. للتأكيد على الفرع المطلوب، يرجى التواصل معنا عبر واتساب +966920031010";
  }

  const uniqueSchedules = Array.from(new Set(schedules.map((t) => `${t.weekday}|${t.weekend}`)));
  if (uniqueSchedules.length === 1) {
    const [weekday, weekend] = uniqueSchedules[0].split("|");
    if (weekday === weekend) {
      return `مواعيد الإفطار من ${weekday} طوال أيام الأسبوع.`;
    }
    return `مواعيد الإفطار: ${weekday} في أيام الأسبوع، و${weekend} في عطلة نهاية الأسبوع.`;
  }

  return "مواعيد الإفطار تختلف حسب الفندق. للتأكيد على الفرع المطلوب، يرجى التواصل معنا عبر واتساب +966920031010";
}

const BREAKFAST_REPLY = buildBreakfastReply();

const FAQ_PATCH: Record<string, string> = {
  مواعيد: BREAKFAST_REPLY,
  فطور: BREAKFAST_REPLY,
  إفطار: BREAKFAST_REPLY,
  الفطار: BREAKFAST_REPLY,
  رويال: "فندق سكناي رويال يقع في حائل ويقدم تجربة إقامة فاخرة.",
  عقيق: "فندق سكناي العقيق يقع في الرياض ويوفر إقامة مريحة بموقع مميز.",
  منتجع: "منتجع سكناي يقع في الرياض ويوفر تجربة إقامة هادئة.",
  أياس: "فنادق أياس متوفرة في حائل والجوف وعنيزة.",
};

const EFFECTIVE_FAQ: Record<string, string> = { ...FAQ, ...FAQ_PATCH };

const QUICK_REPLIES = [
  "كيف أتواصل معكم؟",
  "مواعيد الإفطار",
  "أين تقع الفنادق؟",
  "هل يوجد واي فاي؟",
  "ما هو وقت الوصول؟",
];

const GREETINGS = [
  "مرحباً! أنا سالم، كيف أقدر أساعدك اليوم؟",
];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, reply] of Object.entries(EFFECTIVE_FAQ)) {
    if (lower.includes(key)) return reply;
  }
  return "شكراً لسؤالك! يسعدني مساعدتك. للحصول على إجابة دقيقة، تواصل مع فريقنا عبر الواتساب أو اتصل بنا على +966920031010";
}

let msgId = 1;

export default function SalemAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: msgId++, text: GREETINGS[0], isBot: true, timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: msgId++,
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(
      () => {
        const botMsg: Message = {
          id: msgId++,
          text: getBotReply(text),
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setTyping(false);
      },
      800 + Math.random() * 600
    );
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full gradient-gold shadow-xl flex items-center justify-center animate-pulse-gold hover:scale-110 transition-transform"
        aria-label="سالم AI - مساعد سكناي"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} className="text-[#0d1b2a]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex flex-col items-center"
            >
              <Sparkles size={20} className="text-[#0d1b2a]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Label */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ delay: 2.5 }}
            className="fixed bottom-[4.5rem] left-[4.5rem] z-50 bg-[#0d1b2a] text-white text-xs px-3 py-1.5 rounded-full shadow-lg border border-[#c8a951]/30 whitespace-nowrap pointer-events-none flex items-center gap-1.5"
          >
            سالم AI <Sparkles size={12} className="text-[#c8a951]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 22, stiffness: 250 }}
            className="fixed bottom-24 left-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="gradient-navy px-5 py-4 flex items-center gap-3 border-b border-[#c8a951]/20">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-[#0d1b2a] font-black text-sm flex-shrink-0">
                AI
              </div>
              <div>
                <p className="text-white font-bold text-sm">سالم AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/50 text-xs">مساعد سكناي الذكي</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-[#0d1b2a]/95 h-72 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.isBot
                        ? "glass text-white/90 rounded-tr-sm"
                        : "gradient-gold text-[#0d1b2a] font-medium rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="glass px-4 py-3 rounded-2xl rounded-tr-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#c8a951] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-[#c8a951] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-[#c8a951] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="bg-[#0d1b2a]/95 px-3 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-[#c8a951]/30 text-[#c8a951] hover:bg-[#c8a951]/10 transition-colors whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="bg-[#0d1b2a]/95 p-3 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#c8a951]/50 transition-colors text-right"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl gradient-gold flex items-center justify-center disabled:opacity-40 hover:shadow-lg transition-all"
              >
                <Send size={16} className="text-[#0d1b2a]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
