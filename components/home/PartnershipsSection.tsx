"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Globe, Handshake, Heart, Target, Trophy, GraduationCap,
  Leaf, Users, BookOpen, Stethoscope,
} from "lucide-react";

const PARTNERSHIPS = [
  { name: "هيئة السياحة", Icon: Globe, desc: "شريك رسمي في تطوير السياحة" },
  { name: "وزارة الموارد البشرية", Icon: Handshake, desc: "التدريب والتوظيف السعودي" },
  { name: "هيئة الهلال الأحمر", Icon: Heart, desc: "المسؤولية الاجتماعية" },
  { name: "برنامج رؤية 2030", Icon: Target, desc: "شريك في تحقيق الرؤية" },
  { name: "الأندية الرياضية", Icon: Trophy, desc: "رعاية المحافل الرياضية" },
  { name: "الجامعات السعودية", Icon: GraduationCap, desc: "برامج التدريب الميداني" },
];

const CSR = [
  { Icon: Leaf, title: "الاستدامة البيئية", desc: "برامج للحد من البصمة الكربونية" },
  { Icon: Users, title: "تمكين المجتمع", desc: "دعم المواطنين والمقيمين" },
  { Icon: BookOpen, title: "التعليم والتدريب", desc: "منح دراسية وبرامج تدريبية" },
  { Icon: Stethoscope, title: "الصحة والرعاية", desc: "مبادرات الرعاية الصحية" },
];

export default function PartnershipsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="partnerships" ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            شراكاتنا
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#0d1b2a] mt-4 mb-3">
            الشراكات والتعاونات
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-[#4a4a4a] max-w-xl mx-auto">
            نبني جسور التعاون لخلق قيمة مضافة لمجتمعنا واقتصادنا الوطني
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {PARTNERSHIPS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#ede8e1] hover:border-[#c8a951]/40 hover:shadow-md transition-all cursor-default group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl mb-4 flex items-center justify-center bg-[#c8a951] group-hover:bg-[#c8a951] transition-colors duration-300">
                <p.Icon size={24} className="text-white transition-colors duration-300" />
              </div>
              <p className="text-[#0d1b2a] font-bold mb-1">{p.name}</p>
              <p className="text-[#4a4a4a] text-xs">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CSR Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-black text-[#0d1b2a] mb-2">
            المسؤولية الاجتماعية
          </h3>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {CSR.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[#c8a85131] border border-[#c8a951]/15 hover:border-[#c8a951]/40 rounded-2xl p-7 text-center transition-all group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.15), rgba(200,169,81,0.05))" }}
              >
                <item.Icon size={26} className="text-[#c8a951]" />
              </div>
              <p className="text-[#0d1b2a] font-bold mb-2">{item.title}</p>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
