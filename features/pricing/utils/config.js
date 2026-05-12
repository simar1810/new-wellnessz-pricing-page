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
      "Custom diet plans",
      "Verified food database",
      "Macro & calorie tracking",
      "Meal reminders",
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
      "Progress reports",
      "Goal tracking",
      "Habit updates",
      "Workout progress",
    ],
    imageSide: "right",
  },
  {
    kicker: "Appointment Booking",
    title: "Manage Client Sessions Without Back-and-Forth",
    description: [
      "Let clients book sessions easily while you manage your schedule, online meetings, and follow-ups in one place.",
    ],
    subFeatures: [
      "Appointment booking",
      "Online session scheduling",
      "Session reminders",
      "Calendar management",
      "Offline attendance tracking",
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

const yearlyAt42Percent = (monthly) => Math.round(monthly * 12 * 0.58);

export const plans = [
  {
    id: 1,
    code: "basic",
    title: "BASIC",
    description:
      "For solo coaches starting structured coaching. Run your coaching practice cleanly without advanced automation.",
    bestFor:
      "Coaches with under 40 clients who still manage most follow-ups manually.",
    features: [
      "Up to 40 active clients",
      "Create meal plans",
      "Create workout sessions using the library",
      "Appointment booking",
      "Online session scheduling",
      "Group challenges",
      "Activity tracker",
      "Client progress tracking",
      "Access to food database for easier meal planning",
      "Group nudges only",
    ],
    buttonText: (renewal) =>
      renewal ? "Renew Now" : "Start your 14-day free trial",
    billingText: (months) =>
      months === 12 ? "Billed yearly" : "Billed monthly",
    originalPrice: (months, currency) => {
      if (months === 1 && currency === "INR") return 499;
      if (months === 12 && currency === "INR") return 499 * 12;
      if (months === 1 && currency === "USD") return 10;
      if (months === 12 && currency === "USD") return 120;
    },
    discountedPrice: (months, currency, discountPercentage = 0) => {
      const d = Number(discountPercentage) || 0;
      const factor = 1 - d * 0.01;
      if (months === 1 && currency === "INR") {
        return (499 * factor).toFixed(0);
      }
      if (months === 12 && currency === "INR") {
        return (yearlyAt42Percent(499) * factor).toFixed(0);
      }
      if (months === 1 && currency === "USD") {
        return (10 * factor).toFixed(0);
      }
      if (months === 12 && currency === "USD") {
        return (Math.round(120 * 0.58) * factor).toFixed(0);
      }
    },
  },
  {
    id: 2,
    code: "pro",
    title: "PRO",
    badge: "Most Popular",
    description:
      "For full-time coaches scaling beyond manual effort. Built for personalization, accuracy, and higher client volume.",
    bestFor:
      "Coaches managing 40+ clients who want to save time and scale without burnout.",
    features: [
      "Everything in Basic Plan",
      "Up to 120 active clients",
      "Personalized habit-based nudges per client",
      "AI-powered health journaling",
      "Access to 28,000+ ICMR & NIN verified food database",
      "Advanced calorie and macro tracking",
      "Pre-built condition-based meal plans",
      "Pre-built goal-based workout plans",
      "Offline attendance tracking",
      "Team management for assistants or junior coaches",
    ],
    buttonText: (renewal) =>
      renewal ? "Renew Now" : "Start your 14-day free trial",
    billingText: (months) =>
      months === 12 ? "Billed yearly" : "Billed monthly",
    originalPrice: (months, currency) => {
      if (months === 1 && currency === "INR") return 999;
      if (months === 12 && currency === "INR") return 999 * 12;
      if (months === 1 && currency === "USD") return 18;
      if (months === 12 && currency === "USD") return 216;
    },
    discountedPrice: (months, currency, discountPercentage = 0) => {
      const d = Number(discountPercentage) || 0;
      const factor = 1 - d * 0.01;
      if (months === 1 && currency === "INR") {
        return (999 * factor).toFixed(0);
      }
      if (months === 12 && currency === "INR") {
        return (yearlyAt42Percent(999) * factor).toFixed(0);
      }
      if (months === 1 && currency === "USD") {
        return (18 * factor).toFixed(0);
      }
      if (months === 12 && currency === "USD") {
        return (Math.round(216 * 0.58) * factor).toFixed(0);
      }
    },
  },
  {
    id: 3,
    code: "iosBranded",
    title: "OWN YOUR COACHING APP",
    description:
      "For established coaches building a long-term brand.",
    bestFor:
      "Coaches with 50+ active clients, clinics, or hybrid online + offline practices.",
    positioningLine:
      "This is not an app upgrade. This is ownership of your coaching business.",
    buttonText: (renewal) =>
      renewal ? "Renew Now" : "Start your 14-day free trial",
    billingText: (months) =>
      months === 12 ? "Billed yearly" : "Billed monthly",
    features: [
      "All Pro plan features",
      "Your app name on Play Store / App Store",
      "Your logo, colors, and brand identity",
      "Zero WellnessZ branding for clients",
      "Complete web panel",
      "Higher client trust and retention",
      "Strong switching cost for clients",
    ],
    discountedPrice: (months, currency, discountPercentage = 0) => {
      const d = Number(discountPercentage) || 0;
      const factor = 1 - d * 0.01;
      if (months === 1 && currency === "INR") {
        return (3999 * factor).toFixed(0);
      }
      if (months === 12 && currency === "INR") {
        return (yearlyAt42Percent(3999) * factor).toFixed(0);
      }
      if (months === 1 && currency === "USD") {
        return (50 * factor).toFixed(0);
      }
      if (months === 12 && currency === "USD") {
        return (Math.round(600 * 0.58) * factor).toFixed(0);
      }
    },
    originalPrice: (months, currency) => {
      if (months === 1 && currency === "INR") return 3999;
      if (months === 12 && currency === "INR") return 3999 * 12;
      if (months === 1 && currency === "USD") return 50;
      if (months === 12 && currency === "USD") return 600;
    },
  },
];

export const enterprisePlan = {
  id: 5,
  code: "enterprise",
  title: "ENTERPRISE PLAN",
  description:
    "For clinics, large coaching teams, and high-volume practices.",
  bestFor:
    "Organizations managing large client volumes, multiple coaches, and custom workflows.",
  features: [
    "Nutrition clinics with multiple dietitians",
    "Coaching brands managing 200+ active clients",
    "Corporate wellness providers",
    "Hybrid online + offline practices",
    "Coaches needing custom integrations or workflows",
  ],
  buttonText: () => "Contact Sales",
  billingText: () => "",
  originalPrice: () => undefined,
  discountedPrice: () => undefined,
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
