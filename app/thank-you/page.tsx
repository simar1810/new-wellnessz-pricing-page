import Link from "next/link";

type Props = {
  searchParams: Promise<{ redirect?: string }>;
};

export default async function ThankYouPage({ searchParams }: Props) {
  const { redirect } = await searchParams;
  const href =
    redirect && /^https?:\/\//i.test(redirect)
      ? redirect
      : "https://app.wellnessz.in/login";

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-white px-4 font-lato text-center text-neutral-900">
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
        Thank you
      </h1>
      <p className="max-w-md text-neutral-600">
        Your payment was received. Continue to the app when you are ready.
      </p>
      <Link
        href={href}
        className="rounded-xl bg-[#67BC2A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#5aad24]"
      >
        Continue to app
      </Link>
      <Link href="/" className="text-sm font-medium text-[#2E7D32] underline">
        Back to pricing
      </Link>
    </main>
  );
}
