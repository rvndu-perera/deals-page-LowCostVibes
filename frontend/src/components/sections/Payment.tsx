import Image from "next/image";
import type { DealData } from "@/types/deal";

export function Payment({ deal }: { deal: DealData }) {
  return (
    <section id="payment" className="mt-8 scroll-mt-24">
      {/* Header */}
      <div className="mb-4">
        <p className="mb-1 text-sm font-medium tracking-wide text-slate-400">
          Flexible Booking & Guarantee
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-[#163a63] sm:text-3xl">
          Transparent Payment Schedule
        </h2>
      </div>

      {/* Hero Banner with pay-back and pay-img pill */}
      <div className="relative mb-3 flex h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl sm:h-[280px] sm:rounded-3xl md:h-[320px]">
        <Image
          src="/images/pay-back.png"
          alt="Payment security background"
          fill
          priority
          className="object-cover"
        />

        {/* Centered White Pill with Payment Methods */}
        <div className="relative z-10 flex items-center justify-center rounded-full bg-white px-6 py-2.5 shadow-lg sm:px-10 sm:py-3.5">
          <Image
            src="/images/pay-img.png"
            alt="Accepted payment methods: Visa, Mastercard, American Express, Google Pay, Apple Pay, PayPal"
            width={400}
            height={75}
            className="h- w-auto object-contain sm:h-8"
          />
        </div>
      </div>

      {/* Schedule Benefit Cards */}
      <div className="space-y-3">
        {/* Top Two Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xs">
            <span className="material-symbols-rounded material-symbols-fill shrink-0 text-[22px] text-[#22c55e]">
              check_circle
            </span>
            <span className="text-xs font-medium text-slate-700 sm:text-[13.5px]">
              25% low deposit of the total holiday cost is required.
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xs">
            <span className="material-symbols-rounded material-symbols-fill shrink-0 text-[22px] text-[#22c55e]">
              check_circle
            </span>
            <span className="text-xs font-medium text-slate-700 sm:text-[13.5px]">
              The final 35% will be settled 6 weeks before departure.
            </span>
          </div>
        </div>

        {/* Full-width Bottom Card */}
        <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xs">
          <span className="material-symbols-rounded material-symbols-fill shrink-0 text-[22px] text-[#22c55e]">
            check_circle
          </span>
          <span className="text-xs font-medium text-slate-700 sm:text-[13.5px]">
            The balance is settled monthly at the time of booking, as agreed upon between the lead passenger and the travel consultant.
          </span>
        </div>
      </div>

      {/* Quick Payment Button */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#16385c] px-6 py-3 text-sm font-medium text-white shadow-xs transition-colors hover:bg-[#122e4c]"
        >
          <span>Quick Payment</span>
          <span className="material-symbols-rounded text-[18px]">
            arrow_forward
          </span>
        </button>
      </div>
    </section>
  );
}

export default Payment;
