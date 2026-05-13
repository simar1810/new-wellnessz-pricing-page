import { cn } from "@/lib/utils";
import { selectPlanCode } from "../state/reducer";
import { usePricingPageContext } from "../state/PricingSectionContext";
import SalesContactForm from "./SalesContactForm";

export default function PlanEnterprise({ plan }) {
  const { selectedPlanCode, dispatch, coachId } = usePricingPageContext();

  const buttonLabel = Boolean(coachId)
    ? "Talk to sales about upgrading"
    : "Contact Sales";

  return (
    <article
      className={cn(
        "w-full cursor-pointer select-none overflow-hidden rounded-[40px] p-10 transition-all duration-300",
        "bg-linear-to-r from-[#2D5A27] via-[#438439] to-[#67BC2A]",
        selectedPlanCode === plan.code
          ? "ring-4 ring-white shadow-2xl"
          : "hover:shadow-xl",
      )}
      onClick={() => dispatch(selectPlanCode(plan.code))}
    >
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="flex-1 text-left">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-[42px]">
            {plan.title}
          </h2>
          <p className="max-w-[480px] text-base leading-snug text-white/90 md:text-lg">
            {plan.description}
          </p>
          <p className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">
            Custom Pricing
          </p>
        </div>

        <div className="flex-[1.5]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/80">
                Who this is for
              </p>
              <ul className="grid grid-cols-1 gap-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    <span className="text-base font-medium leading-tight text-white md:text-[17px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {Array.isArray(plan.deliverables) && plan.deliverables.length > 0 ? (
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/80">
                  What will you get
                </p>
                <ul className="grid grid-cols-1 gap-y-3">
                  {plan.deliverables.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span className="text-base font-medium leading-tight text-white md:text-[17px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {plan.bestFor ? (
            <p className="mt-6 max-w-xl text-sm font-semibold leading-snug text-white/85">
              Best for: {plan.bestFor}
            </p>
          ) : null}
        </div>

        <div
          className="shrink-0"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <SalesContactForm
            plans={[plan]}
            trigger={
              <button
                type="button"
                className="min-w-[200px] rounded-full bg-white px-10 py-5 text-[20px] font-bold text-[#2D5A27] shadow-lg transition-all hover:bg-gray-100 active:scale-95"
              >
                {buttonLabel}
              </button>
            }
          />
        </div>
      </div>
    </article>
  );
}
