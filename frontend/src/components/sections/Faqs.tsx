import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function Faqs({ deal }: { deal: DealData }) {
  return (
    <section id="faq" className="mt-10 scroll-mt-24 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">FAQs from guests</h2>

      <div className="space-y-4">
        {deal.dealFAQs?.map(({ id, question, answer }) => (
          <details key={id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer list-none font-semibold text-slate-900">{question}</summary>
            <div
              className="mt-3 text-sm leading-6 text-slate-700"
              dangerouslySetInnerHTML={{ __html: sanitizeRichText(answer) }}
            />
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faqs;