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
    youtube?: string;
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
  branches?: BranchInfo[];
}

export interface BranchInfo {
  nameAr: string;
  whatsapp: string;
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
    coordinates: { lat: 27.5219, lng: 41.6961 },
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
    },
    stars: 0,
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
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
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
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
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
        image: "/elgof/room-1.jpg.jpeg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/elgof/room-2.jpg.jpeg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/elgof/room-3.jpg.jpeg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/elgof/room-5.jpg.jpeg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/elgof/room-6.jpg.jpeg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/elgof/corridor-1.jpg.jpeg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/elgof/corridor-2.jpg.jpeg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/elgof/corridor-3.jpg.jpeg",
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
    landmarks: [
      {
        nameAr: "قلعة مارد الأثرية",
        type: "nearby",
        distance: "4 كم",
        image: "/marid_castle.png",
        location: "https://share.google/jBU6AcyO6Sc6Cryjm"
      },
      {
        nameAr: "قلعة زعبل",
        type: "city",
        distance: "6 كم",
        image: "/zaabal_castle.png",
        location: "https://share.google/TWCNBzxt0IDjuoh5D"
      },
      {
        nameAr: "دومة الجندل",
        type: "nearby",
        distance: "12 كم",
        image: "/dumat_aljandal.png",
        location: "https://share.google/yei3sG9pBrJ98EZ5D"
      }
    ],
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
  },

  {
    id: "aqiq",
    slug: "suknai-aqiq",
    nameAr: "فندق سكناي - العقيق",
    nameEn: "Suknai Al-Aqiq Hotel",
    taglineAr: "أناقة وراحة في قلب الرياض",
    cityAr: "الرياض",
    cityEn: "Riyadh",
    descriptionAr:
      'منتجع سكناي في الرياض يقدم تجربة إقامة فاخرة تجمع بين الخصوصية والهدوء بأجواء عصرية راقية ،شاليهات فندقية واسعة بمسابح خاصة ، ومساحات مثالية للتجمعات ، تجربة متكاملة لمن يبحث عن الراحة بأسلوب مختلف. ',
    phone: "+966920031010",
    whatsapp: "+966920031010",
    email: "aqiq@suknai.com",
    website: "https://aqiq.suknai.com",
    heroImage: "/aqeq/aqeq.jpg",
    galleryImages: [
      "/aqeq/sk-2-edit.jpg",
      "/aqeq/SK-116.jpg",
      "/aqeq/SK-122.jpg",
      "/aqeq/SK-136.jpg",
      "/aqeq/SK-23.jpg",
      "/aqeq/SK-24.jpg",
      "/aqeq/SK-25.jpg",
    ],
    coordinates: { lat: 24.4712, lng: 39.6058 }, // Updated for Madinah
    mapUrl: "https://maps.app.goo.gl/iU4JfQuBmVVP4n1V9",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9012.23015245576!2d39.6105022!3d24.4726058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfd70ecc73bd%3A0x4c65dce789386331!2z2YHZhtiv2YIg2KfZhNi52YLZitmC!5e1!3m2!1sar!2seg!4v1775461870110!5m2!1sar!2seg",
    social: {
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
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
        image: "/aqeq/SK-100.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/aqeq/SK-101.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/aqeq/SK-102.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/aqeq/SK-60.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/aqeq/SK-61.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/aqeq/SK-62.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/aqeq/SK-63.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/aqeq/sk-2-edit.jpg",
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
        nameAr: "مركز الملك عبدالله المالي",
        type: "nearby",
        distance: "1.5 كم",
        image: "/kafd.png",
        location: "https://maps.app.goo.gl/3ejsbqnawaLj9CeWA"
      },
      {
        nameAr: "بوليفارد سيتي",
        type: "nearby",
        distance: "6 كم",
        image: "/boulevard.png",
        location: "https://maps.app.goo.gl/USR7BSh6mzoDmvd36"
      },
    ],
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
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
    descriptionAr: "منتجع سكناي في الرياض يقدم تجربة إقامة فاخرة تجمع بين الخصوصية والهدوء بأجواء عصرية راقية ،شاليهات فندقية واسعة بمسابح خاصة ، ومساحات مثالية للتجمعات ، تجربة متكاملة لمن يبحث عن الراحة بأسلوب مختلف.",
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
      instagram: "https://www.instagram.com/suknai_hotels",
      twitter: "https://x.com/suknai_hotels",
      tiktok: "https://www.tiktok.com/@suknai_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
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
        image: "/montg3/copy-of-resort-1.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/montg3/copy-of-resort-2.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/montg3/copy-of-resort-10.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/montg3/copy-of-resort-11.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/montg3/copy-of-resort-12.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/montg3/copy-of-resort-13.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/montg3/copy-of-resort-15.jpg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/montg3/copy-of-resort-16.jpg",
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
        nameAr: "مطار الملك خالد الدولي",
        type: "nearby",
        distance: "12 كم",
        image: "/kkia.png",
        location: "https://maps.app.goo.gl/diQs3ycqHB6yKpbH8"
      },
      {
        nameAr: "واجهة روشن",
        type: "nearby",
        distance: "18 كم",
        image: "/roshn_front.png",
        location: "https://maps.app.goo.gl/2ozLjf7LDTaXGxKP8"
      },
    ],
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
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
      tiktok: "https://www.tiktok.com/@ayas_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
    },
    stars: 0,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/ayashael/dsc-6680101010-copy-2.jpg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/ayashael/dsc-6701-copy.jpg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/ayashael/dsc-6704-copy.jpg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/ayashael/dsc-6709-copy-2.jpg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/ayashael/dsc-6718888888-copy-2.jpg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/ayashael/dsc-6791-copy.jpg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/ayashael/dsc-9416-enhanced-nr-copy.jpeg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/ayashael/dsc-6680101010-copy-2.jpg",
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
        nameAr: "جامع الراجحي",
        type: "nearby",
        distance: "3 كم",
        image: "/rajhi.jpg",
        location: "https://maps.app.goo.gl/Xw1z1va7tVQP9Zyr8"
      },
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
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
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
      tiktok: "https://www.tiktok.com/@ayas_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
    },
    stars: 0,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "جناح قياسي",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/ayasgof/image-88.jpg.jpeg",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "/ayasgof/image-89.jpg.jpeg",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "/ayasgof/image-90.jpg.jpeg",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "/ayasgof/image-91.jpg.jpeg",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "/ayasgof/image-92.jpg.jpeg",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "/ayasgof/image-93.jpg.jpeg",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "/ayasgof/image-94.jpg.jpeg",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "/ayasgof/image-95.jpg.jpeg",
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
        nameAr: "قلعة مارد الأثرية",
        type: "nearby",
        distance: "4 كم",
        image: "/marid_castle.png",
        location: "https://share.google/jBU6AcyO6Sc6Cryjm"
      },
      {
        nameAr: "قلعة زعبل",
        type: "city",
        distance: "6 كم",
        image: "/zaabal_castle.png",
        location: "https://share.google/TWCNBzxt0IDjuoh5D"
      },
      {
        nameAr: "دومة الجندل",
        type: "nearby",
        distance: "12 كم",
        image: "/dumat_aljandal.png",
        location: "https://share.google/yei3sG9pBrJ98EZ5D"
      }
    ],
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
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
    heroImage: "/3neza/3neza.jpg",
    galleryImages: [
      "/3neza/IMG-20250112-WA0010.jpg",
      "/3neza/IMG-20250112-WA0011.jpg",
      "/3neza/IMG-20250112-WA0012.jpg",
      "/3neza/IMG-20250112-WA0013.jpg",
      "/3neza/IMG-20250112-WA0014.jpg",
      "/3neza/IMG-20250112-WA0015.jpg",
    ],
    coordinates: { lat: 26.0941, lng: 43.9734 },
    social: {
      instagram: "https://www.instagram.com/ayas_hotels/",
      twitter: "https://x.com/ayas_hotels",
      tiktok: "https://www.tiktok.com/@ayas_hotels",
      snapchat: "https://t.snapchat.com/vccErFdb",
    },
    stars: 0,
    color: "#2a6fa8",
    roomTypes: [
      {
        nameAr: "جناح قياسية",
        nameEn: "Standard Suite",
        size: "45 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة", "ميني بار", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "gallery-icon",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "gallery-icon",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "gallery-icon",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "gallery-icon",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "gallery-icon",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "gallery-icon",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "gallery-icon",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "gallery-icon",
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
        nameAr: "سوق المسوكف الشعبي",
        type: "nearby",
        distance: "3 كم",
        image: "/musokaf_market.png",
        location: "https://share.google/a0MDlswdAIpYCxPOL"
      },
      {
        nameAr: "مسجد الجوز التاريخي",
        type: "nearby",
        distance: "5 كم",
        image: "/aljouz_mosque.png",
        location: "https://share.google/c1TnrKSBRYZRfMvLF"
      },
      {
        nameAr: "منتزهات الحاجب",
        type: "city",
        distance: "8 كم",
        image: "/alhajeb_parks.png",
        location: "https://share.google/6JGmZlMZtuxAkWT9Z"
      },
    ],
    breakfastTimes: { weekday: "6:30 ص - 10:30 ص", weekend: "6:30 ص - 10:30 ص" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
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
      instagram: "https://www.instagram.com/suknai_group",
      twitter: "https://x.com/suknai_group",
      snapchat: "https://t.snapchat.com/vccErFdb",
      tiktok: "https://www.tiktok.com/@suknai_group",
      youtube: "https://youtube.com/@suknai_sa",
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
        image: "",
      },
      {
        nameAr: "ديلوكس",
        nameEn: "Deluxe Room",
        size: "32 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "جلسة صغيرة", "مكتب عمل", "حش مطري"],
        image: "",
      },
      {
        nameAr: "قياسية بدون إطلالة",
        nameEn: "Standard Room (No View)",
        size: "24 م²",
        capacity: "2 أشخاص",
        features: ["سرير كينج", "مكيف", "واي فاي مجاني", "تلفزيون ذكي"],
        image: "",
      },
      {
        nameAr: "جناح جونيور",
        nameEn: "Junior Suite",
        size: "50 م²",
        capacity: "3 أشخاص",
        features: ["تصميم مفتوح", "منطقة جلوس", "إضاءة هادئة", "خدمة ضيافة"],
        image: "",
      },
      {
        nameAr: "جناح بغرفتين نوم",
        nameEn: "Two-Bedroom Suite",
        size: "78 م²",
        capacity: "5 أشخاص",
        features: ["غرفتا نوم", "صالة معيشة", "طاولة طعام", "حمامان"],
        image: "",
      },
      {
        nameAr: "جناح ديلوكس",
        nameEn: "Deluxe Suite",
        size: "58 م²",
        capacity: "3 أشخاص",
        features: ["غرفة نوم وصالة واسعة", "إطلالة أفضل", "خدمة غرف", "آلة قهوة"],
        image: "",
      },
      {
        nameAr: "جناح رويال",
        nameEn: "Royal Suite",
        size: "95 م²",
        capacity: "4 أشخاص",
        features: ["أرقى جناح", "خدمات ملكية", "إطلالة بانورامية"],
        image: "",
      },
      {
        nameAr: "جناح تنفيذي",
        nameEn: "Executive Suite",
        size: "65 م²",
        capacity: "3 أشخاص",
        features: ["جناح لرجال الأعمال", "مساحة هادئة", "خدمات سريعة"],
        image: "",
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
        nameAr: "جامع الراجحي",
        type: "nearby",
        distance: "3 كم",
        image: "/rajhi.jpg",
        location: "https://maps.app.goo.gl/Xw1z1va7tVQP9Zyr8"
      },
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
    breakfastTimes: { weekday: "", weekend: "" },
    importantNumbers: [
      { labelAr: "الاستقبال", number: "0", icon: "Phone" },
      { labelAr: "المطعم", number: "333", icon: "UtensilsCrossed" },
      { labelAr: "الكوفي", number: "333", icon: "Coffee" },
      { labelAr: "العمليات الموحدة", number: "911", icon: "Siren" },
      { labelAr: "الدفاع المدني", number: "998", icon: "Lock" },
      { labelAr: "الاسعاف", number: "997", icon: "Heart" },
    ],
    dutyManager: { nameAr: "المدير المناوب", phone: "+966920031010" },
    menuCategories: [],
    branches: [
      { nameAr: "فرع الياسمين", whatsapp: "+966920031010" },
      { nameAr: "فرع صلاح الدين", whatsapp: "+966920031010" },
      { nameAr: "فرع أجا", whatsapp: "+966920031010" },
    ],
  },

];

export const getBrandBySlug = (slug: string): Brand | undefined =>
  BRANDS.find((b) => b.slug === slug);

export const getBrandById = (id: string): Brand | undefined =>
  BRANDS.find((b) => b.id === id);
