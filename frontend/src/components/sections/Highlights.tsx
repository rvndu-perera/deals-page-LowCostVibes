import Image from "next/image";
import type { DealData } from "@/types/deal";

function DotBullet() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-white"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function Highlights({ deal }: { deal?: DealData }) {
  return (
    <section id="highlights" className="mt-10 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-5">
        <p className="text-xs font-medium text-[#64748b] md:text-sm">
          All-Inclusive In Deal
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#173f68] md:text-4xl">
          Highlights
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {/* Card 1: Overall Benefits */}
        <div className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[22px] p-6 shadow-sm md:min-h-[420px] md:p-8">
          <Image
            src="/images/highlight -1.jpg"
            alt="Overall Benefits - London Big Ben"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-55% to-transparent" />

          {/* Content */}
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex w-fit items-center rounded-full border border-white/25 bg-black/20 px-4 py-1 text-xs font-medium text-white backdrop-blur-md">
              Overall Benefits
            </span>

            <ul className="space-y-2.5 text-xs text-white/95 md:text-[13.5px]">
              <li className="flex items-center gap-2.5">
                <DotBullet />
                <span>Return Flights from London</span>
              </li>
              <li className="flex items-center gap-2.5">
                <DotBullet />
                <span>Regional airports available upon request.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <DotBullet />
                <span>Stay 3 nights in Bucharest at Parliament Hotel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Near by Restaurants */}
        <div className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[22px] p-6 shadow-sm md:min-h-[420px] md:p-8">
          <Image
            src="/images/highlight-2.jpg"
            alt="Nearby Restaurants"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-55% to-transparent" />

          {/* Content */}
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex w-fit items-center rounded-full border border-white/25 bg-black/20 px-4 py-1 text-xs font-medium text-white backdrop-blur-md">
              Near by Restaurents
            </span>

            <ul className="space-y-2.5 text-xs text-white/95 md:text-[13.5px]">
              <li className="flex items-center gap-2.5">
                <DotBullet />
                <span>Pergola Cotroceni</span>
              </li>
              <li className="flex items-center gap-2.5">
                <DotBullet />
                <span>Bocca Lupo</span>
              </li>
              <li className="flex items-center gap-2.5">
                <DotBullet />
                <span>Derby</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Near by Attractions */}
        <div className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[22px] p-6 shadow-sm md:col-span-2 md:min-h-[270px] md:p-8">
          <Image
            src="/images/highlight-3.jpg"
            alt="Nearby Attractions - Bucharest"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-60% to-transparent" />

          {/* Content */}
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex w-fit items-center rounded-full border border-white/25 bg-black/20 px-4 py-1 text-xs font-medium text-white backdrop-blur-md">
              Near by Attractions
            </span>

            <div className="grid grid-cols-1 gap-x-8 gap-y-2.5 text-xs text-white/95 sm:grid-cols-2 md:text-[13.5px]">
              <div className="flex items-center gap-2.5">
                <DotBullet />
                <span>The Stairs of Happiness</span>
              </div>
              <div className="flex items-center gap-2.5">
                <DotBullet />
                <span>The Zodiac Fountain</span>
              </div>
              <div className="flex items-center gap-2.5">
                <DotBullet />
                <span>Palace of Parliament</span>
              </div>
              <div className="flex items-center gap-2.5">
                <DotBullet />
                <span>Transylvania Day Trip from Bucharest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
