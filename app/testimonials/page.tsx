import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-white px-4 font-lato text-center text-neutral-900">
      <h1 className="text-2xl font-bold">Testimonials</h1>
      <p className="max-w-md text-neutral-600">
        More coach stories are on the main WellnessZ site. Return to pricing to
        watch highlights.
      </p>
      <Link
        href="/"
        className="text-sm font-semibold text-[#2E7D32] underline underline-offset-2"
      >
        Back to pricing
      </Link>
    </main>
  );
}
