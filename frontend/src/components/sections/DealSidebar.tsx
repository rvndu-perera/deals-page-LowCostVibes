import Image from "next/image";
import type { DealData } from "@/types/deal";

export function DealSidebar({ deal }: { deal: DealData }) {
  const nights = deal.dealDestinations?.[0]?.noOfNights ?? 3;
  const priceDescription = [
    `From ${deal.price} ${deal.currency ?? "GBP"} per person`,
    deal.farePrice ? `was ${deal.farePrice}` : undefined,
    `${nights} nights`,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <aside className="w-full space-y-12">
      {/* Offer Banner Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm mt-5">
        <Image
          src="/images/add-img.jpg"
          alt={`${deal.title} deal: ${priceDescription}. Book with confidence with financial protection, stress-free service, and handpicked hotels.`}
          width={768}
          height={1947}
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="h-auto w-full rounded-lg"
          priority
        />
        <p className="sr-only">
          {priceDescription}. Discount: {deal.saveUpto ?? 0}% off.
        </p>
      </div>

      <hr className=""/>

      {/* Contact Details */}
      <div>
        <h3 className="mb-2 text-xs font-semibold text-slate-700">
          Contact our Agents
        </h3>
        <div className="space-y-2">
          <a
            href={`mailto:${deal.contactEmail ?? "info@lowcostvibes.com"}`}
            className="flex min-h-14.5 items-center gap-3 rounded-lg bg-white px-3 py-2 text-[#173f68] shadow-sm transition hover:bg-slate-50"
          >
            <span aria-hidden="true" className="text-xl font-semibold">
              @
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-slate-500">E-Mail</span>
              <span className="block truncate text-xs font-semibold">
                {deal.contactEmail ?? "info@lowcostvibes.com"}
              </span>
            </span>
            <span aria-hidden="true" className="text-lg text-slate-400">
              →
            </span>
          </a>

          <a
            href="#enquiry"
            className="flex min-h-14.5 items-center gap-3 rounded-lg bg-[#a60000] px-3 py-2 text-white shadow-sm transition hover:bg-[#8f0000]"
          >
            <span aria-hidden="true" className="text-base font-bold">
              !
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold">Enquiry</span>
              <span className="block text-xs text-white/80">Request a Call</span>
            </span>
            <span aria-hidden="true" className="text-lg text-white/80">
              →
            </span>
          </a>

          {deal.contactNo && (
            <a
              href={`tel:${deal.contactNo.replace(/[^\d+]/g, "")}`}
              className="flex min-h-14.5 items-center gap-3 rounded-lg bg-[#173f68] px-3 py-2 text-white shadow-sm transition hover:bg-[#102f50]"
            >
              <span aria-hidden="true" className="text-base">
                ☎
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-white/80">Call</span>
                <span className="block text-xs font-semibold">
                  {deal.contactNo}
                </span>
              </span>
              <span aria-hidden="true" className="text-lg text-white/80">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}

export default DealSidebar;
