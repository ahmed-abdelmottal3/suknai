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
    youtube: "https://www.youtube.com/@suknai",
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
  reservationUrl: string;
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
  menuCategories: MenuCategory[];
  reviewUrl?: string;
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
}

export interface ImportantNumber {
  labelAr: string;
  number: string;
  icon: string;
}

export interface MenuCategory {
  nameAr: string;
  icon: string;
  items: string[];
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
      "فندق سكناي رويال يجمع بين الفخامة المعاصرة والضيافة السعودية الأصيلة في قلب الرياض. يقدم الفندق تجربة إقامة استثنائية بتصميم راقٍ وخدمات عالمية المستوى.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "royal@suknai.com",
    reservationUrl: "https://booking.suknai.com/royal",
    website: "https://royal.suknai.com",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
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
        nameAr: "غرفة ديلوكس",
        nameEn: "Deluxe Room",
        size: "35 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "منظر المدينة", "واي فاي مجاني", "مكيف"],
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      },
      {
        nameAr: "غرفة سوبيريور",
        nameEn: "Superior Room",
        size: "42 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج ضخم", "صالة جلوس", "إطلالة بانورامية"],
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "85 م²",
        capacity: "4 أشخاص",
        features: ["غرفتا نوم", "مطبخ صغير", "جاكوزي", "خدمة الكونسيرج"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
      },
    ],
    facilities: [
      { nameAr: "مسبح خارجي", icon: "🏊" },
      { nameAr: "مركز لياقة", icon: "💪" },
      { nameAr: "مطعم عالمي", icon: "🍽️" },
      { nameAr: "قاعات اجتماعات", icon: "🏛️" },
      { nameAr: "موقف سيارات", icon: "🚗" },
      { nameAr: "خدمة الغرف 24/7", icon: "🛎️" },
      { nameAr: "سبا وعلاجات", icon: "💆" },
      { nameAr: "واي فاي مجاني", icon: "📶" },
    ],
    landmarks: [
      {
        nameAr: "برج المملكة",
        type: "nearby",
        distance: "2 كم",
        image:
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80",
      },
      {
        nameAr: "مركز الملك عبدالله المالي",
        type: "city",
        distance: "3 كم",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      },
      {
        nameAr: "العليا مول",
        type: "nearby",
        distance: "1 كم",
        image:
          "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80",
      },
      {
        nameAr: "متحف الرياض",
        type: "city",
        distance: "5 كم",
        image:
          "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=400&q=80",
      },
    ],
    breakfastTimes: { weekday: "6:30 ص – 10:30 ص", weekend: "7:00 ص – 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" },
      { labelAr: "خدمة الغرف", number: "55", icon: "🛎️" },
      { labelAr: "الهاتف الداخلي", number: "0", icon: "☎️" },
      { labelAr: "الطوارئ", number: "911", icon: "🚨" },
      { labelAr: "الأمن", number: "33", icon: "🔒" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966512345679" },
    menuCategories: [
      {
        nameAr: "المشروبات",
        icon: "☕",
        items: ["قهوة عربية", "شاي كرك", "عصير طازج", "مياه معدنية"],
      },
      {
        nameAr: "الإفطار",
        icon: "🥗",
        items: [
          "بيض مقلي/مسلوق",
          "فول مدمس",
          "لبنة بالزيت",
          "خبز تنور",
          "مربى وعسل",
        ],
      },
      {
        nameAr: "الوجبات الرئيسية",
        icon: "🍖",
        items: ["مندي دجاج", "كبسة لحم", "مشوي مشكل", "سمك مشوي"],
      },
      {
        nameAr: "الحلويات",
        icon: "🍮",
        items: ["أم علي", "كنافة", "محلبية", "تمر ومكسرات"],
      },
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
    descriptionAr: "فندق سكناي في الجوف يمنحك تجربة مريحة وممتعة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "suknaijouf@suknai.com",
    reservationUrl: "https://booking.suknai.com/suknai-jouf",
    website: "https://suknai-jouf.suknai.com",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?w=800&q=80",
    ],
    coordinates: { lat: 29.9697, lng: 40.2000 },
    social: {},
    stars: 4,
    color: "#c8a951",
    roomTypes: [
      {
        nameAr: "غرفة ديلوكس",
        nameEn: "Deluxe Room",
        size: "35 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج"],
        image: "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?w=600&q=80"
      }
    ],
    facilities: [
      { nameAr: "مطعم", icon: "🍽️" },
      { nameAr: "واي فاي مجاني", icon: "📶" }
    ],
    landmarks: [],
    breakfastTimes: { weekday: "6:30 ص – 10:30 ص", weekend: "7:00 ص – 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" }
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: []
  },

  {
    id: "aya",
    slug: "aya-hotel",
    nameAr: "فندق أياس",
    nameEn: "Aya Hotel",
    taglineAr: "تصميم معاصر وأجواء استثنائية",
    cityAr: "حائل",
    cityEn: "Hail",
    reviewUrl: "https://maps.app.goo.gl/xCHKd26Xp7ut62yh7",
    descriptionAr:
      "فندق أياس في جدة وجهة فريدة تجمع بين التصميم المعاصر والموقع المتميز على الكورنيش، يقدم تجربة إقامة مميزة في مدينة العروس.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aya@suknai.com",
    reservationUrl: "https://booking.suknai.com/aya",
    website: "https://aya.suknai.com",
    heroImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=800&q=80",
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80",
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=800&q=80",
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&q=80",
    ],
    coordinates: { lat: 21.4858, lng: 39.1925 },
    social: {
      instagram: "https://www.instagram.com/ayas_hotels/",
      twitter: "https://x.com/ayas_hotels",
      tiktok: "https://www.tiktok.com/",
    },
    stars: 3,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "غرفة الكورنيش",
        nameEn: "Corniche Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["إطلالة البحر", "شرفة", "سرير كينج"],
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      },
      {
        nameAr: "جناح جدة",
        nameEn: "Jeddah Suite",
        size: "60 م²",
        capacity: "3 أشخاص",
        features: ["إطلالة بحرية بانورامية", "صالة خاصة", "حوض جاكوزي"],
        image:
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80",
      },
      {
        nameAr: "غرفة ديلوكس",
        nameEn: "Deluxe Room",
        size: "40 م²",
        capacity: "2 أشخاص",
        features: ["سرير ضخم", "ديكور عصري", "حمام فاخر"],
        image:
          "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&q=80",
      },
    ],
    facilities: [
      { nameAr: "مسبح على السطح", icon: "🏊" },
      { nameAr: "مطعم بحري", icon: "🦞" },
      { nameAr: "بار الشاي", icon: "🫖" },
      { nameAr: "مركز لياقة", icon: "💪" },
      { nameAr: "مسبح أطفال", icon: "🧒" },
      { nameAr: "خدمة الشاطئ", icon: "🏖️" },
      { nameAr: "جلسات خارجية", icon: "🌊" },
      { nameAr: "واي فاي مجاني", icon: "📶" },
    ],
    landmarks: [
      {
        nameAr: "كورنيش جدة",
        type: "nearby",
        distance: "50 م",
        image:
          "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=400&q=80",
      },
      {
        nameAr: "نافورة الملك فهد",
        type: "city",
        distance: "2 كم",
        image:
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&q=80",
      },
      {
        nameAr: "البلد التاريخي",
        type: "city",
        distance: "5 كم",
        image:
          "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80",
      },
      {
        nameAr: "مول النخيل",
        type: "nearby",
        distance: "1.5 كم",
        image:
          "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80",
      },
    ],
    breakfastTimes: { weekday: "6:00 ص – 10:00 ص", weekend: "7:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" },
      { labelAr: "خدمة الغرف", number: "66", icon: "🛎️" },
      { labelAr: "الطوارئ", number: "911", icon: "🚨" },
      { labelAr: "صالة البحر", number: "55", icon: "🏖️" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966522233446" },
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "🥗",
        items: ["فطور بحري", "بيض بالطماطم", "خبز أبيض وعسل"],
      },
      {
        nameAr: "المشروبات",
        icon: "🫖",
        items: ["قهوة مختصة", "شاي بالنعناع", "عصير برتقال"],
      },
      {
        nameAr: "المأكولات البحرية",
        icon: "🦐",
        items: ["سمك مشوي", "روبيان محمر", "كابوريا بالثوم"],
      },
    ],
  },

  {
    id: "aya-jouf",
    slug: "aya-jouf",
    nameAr: "فندق أياس - الجوف",
    nameEn: "Aya Hotel - Al Jouf",
    taglineAr: "تصميم معاصر وأجواء استثنائية",
    cityAr: "الجوف",
    cityEn: "Al Jouf",
    descriptionAr: "فندق أياس في الجوف وجهة فريدة تجمع بين التصميم المعاصر والموقع المتميز، يقدم تجربة إقامة مميزة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "ayajouf@suknai.com",
    reservationUrl: "https://booking.suknai.com/aya-jouf",
    website: "https://aya-jouf.suknai.com",
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    coordinates: { lat: 29.9697, lng: 40.2000 },
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
      { nameAr: "مقهى", icon: "☕" },
      { nameAr: "واي فاي مجاني", icon: "📶" }
    ],
    landmarks: [],
    breakfastTimes: { weekday: "6:00 ص – 10:00 ص", weekend: "7:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" }
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: []
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
    reservationUrl: "https://booking.suknai.com/aya-unaizah",
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
      { nameAr: "مقهى", icon: "☕" },
      { nameAr: "واي فاي مجاني", icon: "📶" }
    ],
    landmarks: [],
    breakfastTimes: { weekday: "6:00 ص – 10:00 ص", weekend: "7:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" }
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: []
  },


  {
    id: "aqiq",
    slug: "suknai-aqiq",
    nameAr: "فندق سكناي العقيق",
    nameEn: "Suknai Al-Aqiq Hotel",
    taglineAr: "أناقة وراحة في قلب المدينة",
    cityAr: "المدينة المنورة",
    cityEn: "Madinah",
    descriptionAr:
      "فندق سكناي العقيق يقع في موقع استراتيجي بالمدينة المنورة، يوفر ضيافة استثنائية للزوار والمعتمرين بمرافق حديثة وخدمات متميزة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aqiq@suknai.com",
    reservationUrl: "https://booking.suknai.com/aqiq",
    website: "https://aqiq.suknai.com",
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&q=80",
    ],
    coordinates: { lat: 24.4686, lng: 39.6142 },
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
    },
    stars: 0,
    color: "#7c9885",
    roomTypes: [
      {
        nameAr: "غرفة قياسية",
        nameEn: "Standard Room",
        size: "28 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "حمام خاص", "واي فاي", "تلفزيون"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
      },
      {
        nameAr: "غرفة ديلوكس",
        nameEn: "Deluxe Room",
        size: "38 م²",
        capacity: "3 أشخاص",
        features: ["سرير عائلي", "إطلالة على الحديقة", "حوض استحمام"],
        image:
          "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?w=600&q=80",
      },
      {
        nameAr: "جناح العائلة",
        nameEn: "Family Suite",
        size: "65 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "مطبخ مجهز"],
        image:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
      },
    ],
    facilities: [
      { nameAr: "مطعم حلال", icon: "🍽️" },
      { nameAr: "قاعة صلاة", icon: "🕌" },
      { nameAr: "خدمة نقل", icon: "🚌" },
      { nameAr: "صرافة", icon: "💱" },
      { nameAr: "خدمة الغرف", icon: "🛎️" },
      { nameAr: "واي فاي مجاني", icon: "📶" },
      { nameAr: "غسيل ملابس", icon: "👕" },
      { nameAr: "كونسيرج", icon: "🗺️" },
    ],
    landmarks: [
      {
        nameAr: "المسجد النبوي الشريف",
        type: "nearby",
        distance: "1.5 كم",
        image:
          "https://images.unsplash.com/photo-1564508360428-a2b5b3c0b1e2?w=400&q=80",
      },
      {
        nameAr: "مسجد قباء",
        type: "city",
        distance: "4 كم",
        image:
          "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=400&q=80",
      },
      {
        nameAr: "مركز البلد التجاري",
        type: "nearby",
        distance: "0.5 كم",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80",
      },
    ],
    breakfastTimes: { weekday: "5:30 ص – 10:00 ص", weekend: "6:00 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" },
      { labelAr: "خدمة الغرف", number: "22", icon: "🛎️" },
      { labelAr: "الطوارئ", number: "911", icon: "🚨" },
      { labelAr: "خدمة النقل", number: "44", icon: "🚌" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966548765433" },
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "🥗",
        items: ["فطور تقليدي", "بيض بالقشطة", "حليب وعصير", "تمر ومكسرات"],
      },
      {
        nameAr: "المشروبات",
        icon: "☕",
        items: ["قهوة عربية", "شاي أخضر", "عصائر طازجة"],
      },
      {
        nameAr: "الوجبات",
        icon: "🍖",
        items: ["أرز بخاري", "مرق لحم", "دجاج مشوي"],
      },
    ],
  },

  {
    id: "resort",
    slug: "suknai-resort",
    nameAr: "منتجع سكناي",
    nameEn: "Suknai Resort",
    taglineAr: "اهرب إلى جنة الطبيعة",
    cityAr: "الرياض",
    cityEn: "Riyadh",
    reviewUrl: "https://www.google.com/maps/place/منتجع+سكناي",
    descriptionAr:
      "منتجع سكناي في أبها يمنحك تجربة استجمام فريدة وسط طبيعة خلابة وهواء نقي. استمتع بالسكون والراحة بعيداً عن ضجيج المدينة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "resort@suknai.com",
    reservationUrl: "https://booking.suknai.com/resort",
    website: "https://resort.suknai.com",
    heroImage:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80",
    ],
    coordinates: { lat: 18.2164, lng: 42.5053 },
    social: {
      instagram: "https://www.instagram.com/suknai_resorts",
      twitter: "https://x.com/suknai_resorts",
      tiktok: "https://www.tiktok.com/@suknai_resorts",
    },
    stars: 0,
    color: "#4a7c59",
    roomTypes: [
      {
        nameAr: "كوخ الطبيعة",
        nameEn: "Nature Chalet",
        size: "55 م²",
        capacity: "2 أشخاص",
        features: ["شرفة خاصة", "إطلالة على الجبال", "مدفأة", "جاكوزي"],
        image:
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
      },
      {
        nameAr: "فيلا العائلة",
        nameEn: "Family Villa",
        size: "120 م²",
        capacity: "6 أشخاص",
        features: ["3 غرف نوم", "حديقة خاصة", "مطبخ مجهز", "جلسة خارجية"],
        image:
          "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80",
      },
      {
        nameAr: "جناح البانوراما",
        nameEn: "Panorama Suite",
        size: "75 م²",
        capacity: "2 أشخاص",
        features: ["نافذة بانورامية كاملة", "حوض مفتوح", "خدمة خاصة"],
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
      },
    ],
    facilities: [
      { nameAr: "حمام سباحة لانهائي", icon: "🏊" },
      { nameAr: "سبا طبيعية", icon: "💆" },
      { nameAr: "رياضة جبلية", icon: "🧗" },
      { nameAr: "مطعم طبيعي", icon: "🍽️" },
      { nameAr: "نزهات مشي", icon: "🥾" },
      { nameAr: "مراقبة النجوم", icon: "⭐" },
      { nameAr: "نار مفتوحة", icon: "🔥" },
      { nameAr: "خدمة كونسيرج", icon: "🎯" },
    ],
    landmarks: [
      {
        nameAr: "جبل النبي شعيب",
        type: "nearby",
        distance: "8 كم",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
      },
      {
        nameAr: "منتزه عسير الوطني",
        type: "city",
        distance: "5 كم",
        image:
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&q=80",
      },
      {
        nameAr: "بحيرة الملك فهد",
        type: "nearby",
        distance: "3 كم",
        image:
          "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80",
      },
    ],
    breakfastTimes: { weekday: "7:00 ص – 10:30 ص", weekend: "7:30 ص – 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" },
      { labelAr: "خدمة الفيلا", number: "11", icon: "🛎️" },
      { labelAr: "الطوارئ", number: "911", icon: "🚨" },
      { labelAr: "النشاطات", number: "77", icon: "🎯" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966572222223" },
    menuCategories: [
      {
        nameAr: "الإفطار الجبلي",
        icon: "🥗",
        items: ["عيش ولبن", "عسل جبلي", "تمر أخضر", "قشدة طازجة"],
      },
      {
        nameAr: "المشروبات الساخنة",
        icon: "☕",
        items: ["قهوة مختصة", "شاي أعشاب", "كاكاو دافئ"],
      },
      {
        nameAr: "الوجبات",
        icon: "🍖",
        items: ["دجاج مشوي على الفحم", "خروف محمر", "سمك أبها"],
      },
    ],
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
    reservationUrl: "https://booking.suknai.com/ghadi",
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
        nameAr: "شقة استوديو",
        nameEn: "Studio Apartment",
        size: "45 م²",
        capacity: "2 أشخاص",
        features: ["مطبخ مجهز", "غسالة", "نت سريع", "تلفزيون ذكي"],
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
      },
      {
        nameAr: "شقة غرفة وصالة",
        nameEn: "1-Bedroom Apartment",
        size: "70 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم منفصلة", "صالة معيشة", "مطبخ كامل"],
        image:
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
      },
      {
        nameAr: "شقة غرفتين وصالة",
        nameEn: "2-Bedroom Apartment",
        size: "100 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "حمامان", "مطبخ فاخر", "غرفة معيشة"],
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      },
    ],
    facilities: [
      { nameAr: "مطبخ مجهز", icon: "👨‍🍳" },
      { nameAr: "غسالة ونشافة", icon: "👕" },
      { nameAr: "جيم خاص", icon: "💪" },
      { nameAr: "موقف سيارات", icon: "🚗" },
      { nameAr: "أمن 24/7", icon: "🔒" },
      { nameAr: "استقبال متواصل", icon: "🛎️" },
      { nameAr: "إنترنت فائق", icon: "📶" },
      { nameAr: "تنظيف يومي", icon: "🧹" },
    ],
    landmarks: [
      {
        nameAr: "مركز الرياض مول",
        type: "nearby",
        distance: "1 كم",
        image:
          "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80",
      },
      {
        nameAr: "حديقة السلام",
        type: "nearby",
        distance: "0.5 كم",
        image:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80",
      },
      {
        nameAr: "سوق منافسي",
        type: "city",
        distance: "2 كم",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80",
      },
    ],
    breakfastTimes: { weekday: "7:00 ص – 10:00 ص", weekend: "7:30 ص – 11:00 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "📞" },
      { labelAr: "الصيانة", number: "22", icon: "🔧" },
      { labelAr: "الطوارئ", number: "911", icon: "🚨" },
      { labelAr: "النظافة", number: "33", icon: "🧹" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966544455668" },
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "🥗",
        items: ["بيض صحي", "خبز توست", "عصير برتقال", "فواكه طازجة"],
      },
      {
        nameAr: "المشروبات",
        icon: "☕",
        items: ["قهوة أمريكية", "شاي أخضر", "عصائر"],
      },
    ],
  },

];

export const getBrandBySlug = (slug: string): Brand | undefined =>
  BRANDS.find((b) => b.slug === slug);

export const getBrandById = (id: string): Brand | undefined =>
  BRANDS.find((b) => b.id === id);
