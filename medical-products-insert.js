// MongoDB Insert Commands for 30 Medical Equipment Products
// Copy and paste these commands into your MongoDB shell

db.products.insertOne({
  "name": {
    "en": "Digital Blood Pressure Monitor",
    "ar": "جهاز قياس ضغط الدم الرقمي"
  },
  "description": {
    "en": "Innovative medical device with cutting-edge technology",
    "ar": "جهاز طبي مبتكر بتقنية متطورة"
  },
  "category": "medical",
  "price": 383.89,
  "originalPrice": 461.53,
  "stock": 107,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Auto shut-off",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "High precision measurement",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Lightweight design",
      "ar": "حجم محمول"
    },
    {
      "en": "Portable size",
      "ar": "قياس عالي الدقة"
    }
  ],
  "rating": 4.7,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Pulse Oximeter",
    "ar": "جهاز قياس نبض الأكسجين"
  },
  "description": {
    "en": "State-of-the-art medical technology for improved patient outcomes",
    "ar": "أحدث تقنيات الأجهزة الطبية لتحسين نتائج المرضى"
  },
  "category": "medical",
  "price": 256.81,
  "originalPrice": 317.45,
  "stock": 78,
  "images": [
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Alarm function",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Easy to use interface",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Portable size",
      "ar": "تصميم خفيف الوزن"
    },
    {
      "en": "High precision measurement",
      "ar": "واجهة سهلة الاستخدام"
    }
  ],
  "rating": 4.8,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Digital Thermometer",
    "ar": "ميزان حرارة رقمي"
  },
  "description": {
    "en": "Clinical grade medical instrument for precise measurements",
    "ar": "أجهزة طبية من الفئة السريرية لقياسات دقيقة"
  },
  "category": "medical",
  "price": 360.76,
  "originalPrice": 416.92,
  "stock": 25,
  "images": [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Alarm function",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Auto shut-off",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Lightweight design",
      "ar": "حجم محمول"
    },
    {
      "en": "Memory storage",
      "ar": "تعمل بالبطارية"
    }
  ],
  "rating": 4.8,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Nebulizer Machine",
    "ar": "جهاز تبخير"
  },
  "description": {
    "en": "Reliable medical apparatus for continuous health monitoring",
    "ar": "معدات طبية موثوقة للإشراف الصحي المستمر"
  },
  "category": "medical",
  "price": 40.97,
  "originalPrice": 53.48,
  "stock": 164,
  "images": [
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Auto shut-off",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "High precision measurement",
      "ar": "إيقاف تلقائي"
    },
    {
      "en": "Battery operated",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Easy to use interface",
      "ar": "تصميم خفيف الوزن"
    }
  ],
  "rating": 3.8,
  "isNew": false,
  "isFeatured": true,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Blood Glucose Meter",
    "ar": "جهاز قياس السكر في الدم"
  },
  "description": {
    "en": "Professional medical device for accurate monitoring and diagnosis",
    "ar": "جهاز طبي احترافي لمراقبة وتشخيص دقيقة"
  },
  "category": "medical",
  "price": 399.03,
  "originalPrice": 539.36,
  "stock": 125,
  "images": [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "High precision measurement",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Portable size",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Easy to use interface",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Lightweight design",
      "ar": "وظيفة الإنذار"
    }
  ],
  "rating": 4.5,
  "isNew": true,
  "isFeatured": true,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Digital Weight Scale",
    "ar": "ميزان وزن رقمي"
  },
  "description": {
    "en": "Innovative medical device with cutting-edge technology",
    "ar": "جهاز طبي مبتكر بتقنية متطورة"
  },
  "category": "medical",
  "price": 304.91,
  "originalPrice": 358.74,
  "stock": 95,
  "images": [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Durable construction",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Memory storage",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Alarm function",
      "ar": "حجم محمول"
    },
    {
      "en": "Battery operated",
      "ar": "بناء متين"
    }
  ],
  "rating": 4.8,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Infrared Thermometer",
    "ar": "ميزان حرارة بالأشعة تحت الحمراء"
  },
  "description": {
    "en": "Clinical grade medical instrument for precise measurements",
    "ar": "أجهزة طبية من الفئة السريرية لقياسات دقيقة"
  },
  "category": "medical",
  "price": 307.47,
  "originalPrice": 449.45,
  "stock": 154,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Easy to use interface",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Durable construction",
      "ar": "تصميم خفيف الوزن"
    },
    {
      "en": "Auto shut-off",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Alarm function",
      "ar": "إيقاف تلقائي"
    }
  ],
  "rating": 3.5,
  "isNew": false,
  "isFeatured": true,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Compression Therapy Device",
    "ar": "جهاز العلاج بالضغط"
  },
  "description": {
    "en": "State-of-the-art medical technology for improved patient outcomes",
    "ar": "أحدث تقنيات الأجهزة الطبية لتحسين نتائج المرضى"
  },
  "category": "medical",
  "price": 224.46,
  "originalPrice": 316.98,
  "stock": 148,
  "images": [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Alarm function",
      "ar": "حجم محمول"
    },
    {
      "en": "Portable size",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Durable construction",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Easy to use interface",
      "ar": "واجهة سهلة الاستخدام"
    }
  ],
  "rating": 4.1,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Electric Massager Gun",
    "ar": "مساج كهربائي"
  },
  "description": {
    "en": "Professional medical device for accurate monitoring and diagnosis",
    "ar": "جهاز طبي احترافي لمراقبة وتشخيص دقيقة"
  },
  "category": "medical",
  "price": 120.16,
  "originalPrice": 134.34,
  "stock": 184,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Portable size",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "High precision measurement",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Easy to use interface",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Durable construction",
      "ar": "وظيفة الإنذار"
    }
  ],
  "rating": 4.9,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Medical Nebulizer Mask Kit",
    "ar": "مجموعة أقنعة التبخير الطبية"
  },
  "description": {
    "en": "Clinical grade medical instrument for precise measurements",
    "ar": "أجهزة طبية من الفئة السريرية لقياسات دقيقة"
  },
  "category": "medical",
  "price": 219.47,
  "originalPrice": 259.56,
  "stock": 143,
  "images": [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Easy to use interface",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Alarm function",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "High precision measurement",
      "ar": "حجم محمول"
    },
    {
      "en": "Durable construction",
      "ar": "إيقاف تلقائي"
    }
  ],
  "rating": 4.9,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Blood Pressure Cuff",
    "ar": "كمامة ضغط الدم"
  },
  "description": {
    "en": "Professional medical device for accurate monitoring and diagnosis",
    "ar": "جهاز طبي احترافي لمراقبة وتشخيص دقيقة"
  },
  "category": "medical",
  "price": 23.96,
  "originalPrice": 35.88,
  "stock": 109,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Portable size",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Durable construction",
      "ar": "تصميم خفيف الوزن"
    },
    {
      "en": "Battery operated",
      "ar": "إيقاف تلقائي"
    },
    {
      "en": "Auto shut-off",
      "ar": "شاشة رقمية"
    }
  ],
  "rating": 5,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Stethoscope Professional",
    "ar": "سماعة طبية احترافية"
  },
  "description": {
    "en": "Clinical grade medical instrument for precise measurements",
    "ar": "أجهزة طبية من الفئة السريرية لقياسات دقيقة"
  },
  "category": "medical",
  "price": 322.92,
  "originalPrice": 437.3,
  "stock": 10,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Auto shut-off",
      "ar": "بناء متين"
    },
    {
      "en": "Portable size",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Alarm function",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Memory storage",
      "ar": "حجم محمول"
    }
  ],
  "rating": 4.4,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Medical Oxygen Concentrator",
    "ar": "جهاز تركيز الأكسجين الطبي"
  },
  "description": {
    "en": "High-quality medical device designed for patient care",
    "ar": "معدات طبية عالية الجودة مصممة للعناية بالمرضى"
  },
  "category": "medical",
  "price": 345.79,
  "originalPrice": 427.22,
  "stock": 54,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Memory storage",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Battery operated",
      "ar": "بناء متين"
    },
    {
      "en": "Easy to use interface",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Auto shut-off",
      "ar": "واجهة سهلة الاستخدام"
    }
  ],
  "rating": 3.7,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Digital Fitness Tracker",
    "ar": "جهاز تتبع اللياقة الرقمي"
  },
  "description": {
    "en": "Precision engineered medical equipment for healthcare professionals",
    "ar": "معدات طبية مصممة بدقة هندسية لمحترفي الرعاية الصحية"
  },
  "category": "medical",
  "price": 40.63,
  "originalPrice": 45.1,
  "stock": 195,
  "images": [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Lightweight design",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Memory storage",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Alarm function",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Battery operated",
      "ar": "إيقاف تلقائي"
    }
  ],
  "rating": 4.1,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Medical Face Shield Pack",
    "ar": "عبوة دروع وجه طبية"
  },
  "description": {
    "en": "Reliable medical apparatus for continuous health monitoring",
    "ar": "معدات طبية موثوقة للإشراف الصحي المستمر"
  },
  "category": "medical",
  "price": 302.78,
  "originalPrice": 409.71,
  "stock": 196,
  "images": [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Alarm function",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Lightweight design",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Auto shut-off",
      "ar": "حجم محمول"
    },
    {
      "en": "Easy to use interface",
      "ar": "بناء متين"
    }
  ],
  "rating": 3.6,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Disposable Medical Gloves",
    "ar": "قفازات طبية قابلة للتصرف"
  },
  "description": {
    "en": "State-of-the-art medical technology for improved patient outcomes",
    "ar": "أحدث تقنيات الأجهزة الطبية لتحسين نتائج المرضى"
  },
  "category": "medical",
  "price": 183.19,
  "originalPrice": 263.02,
  "stock": 169,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Portable size",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Battery operated",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Lightweight design",
      "ar": "إيقاف تلقائي"
    },
    {
      "en": "Durable construction",
      "ar": "وظيفة الإنذار"
    }
  ],
  "rating": 4.8,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Medical Hand Sanitizer Gel",
    "ar": "هل ت sanitizer الطبي"
  },
  "description": {
    "en": "Clinical grade medical instrument for precise measurements",
    "ar": "أجهزة طبية من الفئة السريرية لقياسات دقيقة"
  },
  "category": "medical",
  "price": 246.12,
  "originalPrice": 342.6,
  "stock": 7,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Durable construction",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Easy to use interface",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Alarm function",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Digital display",
      "ar": "تعمل بالبطارية"
    }
  ],
  "rating": 4.6,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Surgical Face Masks",
    "ar": "أقنعة وجه جراحية"
  },
  "description": {
    "en": "Professional medical device for accurate monitoring and diagnosis",
    "ar": "جهاز طبي احترافي لمراقبة وتشخيص دقيقة"
  },
  "category": "medical",
  "price": 32.02,
  "originalPrice": 45.73,
  "stock": 88,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Battery operated",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Durable construction",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Auto shut-off",
      "ar": "بناء متين"
    },
    {
      "en": "Portable size",
      "ar": "وظيفة الإنذار"
    }
  ],
  "rating": 4.3,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Medical Thermometer Case",
    "ar": "حافظة ميزان الحرارة الطبية"
  },
  "description": {
    "en": "Reliable medical apparatus for continuous health monitoring",
    "ar": "معدات طبية موثوقة للإشراف الصحي المستمر"
  },
  "category": "medical",
  "price": 315.19,
  "originalPrice": 452.89,
  "stock": 162,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Durable construction",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Battery operated",
      "ar": "بناء متين"
    },
    {
      "en": "Portable size",
      "ar": "وظيفة الإنذار"
    },
    {
      "en": "Lightweight design",
      "ar": "شاشة رقمية"
    }
  ],
  "rating": 4.7,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Orthopedic Walking Cane",
    "ar": "عصا مشية طبية"
  },
  "description": {
    "en": "Precision engineered medical equipment for healthcare professionals",
    "ar": "معدات طبية مصممة بدقة هندسية لمحترفي الرعاية الصحية"
  },
  "category": "medical",
  "price": 313.82,
  "originalPrice": 400.67,
  "stock": 158,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Lightweight design",
      "ar": "تصميم خفيف الوزن"
    },
    {
      "en": "Battery operated",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Portable size",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Durable construction",
      "ar": "واجهة سهلة الاستخدام"
    }
  ],
  "rating": 4.6,
  "isNew": true,
  "isFeatured": true,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Medical Compression Socks",
    "ar": "جوارب ضغط طبية"
  },
  "description": {
    "en": "Durable medical equipment built for longevity and performance",
    "ar": " equipments طبية متينة مبنية على المتانة والأداء"
  },
  "category": "medical",
  "price": 30.49,
  "originalPrice": 41.75,
  "stock": 100,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Durable construction",
      "ar": "بناء متين"
    },
    {
      "en": "Digital display",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Auto shut-off",
      "ar": "حجم محمول"
    },
    {
      "en": "Portable size",
      "ar": "قياس عالي الدقة"
    }
  ],
  "rating": 3.7,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Digital Body Fat Scale",
    "ar": "ميزان نسبة الدهون في الجسم الرقمي"
  },
  "description": {
    "en": "Advanced healthcare equipment for home medical care",
    "ar": "معدات رعاية صحية متقدمة للعناية الطبية المنزلية"
  },
  "category": "medical",
  "price": 442.14,
  "originalPrice": 653.21,
  "stock": 86,
  "images": [
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "High precision measurement",
      "ar": "شاشة رقمية"
    },
    {
      "en": "Durable construction",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Memory storage",
      "ar": "وظيفة الإنذار"
    },
    {
      "en": "Digital display",
      "ar": "بناء متين"
    }
  ],
  "rating": 3.7,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Medical Examination Lamp",
    "ar": "مصباح فحص طبي"
  },
  "description": {
    "en": "Professional medical device for accurate monitoring and diagnosis",
    "ar": "جهاز طبي احترافي لمراقبة وتشخيص دقيقة"
  },
  "category": "medical",
  "price": 129.39,
  "originalPrice": 149.38,
  "stock": 27,
  "images": [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Battery operated",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "High precision measurement",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Portable size",
      "ar": "بناء متين"
    },
    {
      "en": "Lightweight design",
      "ar": "حجم محمول"
    }
  ],
  "rating": 3.9,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "First Aid Kit Professional",
    "ar": "عدة إسعاف أولي احترافية"
  },
  "description": {
    "en": "High-quality medical device designed for patient care",
    "ar": "معدات طبية عالية الجودة مصممة للعناية بالمرضى"
  },
  "category": "medical",
  "price": 20.96,
  "originalPrice": 23.33,
  "stock": 160,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "High precision measurement",
      "ar": "وظيفة الإنذار"
    },
    {
      "en": "Auto shut-off",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Durable construction",
      "ar": "حجم محمول"
    },
    {
      "en": "Battery operated",
      "ar": "واجهة سهلة الاستخدام"
    }
  ],
  "rating": 3.8,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Medical Alcohol Wipes",
    "ar": "مناديل كحول طبية"
  },
  "description": {
    "en": "Professional medical device for accurate monitoring and diagnosis",
    "ar": "جهاز طبي احترافي لمراقبة وتشخيص دقيقة"
  },
  "category": "medical",
  "price": 190.32,
  "originalPrice": 211.63,
  "stock": 53,
  "images": [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Lightweight design",
      "ar": "بناء متين"
    },
    {
      "en": "Auto shut-off",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Memory storage",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Digital display",
      "ar": "شاشة رقمية"
    }
  ],
  "rating": 3.6,
  "isNew": true,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Blood Collection Tubes Set",
    "ar": "مجموعة أنابيب سحب الدم"
  },
  "description": {
    "en": "High-quality medical device designed for patient care",
    "ar": "معدات طبية عالية الجودة مصممة للعناية بالمرضى"
  },
  "category": "medical",
  "price": 347.21,
  "originalPrice": 441.89,
  "stock": 79,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "High precision measurement",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Easy to use interface",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Battery operated",
      "ar": "تصميم خفيف الوزن"
    },
    {
      "en": "Alarm function",
      "ar": "شاشة رقمية"
    }
  ],
  "rating": 4.5,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Medical Syringe Set",
    "ar": "مجموعة حقن طبية"
  },
  "description": {
    "en": "Essential medical tool for healthcare facilities and home use",
    "ar": "أداة طبية أساسية لمرافق الرعاية الصحية والاستخدام المنزلي"
  },
  "category": "medical",
  "price": 73.75,
  "originalPrice": 106.39,
  "stock": 31,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1584456319363-d6a9ca8d25c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0Nnw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Easy to use interface",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "Auto shut-off",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Portable size",
      "ar": "تصميم خفيف الوزن"
    },
    {
      "en": "High precision measurement",
      "ar": "وظيفة الإنذار"
    }
  ],
  "rating": 4.7,
  "isNew": false,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Digital Pregnancy Test Kit",
    "ar": "عدة اختبار الحمل الرقمية"
  },
  "description": {
    "en": "Advanced healthcare equipment for home medical care",
    "ar": "معدات رعاية صحية متقدمة للعناية الطبية المنزلية"
  },
  "category": "medical",
  "price": 17.92,
  "originalPrice": 21.35,
  "stock": 132,
  "images": [
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Digital display",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Battery operated",
      "ar": "واجهة سهلة الاستخدام"
    },
    {
      "en": "High precision measurement",
      "ar": "حجم محمول"
    },
    {
      "en": "Easy to use interface",
      "ar": "بناء متين"
    }
  ],
  "rating": 4,
  "isNew": true,
  "isFeatured": false,
  "isPopular": true
});

db.products.insertOne({
  "name": {
    "en": "Medical Cotton Balls Pack",
    "ar": "مجموعة مسحات قطنية طبية"
  },
  "description": {
    "en": "Innovative medical device with cutting-edge technology",
    "ar": "جهاز طبي مبتكر بتقنية متطورة"
  },
  "category": "medical",
  "price": 229.77,
  "originalPrice": 294.54,
  "stock": 124,
  "images": [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTA3Njg0OHw&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1586982919593-70f5fd07bd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGV0aG9zY29wZXxlbnwwfHx8fDE3NTkwNzY4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Battery operated",
      "ar": "وظيفة الإنذار"
    },
    {
      "en": "High precision measurement",
      "ar": "حجم محمول"
    },
    {
      "en": "Alarm function",
      "ar": "تخزين الذاكرة"
    },
    {
      "en": "Auto shut-off",
      "ar": "إيقاف تلقائي"
    }
  ],
  "rating": 4.1,
  "isNew": true,
  "isFeatured": true,
  "isPopular": false
});

db.products.insertOne({
  "name": {
    "en": "Emergency Medical Blanket",
    "ar": "بطانية طبية طارئة"
  },
  "description": {
    "en": "Durable medical equipment built for longevity and performance",
    "ar": " equipments طبية متينة مبنية على المتانة والأداء"
  },
  "category": "medical",
  "price": 21.16,
  "originalPrice": 29.16,
  "stock": 5,
  "images": [
    "https://images.unsplash.com/photo-1586498847547-1c1e45b809d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NTkwNzY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622059342013-b00f0dc009c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdHJ1bWVudHN8ZW58MHx8fHwxNzU5MDc2ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1vbWV0ZXJ8ZW58MHx8fHwxNzU5MDc2ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ],
  "features": [
    {
      "en": "Alarm function",
      "ar": "قياس عالي الدقة"
    },
    {
      "en": "Durable construction",
      "ar": "وظيفة الإنذار"
    },
    {
      "en": "Easy to use interface",
      "ar": "تعمل بالبطارية"
    },
    {
      "en": "Lightweight design",
      "ar": "حجم محمول"
    }
  ],
  "rating": 4.3,
  "isNew": false,
  "isFeatured": false,
  "isPopular": false
});

