export const mockups = [
  { id: 1, scale: "scale-75", zIndex: "z-0", opacity: "opacity-40", translate: "-translate-x-32 md:-translate-x-48" },
  { id: 2, scale: "scale-90", zIndex: "z-10", opacity: "opacity-80", translate: "-translate-x-16 md:-translate-x-24" },
  { id: 3, scale: "scale-110", zIndex: "z-30", opacity: "opacity-100", translate: "translate-x-0" },
  { id: 4, scale: "scale-90", zIndex: "z-10", opacity: "opacity-80", translate: "translate-x-16 md:translate-x-24" },
  { id: 5, scale: "scale-75", zIndex: "z-0", opacity: "opacity-40", translate: "translate-x-32 md:translate-x-48" },
];

export const features = [
  {
    kicker: "Nutrition Planning",
    title: "Personalized Diet Plans Made Simple",
    description: [
      "Create diet plans faster and assign them to clients based on their goals, preferences, and lifestyle.",
    ],
    subFeatures: [
      "AI diet plans in minutes",
      "28,000+ verified foods",
      "Smart Nutrition Tracking",
      "Meal Follow-up Nudges",
    ],
    imageSide: "left",
  },
  {
    kicker: "Progress Tracking",
    title: "Track Every Client’s Progress Easily",
    description: [
      "Monitor client results, habits, workouts, and nutrition from one simple dashboard.",
    ],
    subFeatures: [
      "Client transformation reports",
      "Track weight, BMI, and fitness goals",
      "Monitor daily habits",
      "Workout performance tracking",
    ],
    imageSide: "right",
  },
  {
    kicker: "GET LISTED ON ZEEFIT",
    title: "Earn with Zeefit",
    description: [
      "Recommend trusted wellness products to your clients, get listed on Zeefit, and earn commission on every successful sale.",
    ],
    subFeatures: [
      "Get listed on Zeefit",
      "Sell affiliate products",
      "Earn commission from recommendations",
      "Create an extra income stream",
    ],
    imageSide: "left",
  },
];

/** Short labels for the feature grid below the three main feature blocks. */
export const featureQuickLinks = [
  "Habit tracking",
  "AI meal plans",
  "Workout library",
  "Verified food database",
  "Appointment booking",
  "Online session scheduling",
  "Group challenges",
  "Activity tracker",
  "Offline attendance tracking",
  "Team management",
];

export const plans = [
  {
    id: 1,
    code: "basic",
    title: "Basic Plan",
    description:
      "For solo coaches starting structured coaching. Run your coaching practice cleanly without advanced automation.",
    bestFor:
      "Coaches with under 40 clients who still manage most follow-ups manually.",
    features: [
      "Up to 40 clients",
      "Create meal plans",
      "Create workout sessions using the library",
      "Appointment booking",
      "Online session scheduling",
      "Group challenges",
      "Activity tracker",
      "Client progress tracking",
      "Access to 28,000+ ICMR & NIN-verified food database",
      "Group nudges only",
    ],
    buttonText: (renewal) =>
      renewal ? "Renew Now" : "Start 14-day free trial",
    billingText: (months) =>
      months === 1 ? "Billed Monthly" : "Billed Yearly",
    originalPrice: (months, currency) => {
      if (months === 1 && currency === "INR") {
        return 499;
      } else if (months === 12 && currency === "INR") {
        return 5_988;
      } else if (months === 1 && currency === "USD") {
        return 19;
      } else if (months === 12 && currency === "USD") {
        return 228;
      }
    },
    discountedPrice: (months, currency, discountPercentage) => {
      if (months === 1 && currency === "INR") {
        return (499 - 499 * discountPercentage * 0.01).toFixed(0);
      } else if (months === 12 && currency === "INR") {
        return (4_990 - 4_990 * discountPercentage * 0.01).toFixed(0);
      } else if (months === 1 && currency === "USD") {
        return (19 - 19 * discountPercentage * 0.01).toFixed(0);
      } else if (months === 12 && currency === "USD") {
        return (189 - 189 * discountPercentage * 0.01).toFixed(0);
      }
    },
  },
  {
    id: 2,
    code: "pro",
    badge: "Most Popular",
    title: "PRO",
    description:
      "For full-time coaches scaling beyond manual effort. Built for personalisation, accuracy, and higher client volume.",
    bestFor:
      "Coaches managing 40+ clients who want to save time and scale without burnout.",
    features: [
      "Everything in the Basic Plan",
      "Up to 120 clients",
      "Add your own recipes",
      "Workout session analytics",
      "In-app feed",
      "Health Metric Pro",
      "AI Health Agent Jia",
      "Offline attendance tracking",
      "Personalized habit-based nudges for each client",
      "AI-powered health journaling",
      "Access to 28,000+ ICMR & NIN-verified food database",
      "Advanced calorie and macro tracking using TDEE Calculator",
      "Offline attendance tracking",
    ],
    buttonText: (renewal) =>
      renewal ? "Renew Now" : "Start 14-day free trial",
    billingText: (months) =>
      months === 1 ? "Billed Monthly" : "Billed Yearly",
    originalPrice: (months, currency) => {
      if (months === 1 && currency === "INR") {
        return 999;
      } else if (months === 12 && currency === "INR") {
        return 11_988;
      } else if (months === 1 && currency === "USD") {
        return 29;
      } else if (months === 12 && currency === "USD") {
        return 348;
      }
    },
    discountedPrice: (months, currency, discountPercentage = 0) => {
      if (currency === "INR" && months === 1) {
        return (999 - 999 * discountPercentage * 0.01).toFixed(0);
      } else if (currency === "INR" && months === 12) {
        return (9990 - 9990 * discountPercentage * 0.01).toFixed(0);
      } else if (currency === "USD" && months === 1) {
        return (29 - 29 * discountPercentage * 0.01).toFixed(0);
      } else if (currency === "USD" && months === 12) {
        return (279 - 279 * discountPercentage * 0.01).toFixed(0);
      }
    },
  },
  {
    id: 3,
    code: "iosBranded",
    title: "OWN YOUR COACHING APP",
    description: "For established coaches building a long-term brand",
    bestFor:
      "Coaches with 50+ active clients, clinics, or hybrid online + offline practices.",
    buttonText: (renewal) =>
      renewal ? "Renew Now" : "Start 14-day free trial",
    billingText: (months) =>
      months === 1 ? "Billed Monthly" : "Billed Yearly",
    features: [
      "All Pro Plan features",
      "Your app published on the Play Store / App Store",
      "Your logo, colors, and brand identity",
      "Powered by WellnessZ branding for clients",
      "Zee Coach listing on the Zeefit marketplace to get more leads",
    ],
    discountedPrice: (months, currency) => {
      if (months === 1 && currency === "INR") {
        return 3_999;
      } else if (months === 12 && currency === "INR") {
        return 23_990;
      } else if (months === 1 && currency === "USD") {
        return 69;
      } else if (months === 12 && currency === "USD") {
        return 599;
      }
    },
    originalPrice: (months, currency) => {
      if (months === 1 && currency === "INR") {
        return 3_999;
      } else if (months === 12 && currency === "INR") {
        return 47_988;
      } else if (months === 1 && currency === "USD") {
        return 69;
      } else if (months === 12 && currency === "USD") {
        return 828;
      }
    },
  },
];

export const enterprisePlan = {
  id: 5,
  code: "enterprise",
  title: "ENTERPRISE PLAN",
  description: "For clinics, large coaching teams & high-volume practices",
  bestFor:
    "Built for organisations managing large client volumes, multiple coaches, and custom workflows. Enterprise is not a fixed plan — it’s a tailored system designed around how your practice actually runs.",
  features: [
    "Gyms & fitness studios",
    "Corporate wellness providers",
    "Brands needing custom integrations and workflows",
    "Suited for franchises",
  ],
  deliverables: [
    "Personal branding and customization",
    "Unlimited clients",
    "Full admin dashboard for team management and client management",
  ],
  buttonText: () => "Contact Sales",
  billingText: () => "",
  originalPrice: (months) => {
    switch (months) {
      case 1:
        return 9990;
      case 12:
        return 11988;
      default:
        return 9990;
    }
  },
  discountedPrice: (months) => {
    switch (months) {
      case 1:
        return 1200;
      default:
        return 1300;
    }
  },
};

export const freeTier = {
  features: [
    "Basic coach profile listing",
    "Visibility among listed coaches",
    "WellnessZ app access for your first 3 clients",
    "Tools to improve your profile presence",
    "Reach of 1,000+ people on your profile",
    "Best for new coaches who want to start getting discovered",
  ],
};

export const partnerLogos = [
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
  "/experts-logo.png",
];
