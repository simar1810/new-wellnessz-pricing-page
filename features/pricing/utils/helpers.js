export const getPlanCodeForPlanType = function (planType) {
  try {
    const str = planType?.toLowerCase()
    if (str === "pro") {
      return 2;
    }
    if (str === "basic") {
      return 1;
    }
    if (str === "iosBranded") {
      return 3;
    }
    return 0;
  } catch {
    return 0;
  }
};