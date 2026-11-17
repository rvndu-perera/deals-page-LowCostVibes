import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function Payment({ deal }: { deal: DealData }) {
  return (
    <section id="payment" className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">Transparent payment schedule</h2>
      <div
        className="text-slate-700"
        dangerouslySetInnerHTML={{ __html: sanitizeRichText(deal.payment ?? "") }}
      />
    </section>
  );
}

export default Payment;