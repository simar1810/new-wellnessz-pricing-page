import PlanBasic from "./PlanBasic";

/** Pro tier: same card as Basic with Von Restorff-style emphasis for conversion. */
export default function PlanPro(props) {
  return <PlanBasic {...props} emphasized />;
}
