"use client";

import { useState } from "react";
import { sanitizeRichText } from "@/lib/sanitize";
import type { DealData } from "@/types/deal";

export function Faqs({ deal }: { deal: DealData }) {
  // Default to item 3 open as shown in the design
  const [openId, setOpenId] = useState<number | null>(
    deal.dealFAQs?.[2]?.id ?? 45
  );

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="mt-8 scroll-mt-24">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[#163a63]">
          FAQs from Guests
        </h2>
        <span className="text-sm font-normal text-slate-400">
          {deal.dealFAQs?.length ?? 5} Common Inquires
        </span>
      </div>

      {/* List of FAQ Cards */}
      <div className="space-y-3">
        {deal.dealFAQs?.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all"
            >
              {/* Question Row */}
              <button
                type="button"
                onClick={() => toggle(id)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4.5 text-left select-none"
              >
                <span className="text-[15px] font-medium text-slate-800 sm:text-base">
                  {question}
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#edf2f7] text-[#163a63] transition-colors hover:bg-[#e2e8f0]">
                  <span className="material-symbols-rounded text-[18px] leading-none">
                    {isOpen ? "remove" : "add"}
                  </span>
                </span>
              </button>

              {/* Expanded Answer with Divider */}
              {isOpen && (
                <>
                  <div className="border-t border-slate-100" />
                  <div
                    className="px-6 py-5 text-[14px] leading-relaxed text-[#4f6785] [&>p]:m-0 [&>p]:leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeRichText(answer),
                    }}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faqs;
