function apiBase() {
  const raw =
    process.env.NEXT_PUBLIC_APP_API_ENDPOINT ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8080/api";
  let base = String(raw).replace(/\/+$/, "");
  // Avoid ".../api/app/app/..." if env already includes /app
  if (/\/app$/i.test(base)) {
    base = base.replace(/\/app$/i, "");
  }
  return base;
}

/** Razorpay publishable key_id — must match backend RAZORPAY_API_KEY used to create the subscription. */
export function getRazorpayPublishableKey() {
  const raw =
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_API_KEY ||
    "";
  return String(raw).replace(/^["']|["']$/g, "").trim();
}

export function getSubscriptionIdFromPayload(payload) {
  if (!payload || typeof payload !== "object") return "";
  return (
    payload.id ||
    payload.subscription_id ||
    payload.subscriptionId ||
    ""
  );
}

export function buildUrlWithQueryParams(baseUrl, paramsObject = {}) {
  const query = Object.entries(paramsObject)
    .filter(
      ([, value]) =>
        value !== undefined && value !== null && String(value) !== "",
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    )
    .join("&");

  return baseUrl.includes("?") ? `${baseUrl}&${query}` : `${baseUrl}?${query}`;
}

export const loadScript = async function () {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

function assertCheckoutKeyAlignment(checkout) {
  if (!checkout) return;
  const publishableKey = getRazorpayPublishableKey();
  const backendKey = String(checkout.razorpay_key_id || "").trim();
  const env = checkout.razorpay_environment;

  if (backendKey && publishableKey && backendKey !== publishableKey) {
    throw new Error(
      "Razorpay key mismatch: backend and frontend use different accounts. Restart both servers after updating .env files.",
    );
  }
  if (env === "live" && publishableKey.startsWith("rzp_test_")) {
    throw new Error(
      "Backend is on live Razorpay but the pricing page still has a test key. Stop Next.js, update NEXT_PUBLIC_RAZORPAY_KEY_ID, then run npm run dev again.",
    );
  }
  if (env === "test" && publishableKey.startsWith("rzp_live_")) {
    throw new Error(
      "Pricing page has a live Razorpay key but the backend is on test. Restart the backend after updating RAZORPAY_API_KEY.",
    );
  }
  const planId = String(checkout.razorpay_plan_id || "");
  const isTestOverridePlan = /^plan_Spw/i.test(planId);
  if (env === "live" && isTestOverridePlan) {
    throw new Error(
      "Backend is still resolving test plan IDs. Restart the backend (live keys must load RAZORPAY_USE_TEST_PLANS=false).",
    );
  }
}

export const createRazorpayOrder = async function (state) {
  const coachIdStr =
    state.coachId != null ? String(state.coachId).trim() : "";
  if (!coachIdStr) {
    throw new Error(
      "Missing coach account for checkout. Complete sign-in first.",
    );
  }
  const nm = Number(state.noOfMonths);
  const noOfMonths =
    Number.isFinite(nm) && (nm === 1 || nm === 12) ? nm : 1;

  const endpoint = buildUrlWithQueryParams(
    `${apiBase()}/app/razorpay-autopay`,
    {
      coachId: coachIdStr,
      planId: state.planId != null ? String(state.planId) : "",
      currency: state.currency != null ? String(state.currency) : "INR",
      noOfMonths,
      isAdmin: Boolean(state.isAdmin),
      referredByCoach: state.referredBy,
      couponCode: state.appliedCoupon,
    },
  );
  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });
  const res = await response.json();
  if (res.status_code !== 200) {
    throw new Error(
      String(res.message || res.error || "Unable to start checkout"),
    );
  }
  assertCheckoutKeyAlignment(res.checkout);
  return res;
};

function formatCheckoutDescription(checkout) {
  if (!checkout?.amount) {
    return "Wellnessz Subscription";
  }
  const amount = Number(checkout.amount);
  const currency = String(checkout.currency || "INR").toUpperCase();
  const duration =
    checkout.duration === "yearly" ? "Yearly" : "Monthly";
  const planLabel =
    checkout.planType === "iosBranded"
      ? "Own Your Coaching App"
      : checkout.planType === "pro"
        ? "Pro"
        : checkout.planType === "basic"
          ? "Basic"
          : "Wellnessz";
  const symbol = currency === "INR" ? "₹" : currency === "USD" ? "$" : `${currency} `;
  const displayAmount =
    currency === "INR"
      ? amount.toLocaleString("en-IN")
      : amount.toLocaleString("en-US");
  return `Wellnessz ${planLabel} (${duration}) — ${symbol}${displayAmount}`;
}

export const buildRazorpayOptions = function (order, { onSuccess, checkout } = {}) {
  const subscriptionId = getSubscriptionIdFromPayload(order);
  const key = getRazorpayPublishableKey();
  if (!key) {
    throw new Error(
      "Razorpay publishable key missing. Set NEXT_PUBLIC_RAZORPAY_API_KEY (or NEXT_PUBLIC_RAZORPAY_KEY_ID) to the same value as backend RAZORPAY_API_KEY.",
    );
  }
  if (!subscriptionId) {
    throw new Error(
      "Checkout could not start: server did not return a subscription id.",
    );
  }
  return {
    key,
    subscription_id: subscriptionId,
    name: "Wellnessz",
    description: formatCheckoutDescription(checkout),
    // Do not set redirect:true with subscription + handler — Razorpay can mis-handle auth flow.
    modal: {
      ondismiss: () => {
        // dispatch(updateUIState("payment-cancelled"));
      },
    },
    handler: async function () {
      if (typeof onSuccess === "function") {
        await onSuccess()
      }
    }
  }
}