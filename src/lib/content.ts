import type { ProductKey } from "@/lib/products";

export type Language = "ar" | "en";

export type SiteContent = {
  meta: { title: string; description: string };
  topBar: { items: string[]; socials: string[]; label: string };
  nav: {
    items: { label: string; href: string; hasChildren?: boolean }[];
    cta: string;
    languageLabel: string;
    menuToggle: string;
  };
  hero: {
    headingLine: string;
    headingRotating: string[];
    meatLoversLine: string;
    meatLoversRotating: string[];
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    photoAlt: string;
    slides: { src: string; alt: string }[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    support: string;
    stats: { value: number; label: string }[];
    squareAlt: string;
    verticalAlt: string;
  };
  growth: {
    eyebrow: string;
    words: {
      maintenance: string;
      marketing: string;
      grow: string;
      planning: string;
    };
    button: string;
    carouselLabel: string;
    previous: string;
    next: string;
    platterAlt: string;
    rawAlt: string;
  };
  products: {
    title: string;
    items: Record<ProductKey, string>;
  };
  creative: {
    title: string;
    button: string;
    marquee: string[];
    imageAlt: string;
  };
  care: {
    items: { label: string; number: number }[];
  };
  future: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    sideLabel: string;
    features: { title: string; body: string }[];
    mainAlt: string;
    sideAlt: string;
    wideAlt: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    accordions: { title: string; body: string }[];
    button: string;
    slides: { src: string; alt: string; title: string; body: string }[];
    previous: string;
    next: string;
    values: { title: string; body: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    tags: string[];
    badge: string;
    heading: string;
    price: string;
    body: string;
    packs: string[];
    review: { title: string; body: string; alt: string };
    slides: { src: string; alt: string }[];
    previous: string;
    next: string;
  };
  app: {
    eyebrow: string;
    title: string;
    body: string;
    storeLabel: string;
    appStore: string;
    playStore: string;
    note: string;
    screen: {
      brand: string;
      title: string;
      cut: string;
      weight: string;
      price: string;
      donenessLabel: string;
      doneness: string[];
      cta: string;
      alt: string;
    };
  };
  theme: {
    label: string;
    paletteLabel: string;
    modeLabel: string;
    light: string;
    dark: string;
    palette: { id: "rust" | "copper" | "olive" | "ocean"; label: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    body: string;
    members: { name: string; role: string; src: string; alt: string }[];
  };
  footer: {
    eyebrow: string;
    title: string;
    columns: { title: string; lines: string[] }[];
    form: {
      label: string;
      name: string;
      email: string;
      message: string;
      button: string;
      note: string;
    };
    socialLabel: string;
    socials: string[];
    links: string[];
    rights: string;
  };
};

export const content: Record<Language, SiteContent> = {
  ar: {
    meta: {
      title: "كارنيه شوب | لحم فاخر وقطع طازجة",
      description:
        "لحم فاخر وقطع طازجة تُقطّع حسب الطلب — جزارة عائلية تعتّق لحمها بنفسها.",
    },
    topBar: {
      items: ["الشروط", "الجودة", "ابق على تواصل"],
      socials: ["Facebook", "Twitter", "Instagram"],
      label: "روابط التواصل الاجتماعي",
    },
    nav: {
      items: [
        { label: "الرئيسية", href: "#hero" },
        { label: "من نحن", href: "#about" },
        { label: "قصتنا", href: "#story" },
        { label: "المنتجات", href: "#products" },
        { label: "التجربة", href: "#experience" },
        { label: "اتصل بنا", href: "#contact" },
      ],
      cta: "اطلب الآن",
      languageLabel: "اللغة",
      menuToggle: "القائمة",
    },
    hero: {
      headingLine: "لحم فاخر",
      headingRotating: ["قطع مميزة", "قطع طازجة"],
      meatLoversLine: "عشاق اللحوم",
      meatLoversRotating: ["مدخّن", "بريميوم"],
      eyebrow: "على المنضدة",
      title: "لحم يُجهّز كما تطبخه",
      body: "نجهّز الذبائح كاملة في محلنا، ونعتيق لحم البقر، ونقطّع كل طلب بأيدينا — ستيك ومشاوي وفرم وأحشاء، تُجهّز صباح الشراء.",
      button: "اطلب الآن",
      photoAlt: "واجهة محل جزارة تعرض قطع لحم طازجة",
      slides: [
        {
          src: "/images/hero-slide-seasoned-steaks.jpg",
          alt: "شرائح لحم متبلة على صينية معدنية",
        },
        {
          src: "/images/hero-slide-steak-board.jpg",
          alt: "شرائح لحم طازجة على لوح تقطيع خشبي",
        },
      ],
    },
    solutions: {
      eyebrow: "من نحن",
      title: "جزارة تثق بها عائلتك",
      body:
        "بدأت كارنيه شوب بمنضدة زجاجية واحدة ونمت مع الحي الذي حولها. نشتري الذبائح كاملة من مزارع نعرفها، ونعتيق لحم البقر في غرفتنا الباردة، ونقطّع كل طلب بأيدينا — فالقطعة التي تأخذها إلى بيتك هي نفسها التي نضعها على مائدتنا.",
      button: "زوروا محلنا",
      support: "طازج كل يوم",
      stats: [
        { value: 346, label: "قطعة تُجهّز أسبوعيًا" },
        { value: 750, label: "عائلة تثق بنا" },
      ],
      squareAlt: "تشكيلة ريفية من قطع لحم البقر الطازجة",
      verticalAlt: "لوح تقطيع عليه لحم طازج وأعشاب وبهارات",
    },
    growth: {
      eyebrow: "منضدة القطع",
      words: {
        maintenance: "لحم البقر",
        marketing: "لحم الغنم",
        grow: "يُقطّع طازجًا كل يوم",
        planning: "الغنم والأحشاء",
      },
      button: "شاهد القطع",
      carouselLabel: "قطع اللحوم",
      previous: "السابق",
      next: "التالي",
      platterAlt: "طبق لحم مشوي",
      rawAlt: "قطع لحم أحمر طازجة",
    },
    products: {
      title: "قطعنا",
      items: {
        beef: "لحم البقر",
        mutton: "لحم الغنم",
        kidney: "الكلى",
        liver: "الكبد",
      },
    },
    creative: {
      title: "لحم حقيقي يُقطّع كما تطبخ",
      button: "تصفّح القطع",
      marquee: ["قطع طازجة", "معتّق", "توصيل يومي", "اختيار الجزار"],
      imageAlt: "لحم طازج على لوح خشبي مع الملح وإكليل الجبل",
    },
    care: {
      items: [
        { label: "الجزارة", number: 67 },
        { label: "التعتيق", number: 43 },
        { label: "توصيل يومي", number: 83 },
        { label: "تموين المناسبات", number: 59 },
      ],
    },
    future: {
      eyebrow: "قصتنا",
      title: "من منضدة واحدة إلى مائدة عائلتك",
      body:
        "بدأنا عام ٢٠٠٣ بمنضدة واحدة ومفرمة يدوية ووعد بأن نبيع فقط اللحم الذي نأكله في بيوتنا. بعد عشرين عامًا ما زلنا نجهّز كل ذبيحة بأيدينا، وما زلنا نعتيق اللحم في الغرفة نفسها، وما زلنا نعرف معظم عملائنا بأسمائهم.",
      button: "تعرّف على الجزارين",
      sideLabel: "منذ ٢٠٠٣",
      features: [
        {
          title: "تجهيز الذبيحة كاملة",
          body: "نشتري الذبائح كاملة ونجهّزها في محلنا، فلا يُهدر شيء وتصلك كل قطعة طازجة.",
        },
        {
          title: "من مزارع محلية",
          body: "لحم بقري مغذّى على العشب ولحم غنم من مراعٍ نزورها بأنفسنا، معتّق قبل أن يصل إلى المنضدة.",
        },
      ],
      mainAlt: "لحم أحمر طازج على لوح تقطيع مع الفلفل والليمون",
      sideAlt: "لوح تقطيع مع سكين ولحم وأعشاب",
      wideAlt: "شرائح لحم طازجة على شواية خشبية",
    },
    mission: {
      eyebrow: "حرفتنا",
      title: "اللحم الجيد يبدأ من مزارع جيد",
      paragraphs: [
        "كل قطعة على منضدتنا يمكن تتبعها إلى مزرعة نعرفها. نختار الذبائح حسب التعريق والعمر والعلف، ثم نترك اللحم يرتاح في غرفتنا الباردة حتى يصل الطعم إلى ما يستحقه. لا شيء مغلّف مسبقًا، ولا شيء يبقى في صينية لأيام.",
        "جزارونا ينظّفون ويقطّعون ويوزّنون بأيديهم كل صباح. أخبرنا بما تطبخه ونقطّعه بالسماكة المناسبة، وننظّف العظم أو نفرمه أمامك طازجًا — وسنقول لك بصراحة أي قطعة تناسب طبقك.",
      ],
      accordions: [
        {
          title: "تقطيع حسب الطلب",
          body: "أخبرنا بالطبق وعدد الضيوف، ونوزّن لك الوزن المطلوب بالضبط ونقطّعه للمقلاة أو الشواية أو الفرن.",
        },
        {
          title: "سلسلة تبريد لا تنقطع",
          body: "من المزرعة إلى غرفتنا الباردة إلى حقيبتك يبقى كل شيء بين صفر و٤ درجات، فلا تعتمد الطزاجة على الحظ.",
        },
      ],
      button: "زوروا محلنا",
      slides: [
        {
          src: "/images/mission-fresh-cut.jpg",
          alt: "لحم أحمر طازج مع الفلفل الأخضر والثوم والليمون على لوح أسود",
          title: "معتّق في محلنا",
          body: "يرتاح لحم البقر من ٢١ إلى ٢٨ يومًا في غرفة مراقبة الحرارة لطعم أعمق وقوام أطرى.",
        },
        {
          src: "/images/mission-top-view.jpg",
          alt: "منظر علوي لقطع لحم أحمر طازجة على لوح تقطيع بخلفية خضراء وسوداء",
          title: "يُقطّع يدويًا كل صباح",
          body: "الستيك والكستليتة والفرم تُجهّز في اليوم نفسه الذي تصلك فيه — لا تغليف مسبق ولا تجميد متكرر.",
        },
      ],
      previous: "الشريحة السابقة",
      next: "الشريحة التالية",
      values: [
        { title: "طازج يوميًا", body: "يُقطّع صباح الشراء" },
        { title: "معتّق", body: "٢١–٢٨ يومًا في غرفتنا" },
        { title: "حلال", body: "معتمد وقابل للتتبع" },
        { title: "حسب الطلب", body: "أي وزن وأي سماكة" },
      ],
    },
    experience: {
      eyebrow: "التجربة",
      title: "اختبر الجودة في أفضل صورها",
      tags: ["جاهز للشواء", "معتّق", "اختيار الجزار", "في نفس اليوم"],
      badge: "اختيار الجزار",
      heading: "قطعة لكل وصفة",
      price: "٣٩ $",
      body:
        "ادخل بوصفة واخرج بالقطعة المناسبة لها. سيشرح لك جزارونا التعريق والتعتيق وأوقات الطهي، ويوزّنون القطعة حسب عدد الضيوف، ويغلّفونها لتبقى باردة حتى البيت. بلا تخمين وبلا هدر.",
      packs: ["صندوق شواء نهاية الأسبوع", "صندوق عائلي للفرن", "صندوق قطع يومية"],
      review: {
        title: "نصيحة الجزار",
        body: "لا تعرف أي قطعة تناسب طبقك؟ أخبرنا بما تطبخه وسنقطّعها أو نربطها أو نفرمها بالطريقة الصحيحة.",
        alt: "جزار يشرح قطعة لحم بقري لعميل",
      },
      slides: [
        {
          src: "/images/experience-beef-strips.jpg",
          alt: "شرائح لحم بقري ريفية مع حبوب الفلفل",
        },
        {
          src: "/images/experience-slide-sausage.jpg",
          alt: "حلزون نقانق ريفي على لوح التقطيع",
        },
      ],
      previous: "الشريحة السابقة",
      next: "الشريحة التالية",
    },
    app: {
      eyebrow: "للطلب",
      title: "حمّل التطبيق",
      body:
        "اطلب قطعك الطازجة من هاتفك — اختر القطعة والوزن وطريقة التقطيع، ونحن نجهّزها ونوصلها إليك في نفس اليوم. تابع طلبك لحظة بلحظة واستفد من عروض خاصة للتطبيق فقط.",
      storeLabel: "احصل على التطبيق",
      appStore: "App Store",
      playStore: "Google Play",
      note: "توصيل مجاني لأول طلب من التطبيق",
      screen: {
        brand: "كارنيه شوب",
        title: "قطع طازجة اليوم",
        cut: "فيليه بقري",
        weight: "١.٢ كجم · طازج",
        price: "٢٨ $",
        donenessLabel: "طريقة التقطيع",
        doneness: ["شرائح", "مكعبات", "صحيح"],
        cta: "أضف إلى الطلب",
        alt: "قطعة لحم بقري داخل تطبيق كارنيه شوب",
      },
    },
    theme: {
      label: "المظهر",
      paletteLabel: "الألوان",
      modeLabel: "الوضع",
      light: "فاتح",
      dark: "داكن",
      palette: [
        { id: "rust", label: "صدأ" },
        { id: "copper", label: "نحاسي" },
        { id: "olive", label: "زيتوني" },
        { id: "ocean", label: "محيطي" },
      ],
    },
    team: {
      eyebrow: "الفريق",
      title: "الأيدي التي تقف خلف المنضدة",
      body:
        "ثلاثة جزارين يجمعون أكثر من أربعين عامًا على لوح التقطيع. جون يدير غرفة التعتيق، ودانيال يتولى الطلبات الخاصة، ومايكل يعرف تمامًا كيف تتصرف كل قطعة على الشواية. اسألهم أي شيء — يفضّلون شرح القطعة على أن يبيعوك القطعة الخطأ.",
      members: [
        {
          name: "جون ميلر",
          role: "كبير الجزارين",
          src: "/images/team-john.jpg",
          alt: "جون ميلر في زيّه الأبيض داخل غرفة التقطيع",
        },
        {
          name: "دانيال كارتر",
          role: "جزار أول",
          src: "/images/team-daniel.jpg",
          alt: "دانيال كارتر بقميص مربّع ومريلة خلف منضدة الجزارة",
        },
        {
          name: "مايكل سميث",
          role: "خبير شواء",
          src: "/images/team-butcher-portrait.jpg",
          alt: "مايكل سميث بمريلة حمراء يحمل فخذ لحم خلف المنضدة",
        },
      ],
    },
    footer: {
      eyebrow: "نصنع الروابط",
      title: "خدمة استثنائية",
      columns: [
        {
          title: "دعم العملاء",
          lines: ["الاستشارات +1 473 483 384", "التخطيط +1 395 393 595"],
        },
        {
          title: "المقر الرئيسي",
          lines: ["1080 بريكل أفينيو - ميامي", "الولايات المتحدة الأمريكية"],
        },
        {
          title: "استفسارات عامة",
          lines: ["نقدّر ملاحظاتك ونرحّب بتقديم أي معلومات"],
        },
        {
          title: "التعاون",
          lines: ["نرحّب بمقترحات التعاون وشراكات الأعمال"],
        },
      ],
      form: {
        label: "اتصل بنا",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        button: "إرسال",
        note: "شكرًا لك، وصلتنا رسالتك وسنعاود التواصل قريبًا.",
      },
      socialLabel: "تابعنا",
      socials: ["Facebook", "Instagram", "WhatsApp", "TikTok"],
      links: ["الشراكات", "دعم العملاء", "سياسة الخصوصية"],
      rights: "© 2026 كارنيه شوب. جميع الحقوق محفوظة.",
    },
  },
  en: {
    meta: {
      title: "Carne Shop | Quality Meat, Fresh Cuts",
      description:
        "Premium meat and fresh cuts, dry-aged in-house and cut to order — a family butcher counter you can trust.",
    },
    topBar: {
      items: ["Conditions", "Quality", "Stay Connected"],
      socials: ["Facebook", "Twitter", "Instagram"],
      label: "Social links",
    },
    nav: {
      items: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Our Story", href: "#story" },
        { label: "Products", href: "#products" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Order Now",
      languageLabel: "Language",
      menuToggle: "Menu",
    },
    hero: {
      headingLine: "Quality Meat",
      headingRotating: ["Prime Cuts", "Fresh Cuts"],
      meatLoversLine: "Meat Lovers",
      meatLoversRotating: ["Smoked", "Premium"],
      eyebrow: "At the counter",
      title: "Meat prepared the way you cook it",
      body: "We break down whole animals in-house, dry-age our beef and cut every order by hand — steaks, roasts, mince and offal, prepared the morning you buy them.",
      button: "Order now",
      photoAlt: "Fresh butcher counter display filled with prime cuts",
      slides: [
        {
          src: "/images/hero-slide-seasoned-steaks.jpg",
          alt: "Seasoned steaks on a steel tray",
        },
        {
          src: "/images/hero-slide-steak-board.jpg",
          alt: "Rustic steak board still life",
        },
      ],
    },
    solutions: {
      eyebrow: "Who we are",
      title: "A butcher counter your family can trust",
      body:
        "Carne Shop began as a single glass counter and grew with the neighbourhood around it. We buy whole animals from farms we know, dry-age our beef in our own cool room and cut every order by hand — so the cut you take home is the same one we put on our own table.",
      button: "Visit our counter",
      support: "Cut fresh daily",
      stats: [
        { value: 346, label: "Cuts prepared every week" },
        { value: 750, label: "Families served so far" },
      ],
      squareAlt: "Rustic assortment of fresh beef cuts",
      verticalAlt: "Butcher board with a rack of ribs, herbs and spices",
    },
    growth: {
      eyebrow: "Our counter",
      words: {
        maintenance: "Beef",
        marketing: "Mutton",
        grow: "Cut fresh every day",
        planning: "Lamb & offal",
      },
      button: "See the cuts",
      carouselLabel: "Our cuts",
      previous: "Previous",
      next: "Next",
      platterAlt: "Roasted meat platter",
      rawAlt: "Fresh raw steak cuts",
    },
    products: {
      title: "Our cuts",
      items: {
        beef: "Beef",
        mutton: "Mutton",
        kidney: "Kidney",
        liver: "Liver",
      },
    },
    creative: {
      title: "Real meat, cut the way you cook it",
      button: "Browse the cuts",
      marquee: ["Fresh Cuts", "Dry Aged", "Daily Delivery", "Butcher's Choice"],
      imageAlt: "Raw steak on a wooden board with salt and rosemary",
    },
    care: {
      items: [
        { label: "Butchery", number: 67 },
        { label: "Dry Ageing", number: 43 },
        { label: "Same-day Delivery", number: 83 },
        { label: "Event Catering", number: 59 },
      ],
    },
    future: {
      eyebrow: "Our story",
      title: "From one counter to your family table",
      body:
        "It started in 2003 with a single counter, a hand-cranked mincer and a promise to sell only meat we would serve at home. Twenty years on we still break down every animal ourselves, still age our beef in the same cool room, and still know most of our customers by name.",
      button: "Meet the butchers",
      sideLabel: "Since 2003",
      features: [
        {
          title: "Whole-animal butchery",
          body: "We buy whole animals and break them down in-house, so nothing is wasted and every cut reaches you fresh.",
        },
        {
          title: "Sourced from local farms",
          body: "Grass-fed beef and pasture-raised lamb from farms we visit ourselves, dry-aged before it reaches the counter.",
        },
      ],
      mainAlt: "Fresh red meat on a cutting board with pepper and lemon",
      sideAlt: "Rustic steak preparation flat lay with cleaver and spices",
      wideAlt: "Raw steaks with spices and a knife on a wooden grill tray",
    },
    mission: {
      eyebrow: "Our craft",
      title: "Good meat starts with good farmers",
      paragraphs: [
        "Every cut on our counter can be traced back to a farm we know. We choose animals for marbling, age and feed, then let the beef rest in our cool room until the flavour is where it should be. Nothing is pre-packed and nothing sits in a tray for days.",
        "Our butchers trim, bone and portion by hand every morning. Tell us what you are cooking and we will cut it to the right thickness, French the bones or mince it fresh in front of you — and we will always tell you honestly which cut suits your dish.",
      ],
      accordions: [
        {
          title: "Cut to order",
          body: "Tell us the dish and the number of guests; we portion the exact weight you need and trim it for your pan, grill or oven.",
        },
        {
          title: "An unbroken cold chain",
          body: "From the farm to our cool room to your bag everything stays between 0 and 4°C, so freshness never depends on luck.",
        },
      ],
      button: "Visit our counter",
      slides: [
        {
          src: "/images/mission-fresh-cut.jpg",
          alt: "Fresh red meat with green pepper, garlic and lemon on a black board",
          title: "Dry-aged in-house",
          body: "Our beef rests for 21 to 28 days in a temperature-controlled room, for deeper flavour and a tender bite.",
        },
        {
          src: "/images/mission-top-view.jpg",
          alt: "Top view of fresh red meat on a cutting board over green and black",
          title: "Hand-cut every morning",
          body: "Steaks, chops and mince are prepared the same day they reach you — never pre-packed, never frozen twice.",
        },
      ],
      previous: "Previous slide",
      next: "Next slide",
      values: [
        { title: "Fresh daily", body: "Cut the morning you buy it" },
        { title: "Dry aged", body: "21–28 days in our cool room" },
        { title: "Halal", body: "Certified and fully traceable" },
        { title: "Cut to order", body: "Any weight, any thickness" },
      ],
    },
    experience: {
      eyebrow: "The experience",
      title: "Experience quality at its best",
      tags: ["Grill-ready", "Dry aged", "Butcher's pick", "Same-day"],
      badge: "Butcher's choice",
      heading: "A cut for every recipe",
      price: "$ 39",
      body:
        "Walk in with a recipe and leave with the right cut for it. Our butchers will talk you through marbling, ageing and cooking times, portion it to the number of guests you are feeding, and pack it so it stays cold on the way home. No guesswork, no wasted meat.",
      packs: ["Weekend Grill Box", "Family Roast Box", "Everyday Cuts Box"],
      review: {
        title: "Butcher's advice",
        body: "Not sure which cut suits your dish? Tell us what you are cooking and we will trim, tie or mince it the right way.",
        alt: "Butcher talking a customer through a cut of beef",
      },
      slides: [
        {
          src: "/images/experience-beef-strips.jpg",
          alt: "Rustic beef strips with peppercorns",
        },
        {
          src: "/images/experience-slide-sausage.jpg",
          alt: "Rustic sausage coil on a butcher's board",
        },
      ],
      previous: "Previous slide",
      next: "Next slide",
    },
    app: {
      eyebrow: "For order",
      title: "Download App",
      body:
        "Order your cuts straight from your phone — pick the cut, the weight and how you want it trimmed, and we prepare it fresh and deliver the same day. Track every order live and unlock app-only offers.",
      storeLabel: "Get the app",
      appStore: "App Store",
      playStore: "Google Play",
      note: "Free delivery on your first app order",
      screen: {
        brand: "Carne Shop",
        title: "Fresh cuts today",
        cut: "Beef Tenderloin",
        weight: "1.2 kg · Fresh",
        price: "$ 28",
        donenessLabel: "Trim style",
        doneness: ["Sliced", "Cubed", "Whole"],
        cta: "Add to order",
        alt: "A beef cut shown inside the Carne Shop app",
      },
    },
    theme: {
      label: "Theme",
      paletteLabel: "Colour theme",
      modeLabel: "Mode",
      light: "Light",
      dark: "Dark",
      palette: [
        { id: "rust", label: "Rust" },
        { id: "copper", label: "Copper" },
        { id: "olive", label: "Olive" },
        { id: "ocean", label: "Ocean" },
      ],
    },
    team: {
      eyebrow: "The team",
      title: "The hands behind the counter",
      body:
        "Three butchers with more than forty years at the block between them. John runs the ageing room, Daniel handles the special orders and Michael knows exactly how every cut behaves on a grill. Ask them anything — they would rather explain a cut than sell you the wrong one.",
      members: [
        {
          name: "John Miller",
          role: "Master Butcher",
          src: "/images/team-john.jpg",
          alt: "John Miller in his white butcher coat",
        },
        {
          name: "Daniel Carter",
          role: "Senior Butcher",
          src: "/images/team-daniel.jpg",
          alt: "Daniel Carter in a checked shirt and apron behind the butcher counter",
        },
        {
          name: "Michael Smith",
          role: "Grill Expert",
          src: "/images/team-butcher-portrait.jpg",
          alt: "Michael Smith in a red apron holding a leg of lamb behind the counter",
        },
      ],
    },
    footer: {
      eyebrow: "Bridging Connections",
      title: "Exceptional Service",
      columns: [
        {
          title: "Customer Support",
          lines: ["Consultancy +1 473 483 384", "Planning +1 395 393 595"],
        },
        {
          title: "Headquarter",
          lines: ["1080 Brickell Ave - Miami", "United States of America"],
        },
        {
          title: "General Inquiries",
          lines: ["We value your feedback and are eager to provide any information"],
        },
        {
          title: "Collaboration",
          lines: ["We welcome collaboration proposals and partnership inquiries"],
        },
      ],
      form: {
        label: "Contact Us",
        name: "Name",
        email: "Email",
        message: "Message",
        button: "Send",
        note: "Thanks — your message is on its way. We’ll be in touch shortly.",
      },
      socialLabel: "Follow us",
      socials: ["Facebook", "Instagram", "WhatsApp", "TikTok"],
      links: ["Partnerships", "Customer Support", "Privacy Policy"],
      rights: "© 2026 Carne Shop. All rights reserved.",
    },
  },
};
