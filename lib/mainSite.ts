/** Base URL for main WellnessZ marketing site (legal pages, etc.). */
export function mainSiteBase(): string {
  const raw =
    process.env.NEXT_PUBLIC_MAIN_SITE_URL || "https://www.wellnessz.in";
  return String(raw).replace(/\/+$/, "");
}
