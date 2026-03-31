"use client";
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import SalemAI from "@/components/widgets/SalemAI";
import { Send, CheckCircle } from "lucide-react";

export default function PartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Connect to backend API or email service
  };

  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0d1b2a] px-4 pb-24 pt-36 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,81,0.2),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-4 block">
            بناء جسور التعاون
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            نموذج الشراكات
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            نرحب بكافة فرص التعاون والشراكات الإستراتيجية التي تساهم في النمو المتبادل وتقديم أفضل التجارب لضيوفنا. املأ النموذج وسيتواصل معك الفريق المختص.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-[#ede8e1] p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#c8a951]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-[#c8a951]" />
              </div>
              <h2 className="text-3xl font-black text-[#0d1b2a] mb-4">تم إرسال طلبك بنجاح</h2>
              <p className="text-[#4a4a4a] text-lg">
                شكراً لاهتمامك بالتعاون مع مجموعة سكناي. سيقوم فريقنا بمراجعة طلبك والتواصل معك قريباً.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b2a]">الاسم الكامل</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#f8f4ef] border border-[#ede8e1] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c8a951] transition-colors"
                    placeholder="الاسم الثلاثي"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b2a]">اسم الجهة / الشركة</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#f8f4ef] border border-[#ede8e1] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c8a951] transition-colors"
                    placeholder="اسم شركتك"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b2a]">رقم الجوال</label>
                  <input
                    required
                    type="tel"
                    dir="ltr"
                    className="w-full bg-[#f8f4ef] text-left border border-[#ede8e1] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c8a951] transition-colors"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b2a]">البريد الإلكتروني</label>
                  <input
                    required
                    type="email"
                    dir="ltr"
                    className="w-full bg-[#f8f4ef] text-left border border-[#ede8e1] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c8a951] transition-colors"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0d1b2a]">نوع الشراكة المقترحة</label>
                <select className="w-full bg-[#f8f4ef] border border-[#ede8e1] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c8a951] transition-colors cursor-pointer">
                  <option>شراكة تجارية وتسويقية</option>
                  <option>توريد خدمات ومشتريات</option>
                  <option>إدارة فندقية واستثمار</option>
                  <option>اتفاقية خدمات شركات (Corporate)</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0d1b2a]">تفاصيل ومقترح الشراكة</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-[#f8f4ef] border border-[#ede8e1] rounded-xl px-4 py-3 focus:outline-none focus:border-[#c8a951] transition-colors resize-none"
                  placeholder="نرجو توضيح الفكرة العامة للشراكة وكيف ستفيد الطرفين..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d1b2a] text-[#c8a951] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <span>إرسال الطلب</span>
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <SalemAI />
    </main>
  );
}
