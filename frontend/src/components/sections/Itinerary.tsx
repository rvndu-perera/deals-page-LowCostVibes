import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function Itinerary({ deal }: { deal: DealData }) {
  return (
    <section id="itinerary" className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">Day by day journey</h2>

      <div className="space-y-4">
        {deal.itineraries?.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Day {item.day}</p>
            <div
              className="text-slate-700"
              dangerouslySetInnerHTML={{ __html: sanitizeRichText(item.content) }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Itinerary;