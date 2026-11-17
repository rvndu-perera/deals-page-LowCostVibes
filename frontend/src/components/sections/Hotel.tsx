import Image from "next/image";

import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function Hotel({ deal }: { deal: DealData }) {
  const hotel = deal.hotels?.[0];
  const image = hotel?.images?.[0]?.path;

  return (
    <section id="hotel" className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">Parliament Hotel</h2>

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="relative min-h-[250px] overflow-hidden rounded-2xl border border-slate-200">
          {image ? <Image src={image} alt={hotel?.name ?? "Hotel"} fill className="object-cover" /> : null}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-amber-500">★ ★ ★ ★</div>
          <div
            className="text-slate-700"
            dangerouslySetInnerHTML={{ __html: sanitizeRichText(hotel?.description ?? "") }}
          />
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Room amenities</p>
            <div
              dangerouslySetInnerHTML={{ __html: sanitizeRichText(hotel?.roomAmenities ?? "") }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hotel;