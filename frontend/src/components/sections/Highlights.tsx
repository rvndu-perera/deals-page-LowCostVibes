import Image from "next/image";

import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function Highlights({ deal }: { deal: DealData }) {
  const highlightImage = deal.highlight?.image;

  return (
    <section id="highlights" className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">Highlights</h2>

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-65 overflow-hidden rounded-2xl border border-slate-200">
          {highlightImage ? (
            <Image src={`https://cdn.techneapp-staging.site/${highlightImage}`} alt={deal.highlight?.imageAlt ?? deal.title} fill className="object-cover" />
          ) : null}
        </div>

        <div
          className="text-slate-700"
          dangerouslySetInnerHTML={{ __html: sanitizeRichText(deal.highlight?.content ?? "") }}
        />
      </div>
    </section>
  );
}

export default Highlights;