import Image from "next/image";
import { CheckCheck } from "lucide-react";
import type { DealData } from "@/types/deal";

const activities = [
  {
    title: "Bucharest: Dracula's Castle, Peleș Castle & Brașov Day Trip",
    price: "£36 / Person",
  },
  {
    title: "Bucharest: 2-Hour City Highlights Bike Tour",
    price: "£27 / Person",
  },
  {
    title: "Bucharest: Parliament Palace Skip-the-line Ticket",
    price: "£19 / Person",
  },
  {
    title: "Bucharest City Tour and Wine Tasting",
    price: "£56 / Person",
  },
  {
    title: "Bucharest: Dracula's Castle, Peleș Castle & Brașov Day Trip",
    price: "£36 / Person",
  },
];

export function Excursions({ deal }: { deal?: DealData }) {
  return (
    <section id="excursions" className="mt-10 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-4">
        <p className="text-xs font-medium text-[#64748b] md:text-sm">
          Tailer your Experiences
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#173f68] md:text-4xl">
          Activities Options
        </h2>
        <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-600 md:text-sm">
          All included activities have zero hidden costs. Add optional bespoke
          excursions now or up to 14 days before your trip.
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 gap-5 items-stretch md:grid-cols-[1.1fr_0.9fr] lg:gap-5">
        {/* Left: Activity Rows without borders, tighter gap */}
        <div className="flex flex-col gap-2">
          {activities.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white p-8 shadow-xs"
            >
              {/* Green double checkmark & title */}
              <div className="flex min-w-0 items-center gap-2.5">
                <CheckCheck className="size-4 shrink-0 text-[#10b981]" />
                <span className="truncate text-xs font-medium text-slate-700 md:text-[13px]">
                  {item.title}
                </span>
              </div>

              {/* Price Pill */}
              <span className="shrink-0 rounded-full bg-[#f1f4f8] px-3.5 py-1 text-xs font-semibold text-[#173f68]">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Clean Image Card without any text overlays */}
        <div className="relative aspect-5/6 min-h-90 overflow-hidden">
          <Image
            src="/images/special-tour-img.png"
            alt="Activities and special tour"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}

export default Excursions;
