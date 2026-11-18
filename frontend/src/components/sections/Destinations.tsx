import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import type { DealData } from "@/types/deal";

const destinationList = [
  {
    name: "Bucharest",
    badge: "One Night",
    image: "/images/jrny-1.jpg",
    description:
      "Romania's capital, Bucharest, is rich with a legendary history that combines with its present character.",
  },
  {
    name: "Trans Lavinia",
    badge: "One Night",
    image: "/images/dstn-2.jpg",
    hasUnderline: true,
    description:
      "The George Enescu Philharmonic Orchestra is housed in this magnificent neoclassical domed tower.",
  },
  {
    name: "Unirii Square",
    badge: null,
    image: "/images/dstn-3.jpg",
    description:
      "If you visit the city during one of these months, you'll get the best of both worlds.",
  },
];

export function Destinations({ deal }: { deal?: DealData }) {
  // Google Maps link for route / destination access
  const mapUrl =
    "https://www.google.com/maps/dir/Bucharest,+Romania/Bran+Castle,+Bran,+Romania/Unirii+Square,+Bucharest";

  return (
    <section id="destinations" className="mt-10 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-[#173f68] md:text-4xl">
          Destinations
        </h2>
        <span className="text-xs font-medium text-[#7ba0c5] md:text-sm">
          5 main stops • 3 Nights
        </span>
      </div>

      {/* 3 Destination Cards */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3">
        {destinationList.map((item) => (
          <article
            key={item.name}
            className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white p-3.5 shadow-sm transition hover:shadow-md"
          >
            {/* Image Container with optional Badge */}
            <div className="relative aspect-[4/2.7] w-full overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />

              {item.badge && (
                <span className="absolute right-2.5 top-2.5 rounded-full bg-[#163a62]/90 px-3 py-1 text-[11px] font-medium text-white shadow-sm backdrop-blur-sm">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="pt-3.5 pb-1">
              <h3 className="text-base font-bold text-[#173f68] md:text-lg">
                <span
                  className={
                    item.hasUnderline
                      ? "border-b-2 border-[#173f68] pb-0.5"
                      : ""
                  }
                >
                  {item.name}
                </span>
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Map View Card */}
      <div className="mt-4 overflow-hidden rounded-[22px] border border-slate-200/90 bg-white p-4 shadow-sm md:p-5">
        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-[#173f68] md:text-xl">
              Map View
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-[#7ba0c5] md:text-sm">
              All Transits Included
            </span>
          </div>
        </div>

        {/* Map Container */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/6] w-full overflow-hidden rounded-xl bg-[#1d3e48] transition hover:opacity-95"
          title="Click to explore interactive map"
        >
          <Image
            src="/images/romania-map.jpg"
            alt="Romania transit route map showing Bucharest, Cluj-Napoca, Timișoara"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-transparent transition group-hover:bg-black/10" />
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
            <MapPin className="size-3" />
            <span>Interactive Map Access</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Destinations;
