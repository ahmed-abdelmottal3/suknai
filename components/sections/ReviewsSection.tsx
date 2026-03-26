"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Brand } from "@/lib/constants";

const REVIEWS = [
  { name: "أحمد محمد", rating: 5, text: "تجربة رائعة ومميزة! الخدمة استثنائية والموقع مثالي. سأعود بالتأكيد.", city: "الرياض" },
  { name: "فاطمة العتيبي", rating: 5, text: "أفضل فندق نزلت فيه في حياتي. الغرف نظيفة والموظفون محترفون للغاية.", city: "جدة" },
  { name: "خالد السعدي", rating: 4, text: "إقامة ممتازة وقريبة من المعالم السياحية. الإفطار شهي جداً.", city: "الدمام" },
  { name: "نورة الشمري", rating: 5, text: "هدوء وراحة لا مثيل لهما. أنصح الجميع بتجربة الإقامة هنا.", city: "أبها" },
];

export default function ReviewsSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            تقييمات الضيوف
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mt-3 mb-2">
            ماذا يقول ضيوفنا
          </h2>
          <div className="divider-gold mx-auto mb-6" />

          {/* Overall Rating Badge */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-sm border border-[#ede8e1]">
            <div className="text-center">
              <p className="text-5xl font-black" style={{ color: brand.color }}>
                {avgRating}
              </p>
              <p className="text-[#c8a951] text-lg">★★★★★</p>
              <p className="text-[#4a4a4a] text-xs">{REVIEWS.length} تقييم</p>
            </div>
            <div className="w-px h-16 bg-[#ede8e1]" />
            <div className="text-right">
              <p className="text-[#0d1b2a] font-bold">ممتاز</p>
              <p className="text-[#4a4a4a] text-sm">بناءً على آراء الضيوف</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#ede8e1] hover-lift"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-[#c8a951] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-5 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: brand.color }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-[#0d1b2a] font-semibold text-sm">{review.name}</p>
                  <p className="text-[#4a4a4a] text-xs">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
