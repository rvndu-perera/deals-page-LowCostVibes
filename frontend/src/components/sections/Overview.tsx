import Image from "next/image";

import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

const galleryImages = [
  "/images/dstn-1.png",
  "/images/dstn-2.jpg",
  "/images/dstn-3.jpg",
  "/images/jrny-1.jpg",
];

export function Overview({ deal }: { deal: DealData }) {
  const gallery = galleryImages.map((src, index) => {
    const image = deal.overview.images?.[index];

    return {
      src,
      alt: image?.alt || `${deal.title} destination photograph ${index + 1}`,
      caption: image?.caption,
    };
  });

  return (
    <section
      id="overview"
      className="grid scroll-mt-24 items-start gap-3 md:grid-cols-[minmax(0,3fr)_minmax(220px,0.95fr)] lg:gap-4"
    >
      <div className="min-w-0">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#173f68] md:text-[28px]">
            Overview
          </h2>
          <div
            className="space-y-2 text-[13px] leading-[1.65] text-slate-700"
            dangerouslySetInnerHTML={{
              __html: sanitizeRichText(deal.overview.content),
            }}
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {gallery.map(({ src, alt, caption }, index) => (
            <figure
              key={src}
              className="relative m-0 aspect-[3/2] overflow-hidden rounded-lg bg-slate-200"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 50vw, 35vw"
                className="object-cover"
              />
              {caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 pb-2 pt-6 text-xs font-medium text-white">
                  {caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <DealSidebar deal={deal} />
    </section>
  );
}

function DealSidebar({ deal }: { deal: DealData }) {
  const nights = deal.dealDestinations?.[0]?.noOfNights ?? 3;
  const priceDescription = [
    `From ${deal.price} ${deal.currency ?? "GBP"} per person`,
    deal.farePrice ? `was ${deal.farePrice}` : undefined,
    `${nights} nights`,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <aside className="min-w-0 space-y-3 md:sticky md:top-4">
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <Image
          src="/images/add-img.jpg"
          alt={`${deal.title} deal: ${priceDescription}. Book with confidence with financial protection, stress-free service, and handpicked hotels.`}
          width={768}
          height={1947}
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="h-auto w-full rounded-lg"
        />
        <p className="sr-only">
          {priceDescription}. Discount: {deal.saveUpto ?? 0}% off.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold text-slate-700">
          Contact our Agents
        </h3>
        <div className="space-y-2">
          <a
            href={`mailto:${deal.contactEmail ?? "info@lowcostvibes.com"}`}
            className="flex min-h-[58px] items-center gap-3 rounded-lg bg-white px-3 py-2 text-[#173f68] shadow-sm transition hover:bg-slate-50"
          >
            <span aria-hidden="true" className="text-xl font-semibold">@</span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs">E-Mail</span>
              <span className="block truncate text-xs font-semibold">
                {deal.contactEmail ?? "info@lowcostvibes.com"}
              </span>
            </span>
            <span aria-hidden="true" className="text-lg">→</span>
          </a>

          <a
            href="#enquiry"
            className="flex min-h-[58px] items-center gap-3 rounded-lg bg-[#a60000] px-3 py-2 text-white shadow-sm transition hover:bg-[#8f0000]"
          >
            <span aria-hidden="true" className="text-base">!</span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold">Enquiry</span>
              <span className="block text-xs">Request a Call</span>
            </span>
            <span aria-hidden="true" className="text-lg">→</span>
          </a>

          {deal.contactNo && (
            <a
              href={`tel:${deal.contactNo.replace(/[^\d+]/g, "")}`}
              className="flex min-h-[58px] items-center gap-3 rounded-lg bg-[#173f68] px-3 py-2 text-white shadow-sm transition hover:bg-[#102f50]"
            >
              <span aria-hidden="true" className="text-base">☎</span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs">Call</span>
                <span className="block text-xs font-semibold">{deal.contactNo}</span>
              </span>
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Overview;
