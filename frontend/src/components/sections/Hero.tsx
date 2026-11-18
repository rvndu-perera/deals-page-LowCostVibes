import Image from "next/image";

import { formatPrice } from "@/lib/format";
import type { DealData, DealImage } from "@/types/deal";

function ImageTile({
  image,
  alt,
  priority = false,
}: {
  image?: DealImage;
  alt: string;
  priority?: boolean;
}) {
  if (!image?.path) {
    return <div aria-hidden="true" className="h-full w-full bg-slate-200" />;
  }

  return (
    <Image
      src={image.path}
      alt={image.alt || alt}
      fill
      priority={priority}
      sizes={priority ? "(max-width: 768px) 100vw, 75vw" : "(max-width: 768px) 33vw, 25vw"}
      className="object-cover"
    />
  );
}

export function Hero({ deal }: { deal: DealData }) {
  const heroImages = deal.heroImages ?? [];
  const sideImages = [
    heroImages[1],
    heroImages[2],
    deal.overview?.images?.[0],
  ];
  const discount = deal.farePrice
    ? Math.max(
        0,
        Math.round(
          ((Number(deal.farePrice) - Number(deal.price)) /
            Number(deal.farePrice)) *
            100,
        ),
      )
    : 0;
  const nights = deal.dealDestinations?.[0]?.noOfNights ?? 3;
  const destination = deal.dealDestinations?.[0]?.destination?.name ?? "Bucharest";
  const dealCaption = deal.dealOfferEndCaption ?? "Super Deal";

  return (
    <section
      aria-label="Holiday deal"
      className="relative mt-3 overflow-hidden rounded-2xl"
    >
      <div className="grid h-105 grid-cols-1 gap-1.5 p-1.5 sm:h-120 md:h-[clamp(360px,38vw,680px)] md:grid-cols-[minmax(0,3.15fr)_minmax(210px,1fr)]">
        <div className="relative min-h-0 overflow-hidden rounded-xl">
          <ImageTile image={heroImages[0]} alt={deal.title} priority />
          <div className="absolute inset-0 bg-linear-to-r from-[#061c2d]/85 via-[#061c2d]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center px-5 pb-8 sm:px-8 md:px-10">
            {/* Tag / Eyebrow */}
            <div className="mb-2">
              <span className="text-xs font-semibold tracking-wide text-white drop-shadow">
                {nights} Nights in {destination} - {dealCaption}
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-225 text-[clamp(2rem,3.7vw,4.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {deal.title}
            </h1>

            {/* Inclusions Subtitle with icons [icon] [Text] */}
            <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/95 drop-shadow sm:text-sm">
              <div className="inline-flex items-center gap-1.5">
                <span className="material-symbols-rounded text-[18px] leading-none text-white">
                  flight
                </span>
                <span>Return from London</span>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <span className="material-symbols-rounded text-[18px] leading-none text-white">
                  hotel
                </span>
                <span>4 Star Hotel</span>
              </div>

              <div className="inline-flex items-center gap-1.5">
                <span className="material-symbols-rounded text-[18px] leading-none text-white">
                  tour
                </span>
                <span>Complementary trip to Transylvania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden min-h-0 grid-rows-3 gap-1.5 md:grid">
          {sideImages.map((image, index) => (
            <div key={image?.path ?? index} className="relative min-h-0 overflow-hidden rounded-lg">
              <ImageTile image={image} alt={`${deal.title} destination view ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 right-[calc(25%+1rem)] z-10 hidden w-57.5 rounded-xl bg-white p-3.5 text-[#173f68] shadow-[0_8px_24px_rgba(5,24,44,0.22)] md:block">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-medium text-slate-500">From</span>
            {discount > 0 && (
              <span className="rounded-full bg-[#173f68] px-2 py-1 text-[10px] font-bold text-white">
                {discount}% OFF
              </span>
            )}
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-extrabold leading-none">{formatPrice(deal.price)}</span>
            <span className="text-[11px] font-medium text-slate-500">pp</span>
            {deal.farePrice && (
              <span className="ml-auto text-xs text-slate-400 line-through">
                {formatPrice(deal.farePrice)}
              </span>
            )}
          </div>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            For {nights} nights
          </p>
          <a
            href="#enquiry"
            className="mt-3 flex w-full items-center justify-center rounded-md bg-[#173f68] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#102f50]"
          >
            Plan my holiday
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 bg-white px-4 py-3 md:hidden">
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-slate-500">From per person · {nights} nights</p>
          <p className="text-xl font-extrabold text-[#173f68]">{formatPrice(deal.price)}</p>
        </div>
        <a
          href="#enquiry"
          className="shrink-0 rounded-md bg-[#173f68] px-4 py-2.5 text-xs font-semibold text-white"
        >
          Plan my holiday
        </a>
      </div>
    </section>
  );
}

export default Hero;
