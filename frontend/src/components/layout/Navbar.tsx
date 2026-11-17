import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="mx-auto mt-3 max-w-[1800px] px-4 md:px-6">
      <div className="flex min-h-14.5 items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-4 shadow-[0_3px_12px_rgba(15,35,55,0.08)] md:px-6">
        <a href="#" aria-label="Low Cost Vibes home" className="shrink-0">
          <Image
            src="/light-logo.png"
            alt="Low Cost Vibes"
            width={145}
            height={36}
            priority
            className="h-auto w-28 md:w-36.25"
          />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[13px] font-medium text-slate-600 md:flex">
          <a href="#destinations" className="inline-flex items-center gap-1 transition hover:text-[#173f68]">
            Destinations <ChevronDown size={13} strokeWidth={1.8} />
          </a>
          <a href="#highlights" className="inline-flex items-center gap-1 transition hover:text-[#173f68]">
            Experiences <ChevronDown size={13} strokeWidth={1.8} />
          </a>
          <a href="#overview" className="transition hover:text-[#173f68]">Deals</a>
          <a href="#hotel" className="transition hover:text-[#173f68]">About</a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#enquiry"
            aria-label="Contact Low Cost Vibes"
            className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#173f68] transition hover:bg-slate-100"
          >
            <Phone size={15} strokeWidth={1.8} />
          </a>
          <a
            href="#enquiry"
            className="rounded-lg bg-[#173f68] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#102f50] md:px-5"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
