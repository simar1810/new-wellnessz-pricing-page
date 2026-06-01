const CLIENTS_LOGO_BASE = "/images/enterprise-clients";

type ClientLogo = {
  filename: string;
  alt: string;
  cardClassName?: string;
};

const DARK_CARD = "border-[#2a2a2a] bg-[#111111]";

const CLIENT_LOGOS: ClientLogo[] = [
  { filename: "roundglass.png", alt: "Roundglass" },
  { filename: "metropolis.png", alt: "Metropolis", cardClassName: DARK_CARD },
  { filename: "reboot-gut.png", alt: "Reboot Gut", cardClassName: DARK_CARD },
];

export default function OurClients() {
  return (
    <section className="w-full pt-8 md:pt-20" aria-labelledby="our-clients-heading">
      <h2
        id="our-clients-heading"
        className="mb-6 text-center font-semibold tracking-normal text-[#03632C] md:mb-8"
        style={{ fontSize: "clamp(28px, 5vw, 42px)", lineHeight: "1.1" }}
      >
        Top Enterprises
      </h2>
      <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 md:gap-6">
        {CLIENT_LOGOS.map(({ filename, alt, cardClassName }) => (
          <li key={filename}>
            <div
              className={`flex w-[140px] items-center justify-center rounded-xl border px-5 py-4 shadow-sm md:w-[180px] md:px-6 md:py-5 ${
                cardClassName ?? "border-[#E5E5E5] bg-white"
              }`}
            >
              <img
                src={`${CLIENTS_LOGO_BASE}/${filename}`}
                alt={alt}
                loading="lazy"
                className="h-14 w-auto max-w-full object-contain md:h-16"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
