"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Maximize, Star } from "lucide-react";
import { Brand } from "@/lib/constants";

const ROYAL_ROOM_TYPES = [
  {
    nameAr: "قياسية بدون اطلالة",
    nameEn: "Standard Room (No View)",
    size: "24 م²",
    capacity: "2 أشخاص",
    features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    nameAr: "ديلوكس",
    nameEn: "Deluxe Room",
    size: "32 م²",
    capacity: "2 أشخاص",
    features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "دش مطري"],
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  },
  {
    nameAr: "جناح قياسي",
    nameEn: "Standard Suite",
    size: "45 م²",
    capacity: "3 أشخاص",
    features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
  },
  {
    nameAr: "جناح ديلوكس",
    nameEn: "Deluxe Suite",
    size: "58 م²",
    capacity: "3 أشخاص",
    features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&q=80",
  },
  {
    nameAr: "جناح بغرفتين نوم",
    nameEn: "Two-Bedroom Suite",
    size: "78 م²",
    capacity: "5 أشخاص",
    features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
  },
  {
    nameAr: "جناح جونيور",
    nameEn: "Junior Suite",
    size: "50 م²",
    capacity: "3 أشخاص",
    features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    nameAr: "جناح تنفيذي",
    nameEn: "Executive Suite",
    size: "70 م²",
    capacity: "4 أشخاص",
    features: ["غرفة نوم رئيسية", "صالة تنفيذية", "مكتب عمل", "خدمة كونسيرج"],
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  },
  {
    nameAr: "جناح رويال",
    nameEn: "Royal Suite",
    size: "95 م²",
    capacity: "5 أشخاص",
    features: ["غرفتا نوم", "صالة استقبال", "جاكوزي", "خدمات خاصة"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
  },
];

export default function RoomsSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const rooms = brand.slug === "suknai-royal" ? ROYAL_ROOM_TYPES : brand.roomTypes;

  return (
    <section ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            أنواع الغرف
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">
            اختر تجربتك
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.nameAr}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white/5 rounded-3xl overflow-hidden hover-lift border border-white/10"
            >
              {/* Room Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.nameAr}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/70 to-transparent" />
                {/* Stars badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex gap-0.5 items-center">
                  {Array.from({ length: brand.stars }).map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" className="text-[#c8a951]" />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{room.nameAr}</h3>
                <p className="text-white/40 text-sm mb-4">{room.nameEn}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-white/60 text-sm">
                    <Maximize size={14} className="text-[#c8a951]" />
                    {room.size}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60 text-sm">
                    <Users size={14} className="text-[#c8a951]" />
                    {room.capacity}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/60"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <a
                  href={"/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full gradient-gold text-[#0d1b2a] font-bold py-2.5 rounded-xl text-center text-sm hover:shadow-lg transition-all"
                >
                  احجز هذه الغرفة
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
