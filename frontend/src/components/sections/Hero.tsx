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
    deal.overview.images?.[0],
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
  const nights =
    deal.dealDestinations?.[0]?.noOfNights ?? 3;

  return (
    <section
      aria-label="Holiday deal"
      className="relative mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,35,55,0.12)]"
    >
      <div className="grid h-[420px] grid-cols-1 gap-1.5 bg-white p-1.5 sm:h-[480px] md:h-[clamp(360px,38vw,680px)] md:grid-cols-[minmax(0,3.15fr)_minmax(210px,1fr)]">
        <div className="relative min-h-0 overflow-hidden rounded-lg">
          <ImageTile image={heroImages[0]} alt={deal.title} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061c2d]/70 via-[#061c2d]/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 top-0 flex items-center px-5 pb-8 sm:px-8 md:px-10">
            <h1 className="max-w-[900px] text-[clamp(2rem,3.7vw,4.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {deal.title}
            </h1>
          </div>
        </div>

        <div className="hidden min-h-0 grid-rows-3 gap-1.5 md:grid">
          {sideImages.map((image, index) => (
            <div key={image?.path ?? index} className="relative min-h-0 overflow-hidden rounded-lg">
              <ImageTile image={image} alt={`${deal.title} destination view ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 right-[calc(25%+1rem)] z-10 hidden w-[230px] rounded-lg border border-slate-200 bg-white p-3.5 text-[#173f68] shadow-[0_8px_24px_rgba(5,24,44,0.22)] md:block">
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

      <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-white px-4 py-3 md:hidden">
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
