import { cn } from "@/lib/utils";
import {
  PricingSectionContext,
  usePricingPageContext,
} from "../state/PricingSectionContext";
import PlanBasic from "./PlanBasic";
import CouponCode from "./CouponCode";
import PlanEnterprise from "./PlanEnterprise";
import OurClients from "./OurClients";
import PlanPro from "./PlanPro";
import PlanSales from "./PlanSales";
import PlanDurationSelection from "./PlanDurationSelection";
import { enterprisePlan } from "../utils/config";
import { Suspense } from "react";

export default function PricingSection({ skipPlan, currentPlanCode } = {}) {
  return (
    <Suspense>
      <PricingSectionContext skipPlan={skipPlan} currentPlanCode={currentPlanCode}>
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <Container />
        </div>
      </PricingSectionContext>
    </Suspense>
  );
}

function Container() {
  const { plans, noOfMonths } = usePricingPageContext();

  return (
    <div>
      <div id="pricing-plans" className="mt-10 scroll-mt-6 md:scroll-mt-10">
        <div className="px-2 max-md:pb-6 text-center md:px-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#0F1F26] md:text-4xl">
            Choose the plan that fits your coaching business
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
            Start with the tools you need today. Upgrade as your client base
            grows.
          </p>
        </div>
        <CouponCode />
        <PlanDurationSelection />
        <div
          className={cn(
            "mb-8 grid grid-cols-1 items-stretch gap-6 md:gap-6",
            plans.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
          )}
        >
          {plans.map((plan) => {
            const Component = getPlanCardComponent(plan.code);
            if (!Component) return null;
            return (
              <Component key={plan.code} plan={plan} months={noOfMonths} />
            );
          })}
        </div>
        <div className="mb-10 md:mb-12">
          <PlanEnterprise plan={enterprisePlan} />
          <OurClients />
        </div>
      </div>
    </div>
  );
}

function getPlanCardComponent(planCode) {
  switch (planCode) {
    case "basic":
      return PlanBasic;
    case "pro":
      return PlanPro;
    case "sales":
      return PlanSales;
    case "iosBranded":
      return PlanSales;
    default:
      break;
  }
}
