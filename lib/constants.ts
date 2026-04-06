// ============================================================
// Suknai Group — Central Data Constants
// ============================================================

export const GROUP = {
  nameAr: "مجموعة سكناي",
  nameEn: "Suknai Group",
  taglineAr: "تجارب ضيافة تجمع بين الفخامة والراحة والهوية السعودية",
  taglineEn: "Where luxury meets Saudi hospitality",
  phone: "+966920031010",
  whatsapp: "+966920031010",
  email: "info@suknai.com",
  website: "https://www.suknai.com",
  social: {
    instagram: "https://www.instagram.com/suknai_group",
    twitter: "https://x.com/suknai_group",
    snapchat: "https://t.snapchat.com/vccErFdb",
    tiktok: "https://www.tiktok.com/@suknai_group",
    youtube: "https://youtube.com/@suknai_sa",
  },
  saudiMedia: [
    { name: "روح السعودية", url: "https://www.visitsaudi.com", logo: "https://unavatar.io/twitter/VisitSaudiAR" },
    { name: "صحيفة عكاظ", url: "https://www.okaz.com.sa", logo: "https://unavatar.io/twitter/OKAZ_online" },
    { name: "صحيفة سبق", url: "https://sabq.org", logo: "https://unavatar.io/twitter/sabqorg" },
    { name: "صحيفة الرياض", url: "https://www.alriyadh.com", logo: "https://unavatar.io/twitter/alriyadh" },
    { name: "Arab News", url: "https://www.arabnews.com", logo: "https://unavatar.io/twitter/arabnews" },
    { name: "الشرق الأوسط", url: "https://aawsat.com", logo: "https://unavatar.io/twitter/aawsat_News" },
  ],
  roohAlSaudia: "https://www.visitsaudi.com",
};

export interface Brand {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  cityAr: string;
  cityEn: string;
  descriptionAr: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  heroImage: string;
  galleryImages: string[];
  coordinates: { lat: number; lng: number };
  social: {
    instagram?: string;
    twitter?: string;
    snapchat?: string;
    tiktok?: string;
  };
  stars: number;
  color: string; // accent color per brand
  roomTypes: RoomType[];
  facilities: Facility[];
  landmarks: Landmark[];
  breakfastTimes: { weekday: string; weekend: string };
  importantNumbers: ImportantNumber[];
  dutyManager: { nameAr: string; phone: string };
  reviewUrl?: string;
  mapUrl?: string;
  mapEmbedUrl?: string;
  menuCategories: MenuCategory[];
}

export interface MenuCategory {
  nameAr: string;
  icon: string;
  items: string[];
}

export interface RoomType {
  nameAr: string;
  nameEn: string;
  size: string;
  capacity: string;
  features: string[];
  image: string;
}

export interface Facility {
  nameAr: string;
  icon: string;
}

export interface Landmark {
  nameAr: string;
  type: "city" | "nearby";
  distance?: string;
  image: string;
  location: string;
}

export interface ImportantNumber {
  labelAr: string;
  number: string;
  icon: string;
}

// ============================================================
// Brand Data
// ============================================================

export const BRANDS: Brand[] = [
  {
    id: "royal",
    slug: "suknai-royal",
    nameAr: "فندق سكناي رويال",
    nameEn: "Suknai Royal Hotel",
    taglineAr: "تجربة ملكية لا تُنسى",
    cityAr: "حائل",
    cityEn: "Hail",
    reviewUrl: "https://maps.app.goo.gl/CLmLJQo7noEVaZrZ8",
    descriptionAr:
      "فندق سكناي رويال يجمع بين الفخامة المعاصرة والضيافة السعودية الأصيلة في قلب حائل. يقدم الفندق تجربة إقامة استثنائية بتصميم راقٍ وخدمات عالمية المستوى.",
    phone: "+966535118000",
    whatsapp: "+966535118000",
    email: "royal@suknai.com",
    website: "https://royal.suknai.com",
    heroImage:
      "/royal.jpg",
    galleryImages: [
      "/royal/dsc-1844-hdr.jpg",
      "/royal/dsc-2004-hdr.jpg",
      "/royal/dsc-2011-hdr.jpg",
      "/royal/dsc-2026-hdr.jpg",
      "/royal/dsc-2032-hdr.jpg",
      "/royal/dsc-2045-hdr.jpg",
      "/royal/dsc-2066-hdr.jpg",
      "/royal/dsc-2104-hdr.jpg",
    ],
    coordinates: { lat: 24.6877, lng: 46.7219 },
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
    },
    stars: 4,
    color: "#c8a951",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [
      {
        nameAr: "مسجد الراجحي",
        type: "nearby",
        distance: "2 كم",
        image:
          "/rajhi.jpg",
        location: "https://maps.app.goo.gl/YWNeFZ6rCDtm77vd6",
      },
      {
        nameAr: "مركز الامير سلطان الاجتماعي",
        type: "nearby",
        distance: "1 كم",
        image:
          "/sultan.jpg",
        location: 'https://maps.app.goo.gl/rJonrnPfda6qwWUd6'

      },
    ],
    breakfastTimes: { weekday: "6:00 ص - 10:00 ص", weekend: "7:00 ص - 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966535118000" },
    menuCategories: [
    ],
  },

  {
    id: "suknai-jouf",
    slug: "suknai-jouf",
    nameAr: "فندق سكناي - الجوف",
    nameEn: "Suknai Hotel - Al Jouf",
    taglineAr: "تجربة ضيافة مميزة في قلب الجوف",
    cityAr: "الجوف",
    cityEn: "Al Jouf",
    descriptionAr: "فندق سكناي الجوف يقدم تجربة ضيافة استثنائية في قلب منطقة الجوف، حيث يجمع بين التصميم العصري والراحة التامة لضمان إقامة لا تُنسى لضيوفنا.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "suknaijouf@suknai.com",
    website: "https://suknai-jouf.suknai.com",
    heroImage: "/elgof/f62a70c5-8a21-46c8-b047-44339c1de059.jpg",
    galleryImages: [
      "/elgof/reception-1.png",
      "/elgof/reception-2.png",
      "/elgof/reception-3.jpg.jpeg",
      "/elgof/corridor-1.jpg.jpeg",
      "/elgof/corridor-2.jpg.jpeg",
      "/elgof/loung-2.jpg.jpeg",
      "/elgof/coffee-shop.png",
    ],
    coordinates: { lat: 29.9697, lng: 40.2000 },
    social: {},
    stars: 4,
    color: "#c8a951",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "كوفي شوب", icon: "Coffee" },
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [],
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "7:00 ص - 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "الكوفي شوب", number: "333", icon: "Coffee" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
  },

  {
    id: "aqiq",
    slug: "suknai-aqiq",
    nameAr: "فندق سكناي - العقيق",
    nameEn: "Suknai Al-Aqiq Hotel",
    taglineAr: "أناقة وراحة في قلب المدينة المنورة",
    cityAr: "المدينة المنورة",
    cityEn: "Madinah",
    descriptionAr:
      "فندق سكناي العقيق يقع في موقع استراتيجي في المدينة المنورة بالقرب من الحرم النبوي الشريف، يوفر ضيافة استثنائية للزوار والمعتمرين بمرافق حديثة وخدمات متميزة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aqiq@suknai.com",
    website: "https://aqiq.suknai.com",
    heroImage: "/aqeq/aqeq.jpg",
    galleryImages: [
      "/aqeq/sk-115.jpg",
      "/aqeq/sk-116.jpg",
      "/aqeq/sk-122.jpg",
      "/aqeq/sk-136.jpg",
      "/aqeq/sk-23.jpg",
      "/aqeq/sk-24.jpg",
      "/aqeq/sk-25.jpg",
      "/aqeq/sk-2-edit.jpg",
    ],
    coordinates: { lat: 24.4712, lng: 39.6058 }, // Updated for Madinah
    mapUrl: "https://maps.app.goo.gl/iU4JfQuBmVVP4n1V9",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9012.23015245576!2d39.6105022!3d24.4726058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfd70ecc73bd%3A0x4c65dce789386331!2z2YHZhtiv2YIg2KfZhNi52YLZitmC!5e1!3m2!1sar!2seg!4v1775461870110!5m2!1sar!2seg",
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
    },
    stars: 4,
    color: "#7c9885",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [
      {
        nameAr: "المسجد النبوي الشريف",
        type: "nearby",
        distance: "1.5 كم",
        image: "/masjid-an-nabawi-1775434724330.png",
        location: ''
      },
      {
        nameAr: "مسجد قباء",
        type: "city",
        distance: "4 كم",
        image: "/quba-mosque-madinah-1775434774520.png",
        location: ''
      },
      {
        nameAr: "مركز البلد التجاري",
        type: "nearby",
        distance: "0.5 كم",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80",
        location: ''
      },
    ],
    breakfastTimes: { weekday: "5:30 ص – 10:00 ص", weekend: "6:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "خدمة الغرف", number: "22", icon: "BellRing" },
      { labelAr: "الطوارئ", number: "911", icon: "Siren" },
      { labelAr: "خدمة النقل", number: "44", icon: "Bus" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
  },

  {
    id: "resort",
    slug: "suknai-resort",
    nameAr: "منتجع سكناي - الرياض",
    nameEn: "Suknai Resort",
    taglineAr: "اهرب إلى جنة الطبيعة",
    cityAr: "الرياض",
    cityEn: "Abha",
    reviewUrl: "https://www.google.com/maps/place/منتجع+سكناي",
    descriptionAr: "منتجع سكناي في مدينة أبها الساحرة، يمنحك تجربة استجمام استثنائية وخصوصية تامة وسط الطبيعة الجبلية الخلابة والهواء النقي، مما يجعله الوجهة المثالية للباحثين عن الهدوء والراحة بعيداً عن صخب المدينة.",
    phone: "+966501347000",
    whatsapp: "+966501347000",
    email: "resort@suknai.com",
    website: "https://resort.suknai.com",
    heroImage: "/montg3/copy-of-resort-1.jpg",
    galleryImages: [
      "/montg3/copy-of-resort-2.jpg",
      "/montg3/copy-of-resort-10.jpg",
      "/montg3/copy-of-resort-12.jpg",
      "/montg3/copy-of-resort-13.jpg",
      "/montg3/copy-of-reception-1.jpg",
      "/montg3/resort-2.jpg",
      "/montg3/resort-24.jpg",
      "/montg3/resort-36.jpg",
    ],
    coordinates: { lat: 18.2435, lng: 42.4705 }, // Updated for Abha Resort
    mapUrl: "https://maps.app.goo.gl/N6AF9NvByWVariim8",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4491.961979024178!2d46.8057218!3d24.865039399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff36598be137%3A0x1f1310e29fe4c45f!2z2YXZhtiq2KzYuSDYs9mD2YbYp9mK!5e1!3m2!1sar!2seg!4v1775460331934!5m2!1sar!2seg",
    social: {
      instagram: "https://www.instagram.com/suknai_resorts",
      twitter: "https://x.com/suknai_resorts",
      tiktok: "https://www.tiktok.com/@suknai_resorts",
    },
    stars: 5,
    color: "#4a7c59",
    roomTypes: [
      {
        nameAr: "جناح قياسية",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [
      {
        nameAr: "جبل النبي شعيب",
        type: "nearby",
        distance: "8 كم",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
        location: ''
      },
      {
        nameAr: "منتزه عسير الوطني",
        type: "city",
        distance: "5 كم",
        image:
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&q=80",
        location: ''
      },
      {
        nameAr: "بحيرة الملك فهد",
        type: "nearby",
        distance: "3 كم",
        image:
          "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80",
        location: ''
      },
    ],
    breakfastTimes: { weekday: "7:00 ص – 10:30 ص", weekend: "7:30 ص – 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "خدمة الفيلا", number: "11", icon: "BellRing" },
      { labelAr: "الطوارئ", number: "911", icon: "Siren" },
      { labelAr: "النشاطات", number: "77", icon: "Target" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966501347000" },
    menuCategories: [],
  },


  {
    id: "aya",
    slug: "aya-hotel",
    nameAr: " فندق أياس - حائل",
    nameEn: "Aya Hotel",
    taglineAr: "تصميم معاصر وأجواء استثنائية",
    cityAr: "حائل",
    cityEn: "Hail",
    reviewUrl: "https://maps.app.goo.gl/xCHKd26Xp7ut62yh7",
    descriptionAr: "فندق أياس حائل يرحب بكم في قلب منطقة حائل، حيث يجتمع التصميم العصري مع كرم الضيافة الشمالية الأصيلة ليوفر لكم إقامة مريحة وهادئة.",
    phone: "+966575091111",
    whatsapp: "+966575091111",
    email: "aya@suknai.com",
    website: "https://aya.suknai.com",
    heroImage: "/ayashael/dsc-9416-enhanced-nr-copy.jpeg",
    galleryImages: [
      "/ayashael/dsc-6680101010-copy-2.jpg",
      "/ayashael/dsc-6701-copy.jpg",
      "/ayashael/dsc-6704-copy.jpg",
      "/ayashael/dsc-6709-copy-2.jpg",
      "/ayashael/dsc-6718888888-copy-2.jpg",
      "/ayashael/dsc-6791-copy.jpg",
    ],
    coordinates: { lat: 27.5219, lng: 41.6961 },
    social: {
      instagram: "https://www.instagram.com/ayas_hotels/",
      twitter: "https://x.com/ayas_hotels",
      tiktok: "https://www.tiktok.com/",
    },
    stars: 3,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [
      {
        nameAr: "قلعة أعيرف التاريخية",
        type: "nearby",
        distance: "2 كم",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400&q=80",
        location: 'https://maps.app.goo.gl/3N6A6L2x6a3m6b8x7'
      },
      {
        nameAr: "قلعة القشلة",
        type: "city",
        distance: "1.5 كم",
        image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&q=80",
        location: 'https://maps.app.goo.gl/hG5a6L2x6a3m6b8x7'
      },
      {
        nameAr: "منتزه المغواة",
        type: "city",
        distance: "4 كم",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80",
        location: 'https://maps.app.goo.gl/hG5a6L2x6a3m6b8x7'
      },
      {
        nameAr: "سوق المسوكف الشعبي",
        type: "nearby",
        distance: "1 كم",
        image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80",
        location: 'https://maps.app.goo.gl/hG5a6L2x6a3m6b8x7'
      },
    ],
    breakfastTimes: { weekday: "6:00 ص – 10:00 ص", weekend: "7:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "خدمة الغرف", number: "66", icon: "BellRing" },
      { labelAr: "الطوارئ", number: "911", icon: "Siren" },
      { labelAr: "صالة البحر", number: "55", icon: "Umbrella" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966575091111" },
    menuCategories: [],
  },

  {
    id: "aya-jouf",
    slug: "aya-jouf",
    nameAr: "فندق أياس - الجوف",
    nameEn: "Aya Hotel - Al Jouf",
    taglineAr: "تصميم معاصر وأجواء استثنائية",
    cityAr: "الجوف",
    cityEn: "Al Jouf",
    descriptionAr: "فندق أياس الجوف يجسد الأناقة المعاصرة في قلب منطقة الجوف. يوفر الفندق تجربة إقامة فاخرة بتصاميم حديثة ومرافق متكاملة تلبي تطلعات المسافرين للعمل أو الترفيه.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "ayajouf@suknai.com",
    website: "https://aya-jouf.suknai.com",
    heroImage: "/ayasgof/gof.jpg",
    galleryImages: [
      "/ayasgof/image-100.jpg.jpeg",
      "/ayasgof/image-101.jpg.jpeg",
      "/ayasgof/image-91.jpg.jpeg",
      "/ayasgof/image-92.jpg.jpeg",
      "/ayasgof/image-93.jpg.jpeg",
      "/ayasgof/image-94.jpg.jpeg",
      "/ayasgof/image-95.jpg.jpeg",
      "/ayasgof/image-96.jpg.jpeg",
    ],
    coordinates: { lat: 29.8118, lng: 39.5106 }, // Updated for Al Jouf
    mapUrl: "https://maps.app.goo.gl/EoeZi8Ey5xy64fQu8",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.015815318082!2d40.1882611848864!3d29.97897548190621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzQ0LjMiTiA0MMKwMTEnMDkuOSJF!5e0!3m2!1sar!2seg!4v1775460016086!5m2!1sar!2seg",
    social: {
      instagram: "https://www.instagram.com/ayas_hotels/",
      twitter: "https://x.com/ayas_hotels",
      tiktok: "https://www.tiktok.com/",
    },
    stars: 3,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [],
    breakfastTimes: { weekday: "6:00 ص – 10:00 ص", weekend: "7:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "خدمة الغرف", number: "100", icon: "BellRing" }
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
  },

  {
    id: "aya-unaizah",
    slug: "aya-unaizah",
    nameAr: "فندق أياس - عنيزة",
    nameEn: "Aya Hotel - Unaizah",
    taglineAr: "تصميم معاصر وأجواء استثنائية",
    cityAr: "عنيزة",
    cityEn: "Unaizah",
    descriptionAr: "فندق أياس في عنيزة وجهة فريدة تجمع بين التصميم المعاصر والموقع المتميز، يقدم تجربة إقامة مميزة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aya-unaizah@suknai.com",
    website: "https://aya-unaizah.suknai.com",
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    coordinates: { lat: 26.0941, lng: 43.9734 },
    social: {
      instagram: "https://www.instagram.com/ayas_hotels/",
      twitter: "https://x.com/ayas_hotels",
      tiktok: "https://www.tiktok.com/",
    },
    stars: 3,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "غرفة قياسية",
        nameEn: "Standard Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["إطلالة المدينة", "سرير كينج"],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
      }
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [],
    breakfastTimes: { weekday: "6:00 ص – 10:00 ص", weekend: "7:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" }
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
  },

  {
    id: "ghadi",
    slug: "ghadi-apartments",
    nameAr: "غادي للشقق المخدومة",
    nameEn: "Ghadi Serviced Apartments",
    taglineAr: "بيتك الثاني في كل مكان",
    cityAr: "الرياض",
    cityEn: "Riyadh",
    descriptionAr:
      "غادي للشقق المخدومة توفر لك منزلاً بعيداً عن المنزل بمرافق كاملة وخدمات احترافية. مثالية للإقامات الطويلة والعائلات.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "ghadi@suknai.com",
    website: "https://ghadi.suknai.com",
    heroImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    ],
    coordinates: { lat: 24.7136, lng: 46.6753 },
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
    },
    stars: 0,
    color: "#9b59b6",
    roomTypes: [
      {
        nameAr: "جناح قياسية",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/suknai-royal-11.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/royal/suknai-royal-12.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/royal/dsc-1844-hdr.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/royal/suknai-royal-13.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/royal/dsc-2066-hdr.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/royal/suknai-royal-9.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/royal/suknai-royal-1.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/royal/dsc-2104-hdr.jpg",
      },
    ],
    facilities: [
      { nameAr: "مركز لياقة", icon: "Dumbbell" },
      { nameAr: "مطعم عالمي", icon: "UtensilsCrossed" },
      { nameAr: "قاعات اجتماعات", icon: "Landmark" },
      { nameAr: "موقف سيارات", icon: "Car" },
      { nameAr: "خدمة الغرف 24/7", icon: "BellRing" },
      { nameAr: "واي فاي مجاني", icon: "Wifi" },
    ],
    landmarks: [
      {
        nameAr: "مركز الرياض مول",
        type: "nearby",
        distance: "1 كم",
        image:
          "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80",
        location: ''
      },
      {
        nameAr: "حديقة السلام",
        type: "nearby",
        distance: "0.5 كم",
        image:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80",
        location: ''
      },
      {
        nameAr: "سوق منافسي",
        type: "city",
        distance: "2 كم",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80",
        location: ''
      },
    ],
    breakfastTimes: { weekday: "7:00 ص – 10:00 ص", weekend: "7:30 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "الصيانة", number: "22", icon: "Wrench" },
      { labelAr: "الطوارئ", number: "911", icon: "Siren" },
      { labelAr: "النظافة", number: "33", icon: "Sparkles" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
  },

];

export const getBrandBySlug = (slug: string): Brand | undefined =>
  BRANDS.find((b) => b.slug === slug);

export const getBrandById = (id: string): Brand | undefined =>
  BRANDS.find((b) => b.id === id);
