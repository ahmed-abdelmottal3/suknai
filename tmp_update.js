const fs = require("fs");

const file = "lib/constants.ts";
let content = fs.readFileSync(file, "utf8");

const newBrands = `
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
    social: {},
    stars: 4,
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
    social: {},
    stars: 4,
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
  }`;

// Find the last "];" before export const getBrandBySlug
const replaceTarget = /];[\r\n\s]+export const getBrandBySlug/g;
content = content.replace(replaceTarget, newBrands + "\n];\n\nexport const getBrandBySlug");
fs.writeFileSync(file, content);
console.log("Updated constants.ts");
