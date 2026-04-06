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
  location: string;
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
      "فندق سكناي رويال يجمع بين الفخامة المعاصرة والضيافة السعودية الأصيلة في قلب الحائل. يقدم الفندق تجربة إقامة استثنائية بتصميم راقٍ وخدمات عالمية المستوى.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "royal@suknai.com",
    reservationUrl: "/contact",
    website: "https://royal.suknai.com",
    heroImage:
      "/royal.jpg",
    galleryImages: [
      "/hael.jpg",
      "/gal1.jpg",
      "/gal2.jpg",
      "/gal3.jpeg",
      "/gal4.jpeg",
      "/gal5.jpeg",
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
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [
      {
        nameAr: "المشروبات",
        icon: "Coffee",
        items: ["قهوة عربية", "شاي كرك", "عصير طازج", "مياه معدنية"],
      },
      {
        nameAr: "الإفطار",
        icon: "Salad",
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
        icon: "Beef",
        items: ["مندي دجاج", "كبسة لحم", "مشوي مشكل", "سمك مشوي"],
      },
      {
        nameAr: "الحلويات",
        icon: "CakeSlice",
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
    descriptionAr: "فندق سكناي الجوف يقدم تجربة ضيافة استثنائية في قلب منطقة الجوف، حيث يجمع بين التصميم العصري والراحة التامة لضمان إقامة لا تُنسى لضيوفنا.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "suknaijouf@suknai.com",
    reservationUrl: "https://booking.suknai.com/suknai-jouf",
    website: "https://suknai-jouf.suknai.com",
    heroImage: "/elgof/RECEPTION (1).jpg.jpeg",
    galleryImages: [
      "/elgof/RECEPTION (1).png",
      "/elgof/RECEPTION (2).png",
      "/elgof/RECEPTION (3).jpg.jpeg",
      "/elgof/CORRIDOR (1).jpg.jpeg",
      "/elgof/CORRIDOR (2).jpg.jpeg",
      "/elgof/LOUNG (2).jpg.jpeg",
      "/elgof/COFFEE SHOP.png",
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
        features: ["سرير كينج", "واي فاي"],
        image: "/elgof/ROOM (1).jpg.jpeg"
      },
      {
        nameAr: "غرفة سوبيريور",
        nameEn: "Superior Room",
        size: "42 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "إطلالة بانورامية"],
        image: "/elgof/ROOM (2).jpg.jpeg"
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "55 م²",
        capacity: "3 أشخاص",
        features: ["صالة جلوس", "منطقة عمل"],
        image: "/elgof/ROOM (3).jpg.jpeg"
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "70 م²",
        capacity: "4 أشخاص",
        features: ["غرف معيشة منفصلة", "خدمات خاصة"],
        image: "/elgof/ROOM (5).jpg.jpeg"
      }
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
    breakfastTimes: { weekday: "6:30 ص – 10:30 ص", weekend: "7:00 ص – 11:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "الكوفي شوب", number: "333", icon: "Coffee" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [
      {
        nameAr: "المشروبات",
        icon: "Coffee",
        items: ["قهوة مختصة", "شاي مغربي", "عصائر طازجة"],
      },
      {
        nameAr: "الحلويات",
        icon: "CakeSlice",
        items: ["تشيز كيك", "مولتن كيك", "كيكة التمر"],
      }
    ]
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
    descriptionAr: "فندق أياس حائل يرحب بكم في قلب منطقة حائل، حيث يجتمع التصميم العصري مع كرم الضيافة الشمالية الأصيلة ليوفر لكم إقامة مريحة وهادئة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aya@suknai.com",
    reservationUrl: "https://booking.suknai.com/aya",
    website: "https://aya.suknai.com",
    heroImage: "/ayashael/DSC_9416-Enhanced-NR copy.jpeg",
    galleryImages: [
      "/ayashael/DSC_6680١٠١٠١٠ copy 2.jpg",
      "/ayashael/DSC_6701 copy.jpg",
      "/ayashael/DSC_6704 copy.jpg",
      "/ayashael/DSC_6709 copy 2.jpg",
      "/ayashael/DSC_6718٨٨٨٨٨٨ copy 2.jpg",
      "/ayashael/DSC_6791 copy.jpg",
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
        nameAr: "غرفة قياسية",
        nameEn: "Standard Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["إطلالة المدينة", "سرير كينج"],
        image: "/ayashael/DSC_6701 copy.jpg"
      },
      {
        nameAr: "غرفة سوبيريور",
        nameEn: "Superior Room",
        size: "40 م²",
        capacity: "2 أشخاص",
        features: ["مساحة واسعة", "ديكور عصري"],
        image: "/ayashael/DSC_6718٨٨٨٨٨٨ copy 2.jpg"
      },
      {
        nameAr: "جناح أياس الفاخر",
        nameEn: "Aya Luxury Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["صالة جلوس واسعة", "إطلالة بانورامية"],
        image: "/ayashael/DSC_6680١٠١٠١٠ copy 2.jpg"
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
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "Salad",
        items: ["فطور بحري", "بيض بالطماطم", "خبز أبيض وعسل"],
      },
      {
        nameAr: "المشروبات",
        icon: "Coffee",
        items: ["قهوة مختصة", "شاي بالنعناع", "عصير برتقال"],
      },
      {
        nameAr: "المأكولات البحرية",
        icon: "Fish",
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
    descriptionAr: "فندق أياس الجوف يجسد الأناقة المعاصرة في قلب منطقة الجوف. يوفر الفندق تجربة إقامة فاخرة بتصاميم حديثة ومرافق متكاملة تلبي تطلعات المسافرين للعمل أو الترفيه.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "ayajouf@suknai.com",
    reservationUrl: "https://booking.suknai.com/aya-jouf",
    website: "https://aya-jouf.suknai.com",
    heroImage: "/ayasgof/gof.jpg",
    galleryImages: [
      "/ayasgof/Image_100.jpg.jpeg",
      "/ayasgof/Image_101.jpg.jpeg",
      "/ayasgof/Image_91.jpg.jpeg",
      "/ayasgof/Image_92.jpg.jpeg",
      "/ayasgof/Image_93.jpg.jpeg",
      "/ayasgof/Image_94.jpg.jpeg",
      "/ayasgof/Image_95.jpg.jpeg",
      "/ayasgof/Image_96.jpg.jpeg",
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
        image: "/ayasgof/Image_88.jpg.jpeg"
      },
      {
        nameAr: "غرفة سوبيريور",
        nameEn: "Superior Room",
        size: "40 م²",
        capacity: "2 أشخاص",
        features: ["مساحة واسعة", "ديكور عصري"],
        image: "/ayasgof/Image_89.jpg.jpeg"
      },
      {
        nameAr: "جناح أياس الفاخر",
        nameEn: "Aya Luxury Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["صالة جلوس واسعة", "إطلالة بانورامية"],
        image: "/ayasgof/Image_90.jpg.jpeg"
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
      { labelAr: "الاستقبال", number: "9", icon: "Phone" },
      { labelAr: "خدمة الغرف", number: "100", icon: "BellRing" }
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "Salad",
        items: ["فطور أياس المميز", "كرويسان طازج", "أومليت بالأعشاب"],
      },
      {
        nameAr: "المشروبات",
        icon: "Coffee",
        items: ["قهوة عربية", "قهوة مختصة (V60)", "عصير رمان طازج"],
      },
      {
        nameAr: "الوجبات الرئيسية",
        icon: "Beef",
        items: ["كبسة لحم حائلية", "دجاج مشوي بالتتبيلة", "مكرونة فوتشيني"],
      },
      {
        nameAr: "الحلويات",
        icon: "CakeSlice",
        items: ["تيراميسو", "كعكة الزعفران", "أم علي بالحليب"],
      },
    ]
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
    menuCategories: []
  },

  {
    id: "aqiq",
    slug: "suknai-aqiq",
    nameAr: "فندق سكناي العقيق",
    nameEn: "Suknai Al-Aqiq Hotel",
    taglineAr: "أناقة وراحة في قلب المدينة المنورة",
    cityAr: "الرياض",
    cityEn: "Madinah",
    descriptionAr:
      "فندق سكناي العقيق يقع في موقع استراتيجي في المدينة المنورة بالقرب من الحرم النبوي الشريف، يوفر ضيافة استثنائية للزوار والمعتمرين بمرافق حديثة وخدمات متميزة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aqiq@suknai.com",
    reservationUrl: "https://booking.suknai.com/aqiq",
    website: "https://aqiq.suknai.com",
    heroImage: "/aqeq/aqeq.jpg",
    galleryImages: [
      "/aqeq/SK-115.jpg",
      "/aqeq/SK-116.jpg",
      "/aqeq/SK-122.jpg",
      "/aqeq/SK-136.jpg",
      "/aqeq/SK-23.jpg",
      "/aqeq/SK-24.jpg",
      "/aqeq/SK-25.jpg",
      "/aqeq/SK-2 EDIT.jpg",
    ],
    coordinates: { lat: 24.4686, lng: 39.6142 },
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
    },
    stars: 4,
    color: "#7c9885",
    roomTypes: [
      {
        nameAr: "غرفة قياسية",
        nameEn: "Standard Room",
        size: "28 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "حمام خاص", "واي فاي", "تلفزيون"],
        image: "/aqeq/SK-100.jpg",
      },
      {
        nameAr: "غرفة ديلوكس",
        nameEn: "Deluxe Room",
        size: "38 م²",
        capacity: "3 أشخاص",
        features: ["سرير عائلي", "إطلالة على المدينة", "حوض استحمام"],
        image: "/aqeq/SK-101.jpg",
      },
      {
        nameAr: "جناح العائلة",
        nameEn: "Family Suite",
        size: "65 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "مطبخ مجهز"],
        image: "/aqeq/SK-102.jpg",
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
        image: "/masjid_an_nabawi_1775434724330.png",
        location: ''
      },
      {
        nameAr: "مسجد قباء",
        type: "city",
        distance: "4 كم",
        image: "/quba_mosque_madinah_1775434774520.png",
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
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "Salad",
        items: ["فطور تقليدي", "بيض بالقشطة", "حليب وعصير", "تمر ومكسرات"],
      },
      {
        nameAr: "المشروبات",
        icon: "Coffee",
        items: ["قهوة عربية", "شاي أخضر", "عصائر طازجة"],
      },
      {
        nameAr: "الوجبات",
        icon: "Beef",
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
    cityAr: "أبها",
    cityEn: "Abha",
    reviewUrl: "https://www.google.com/maps/place/منتجع+سكناي",
    descriptionAr: "منتجع سكناي في مدينة أبها الساحرة، يمنحك تجربة استجمام استثنائية وخصوصية تامة وسط الطبيعة الجبلية الخلابة والهواء النقي، مما يجعله الوجهة المثالية للباحثين عن الهدوء والراحة بعيداً عن صخب المدينة.",
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "resort@suknai.com",
    reservationUrl: "https://booking.suknai.com/resort",
    website: "https://resort.suknai.com",
    heroImage: "/montg3/نسخة من منتجع (1).jpg",
    galleryImages: [
      "/montg3/نسخة من منتجع (2).jpg",
      "/montg3/نسخة من منتجع (10).jpg",
      "/montg3/نسخة من منتجع (12).jpg",
      "/montg3/نسخة من منتجع (13).jpg",
      "/montg3/نسخة من Reception (1).jpg",
      "/montg3/منتجع (2).jpg",
      "/montg3/منتجع (24).jpg",
      "/montg3/منتجع (36).jpg",
    ],
    coordinates: { lat: 18.2164, lng: 42.5053 },
    social: {
      instagram: "https://www.instagram.com/suknai_resorts",
      twitter: "https://x.com/suknai_resorts",
      tiktok: "https://www.tiktok.com/@suknai_resorts",
    },
    stars: 5,
    color: "#4a7c59",
    roomTypes: [
      {
        nameAr: "شاليه الطبيعة",
        nameEn: "Nature Chalet",
        size: "55 م²",
        capacity: "2 أشخاص",
        features: ["شرفة خاصة", "إطلالة على الجبال", "مدفأة", "جاكوزي"],
        image: "/montg3/منتجع (36).jpg"
      },
      {
        nameAr: "فيلا العائلة",
        nameEn: "Family Villa",
        size: "120 م²",
        capacity: "6 أشخاص",
        features: ["3 غرف نوم", "حديقة خاصة", "مطبخ مجهز", "جلسة خارجية"],
        image: "/montg3/منتجع (49).jpg"
      },
      {
        nameAr: "جناح البانوراما الفاخر",
        nameEn: "Panorama Luxury Suite",
        size: "75 م²",
        capacity: "2 أشخاص",
        features: ["نافذة بانورامية كاملة", "حوض مفتوح", "خدمة خاصة"],
        image: "/montg3/منتجع (70).jpg"
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
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [
      {
        nameAr: "الإفطار الجبلي",
        icon: "Salad",
        items: ["عيش ولبن", "عسل جبلي", "تمر أخضر", "قشدة طازجة"],
      },
      {
        nameAr: "المشروبات الساخنة",
        icon: "Coffee",
        items: ["قهوة مختصة", "شاي أعشاب", "كاكاو دافئ"],
      },
      {
        nameAr: "الوجبات",
        icon: "Flame",
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
    menuCategories: [
      {
        nameAr: "الإفطار",
        icon: "Salad",
        items: ["بيض صحي", "خبز توست", "عصير برتقال", "فواكه طازجة"],
      },
      {
        nameAr: "المشروبات",
        icon: "Coffee",
        items: ["قهوة أمريكية", "شاي أخضر", "عصائر"],
      },
    ],
  },

];

export const getBrandBySlug = (slug: string): Brand | undefined =>
  BRANDS.find((b) => b.slug === slug);

export const getBrandById = (id: string): Brand | undefined =>
  BRANDS.find((b) => b.id === id);
