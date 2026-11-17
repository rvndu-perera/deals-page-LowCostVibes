import Image from "next/image";

import type { DealData } from "@/types/deal";

export function Destinations({ deal }: { deal: DealData }) {
  return (
    <section id="destinations" className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">Destinations</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {deal.dealDestinations?.map(({ destination }, index) => (
          <article key={`${destination?.name ?? "destination"}-${index}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            {destination?.image?.path ? (
              <div className="relative h-44">
                <Image src={destination.image.path} alt={destination.name ?? "Destination"} fill className="object-cover" />
              </div>
            ) : null}
            <div className="p-4">
              <p className="text-lg font-bold text-slate-900">{destination?.name ?? "Destination"}</p>
              <p className="text-sm text-slate-600">{destination?.country ?? "Romania"}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Destinations;