import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function FinePrint({ deal }: { deal: DealData }) {
  return (
    <section
      id="fine-print"
      className="mt-10 scroll-mt-24 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="mb-4 text-2xl font-black tracking-tight text-slate-900">
        Fine Print
      </h2>
      <div
        className="text-sm leading-6 text-slate-700"
        dangerouslySetInnerHTML={{
          __html: sanitizeRichText(deal.finePrint ?? ""),
        }}
      />
    </section>
  );
}

export default FinePrint;
