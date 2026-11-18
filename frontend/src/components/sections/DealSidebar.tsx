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

  const phone = deal.contactNo || "+(44) 7440 669 199";
  const email = deal.contactEmail || "info@lowcostvibes.com";

  return (
    <aside className="w-full">
      {/* Offer Banner Card */}
      <div className="rounded-2xl bg-white p-2 shadow-xs">
        <Image
          src="/images/add-img.jpg"
          alt={`${deal.title} deal: ${priceDescription}. Book with confidence with financial protection, stress-free service, and handpicked hotels.`}
          width={768}
          height={1947}
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="h-auto w-full rounded-xl"
          priority
        />
        <p className="sr-only">
          {priceDescription}. Discount: {deal.saveUpto ?? 0}% off.
        </p>
      </div>

      {/* separate line with reduced opacity */}
      <hr className="my-6 border-0 border-t border-slate-300/30" />

      {/* Contact Details */}
      <div>
        <h3 className="mb-3 text-[14px] font-bold text-slate-800">
          Contact our Agents
        </h3>

        <div className="space-y-2.5">
          {/* E-Mail Card */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 text-[#163a63] shadow-xs transition hover:bg-slate-50"
          >
            <span className="material-symbols-rounded text-[26px] text-[#163a63]">
              alternate_email
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium text-slate-500">
                E-Mail
              </span>
              <span className="block truncate text-sm font-bold text-[#163a63]">
                {email}
              </span>
            </span>
            <span className="material-symbols-rounded text-[22px] text-[#163a63]">
              arrow_forward
            </span>
          </a>

          {/* Enquiry Card */}
          <a
            href="#enquiry"
            className="flex items-center gap-3.5 rounded-2xl bg-[#920404] px-4 py-3.5 text-white shadow-xs transition hover:bg-[#800303]"
          >
            <span className="material-symbols-rounded material-symbols-fill text-[26px] text-white">
              error
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold text-white/90">
                Enquiry
              </span>
              <span className="block text-sm font-bold text-white">
                Request a Call
              </span>
            </span>
            <span className="material-symbols-rounded text-[22px] text-white">
              arrow_forward
            </span>
          </a>

          {/* Call Card */}
          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-3.5 rounded-2xl bg-[#16385c] px-4 py-3.5 text-white shadow-xs transition hover:bg-[#122e4c]"
          >
            <span className="material-symbols-rounded text-[26px] text-white">
              phone_in_talk
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold text-white/90">
                Call
              </span>
              <span className="block text-sm font-bold text-white">
                {phone}
              </span>
            </span>
            <span className="material-symbols-rounded text-[22px] text-white">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default DealSidebar;
