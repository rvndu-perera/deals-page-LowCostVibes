import Image from "next/image";

import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";
export { DealSidebar } from "./DealSidebar";

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
    <section id="overview" className="scroll-mt-24">
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
        {gallery.map(({ src, alt, caption }) => (
          <figure
            key={src}
            className="relative m-0 aspect-3/2 overflow-hidden rounded-lg bg-slate-200"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 50vw, 35vw"
              className="object-cover"
            />
            {caption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-2 pb-2 pt-6 text-xs font-medium text-white">
                {caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Overview;
