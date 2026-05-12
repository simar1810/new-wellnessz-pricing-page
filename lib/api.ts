const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
const API_BASE = String(raw).replace(/\/+$/, "");

function resolveTenantFromHostname(hostname: string) {
  const rawHost = String(hostname || "").trim().toLowerCase();
  if (!rawHost) return null;

  const host = rawHost.split(":")[0];
  if (!host || host === "localhost") return null;
  if (host === "shop.localhost" || host === "shop.zeefit.in") return null;

  const parts = host.split(".").filter(Boolean);
  if (parts.length === 0) return null;

  if (host.endsWith(".localhost") && parts.length >= 2) {
    return parts[0] || null;
  }

  if (host.endsWith(".zeefit.in") && parts.length >= 3) {
    const subdomain = parts[0];
    if (subdomain && subdomain !== "www") {
      return subdomain;
    }
  }

  return null;
}

function resolveTenantFromPathname(pathname: string) {
  const path = String(pathname || "").trim();
  if (!path || path === "/") return null;

  const [firstSegment] = path.replace(/^\/+/, "").split("/");
  const tenant = String(firstSegment || "").trim().toLowerCase();

  if (!tenant || tenant === "marketplace") return null;
  return tenant;
}

function attachTenantHeader(headers: Record<string, string>) {
  if (typeof window === "undefined") return;
  const hostname = window.location?.hostname || "";
  let tenant = resolveTenantFromHostname(hostname);
  if (
    !tenant &&
    (hostname === "shop.localhost" || hostname === "shop.zeefit.in")
  ) {
    tenant = resolveTenantFromPathname(window.location?.pathname);
  }
  if (tenant) {
    headers["x-tenant"] = tenant;
  }
}

export const postData = async function (
  endpoint: string,
  data: unknown,
): Promise<Record<string, unknown>> {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: "POST",
      headers: (() => {
        const h: Record<string, string> = { "Content-Type": "application/json" };
        attachTenantHeader(h);
        return h;
      })(),
      body: JSON.stringify(data),
    });
    return response.json() as Promise<Record<string, unknown>>;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error!";
    return { success: false, message };
  }
};
