"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Building2, Briefcase, CalendarCheck, FileText, ShieldCheck, BarChart3 } from "lucide-react";

const CORPORATE_BENEFITS = [
  { Icon: Building2, title: "قاعات اجتماعات مجهزة", desc: "بأحدث تقنيات العروض والمؤتمرات" },
  { Icon: Briefcase, title: "باقات مخصصة للشركات", desc: "أسعار تفضيلية وخدمات VIP" },
  { Icon: CalendarCheck, title: "تنظيم الفعاليات", desc: "مؤتمرات، معارض، وحفلات الشركات" },
  { Icon: FileText, title: "عقود سنوية", desc: "إدارة إقامات موظفيك بكل سهولة" },
  { Icon: ShieldCheck, title: "الأمان والخصوصية", desc: "بروتوكولات أمنية خاصة لكبار العملاء" },
  { Icon: BarChart3, title: "تقارير وتحليلات", desc: "متابعة مصاريف الإقامة والخدمات" },
];

export default function CorporateSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", company: "", phone: "", message: "" });
  };

  return (
    <section id="corporate" ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            قطاع الأعمال
          </span>
          <h2 className="text-5xl md:text-6xl text-white mt-4 mb-3">
            الكوربريت
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-white/70 max-w-xl mx-auto">
            حلول ضيافة متكاملة للشركات والمؤسسات والجهات الخاصة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {CORPORATE_BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-5 border border-[#c8a951]/15 hover:border-[#c8a951]/40 transition-all"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.2), rgba(200,169,81,0.05))" }}
                  >
                    <b.Icon size={22} className="text-[#c8a951]" />
                  </div>
                  <p className="text-white font-bold text-sm mb-1">{b.title}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-white text-2xl font-bold mb-6">
                طلب باقة مؤسسية
              </h3>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-white font-bold text-xl">تم إرسال طلبك!</p>
                  <p className="text-white/70 mt-2">
                    سيتواصل معك فريقنا خلال 24 ساعة
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", label: "الاسم الكامل", placeholder: "محمد أحمد", type: "text" },
                    { id: "company", label: "اسم الشركة / الجهة", placeholder: "شركة الأمثلة", type: "text" },
                    { id: "phone", label: "رقم التواصل", placeholder: "+966 5XX XXX XXX", type: "tel" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="text-white/70 text-sm block mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        dir={field.id === "phone" ? "ltr" : "rtl"}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#c8a951]/50 transition-colors text-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-white/70 text-sm block mb-1">
                      تفاصيل الطلب
                    </label>
                    <textarea
                      placeholder="اذكر نوع الباقة المطلوبة وعدد الغرف والمدة..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#c8a951]/50 transition-colors resize-none text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-gold text-[#0d1b2a] font-black py-4 rounded-2xl text-base flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                  >
                    <Send size={18} />
                    إرسال الطلب
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
