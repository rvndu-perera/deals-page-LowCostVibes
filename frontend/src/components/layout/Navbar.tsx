"use client";

import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mx-auto mt-3 max-w-[1800px] px-4 md:px-6">
      <div className="flex min-h-14.5 items-center justify-between gap-3 rounded-xl bg-white px-4 shadow-[0_3px_12px_rgba(15,35,55,0.08)] md:px-6">
        {/* Left side: Hamburger menu (mobile only) THEN the Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex size-9 cursor-pointer items-center justify-center rounded-lg text-[#173f68] transition hover:bg-slate-100 md:hidden"
          >
            <span className="material-symbols-rounded text-[24px]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

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
        </div>

        {/* Desktop Navigation & Actions: Tabs aligned to the right by contact button */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-6 text-[13px] font-medium text-slate-600"
          >
            <a
              href="#destinations"
              className="inline-flex items-center gap-1 transition hover:text-[#173f68]"
            >
              Destinations
              <span className="material-symbols-rounded text-[18px] leading-none">
                expand_more
              </span>
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center gap-1 transition hover:text-[#173f68]"
            >
              Categories
              <span className="material-symbols-rounded text-[18px] leading-none">
                expand_more
              </span>
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-1 transition hover:text-[#173f68]"
            >
              Deals
              <span className="material-symbols-rounded text-[18px] leading-none">
                expand_more
              </span>
            </a>
            <a
              href="#hotel"
              className="transition hover:text-[#173f68]"
            >
              About
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#enquiry"
              aria-label="Contact Low Cost Vibes"
              className="flex size-9 items-center justify-center rounded-full bg-slate-50 text-[#173f68] transition hover:bg-slate-100"
            >
              <span className="material-symbols-rounded text-[18px] leading-none">
                phone
              </span>
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#173f68] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#102f50] md:px-5"
            >
              <span>Get started</span>
              <span className="material-symbols-rounded text-[16px] leading-none">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Header Right: Quick Contact button with Contact text */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#173f68] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#102f50]"
          >
            <span className="material-symbols-rounded text-[16px] leading-none">
              phone
            </span>
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isOpen && (
        <div className="mt-2 overflow-hidden rounded-2xl bg-white p-4 shadow-xl md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-1 text-sm font-medium text-slate-700"
          >
            <a
              href="#destinations"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-[#173f68]"
            >
              <span>Destinations</span>
              <span className="material-symbols-rounded text-[18px] text-slate-400">
                expand_more
              </span>
            </a>
            <a
              href="#highlights"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-[#173f68]"
            >
              <span>Categories</span>
              <span className="material-symbols-rounded text-[18px] text-slate-400">
                expand_more
              </span>
            </a>
            <a
              href="#overview"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-[#173f68]"
            >
              <span>Deals</span>
              <span className="material-symbols-rounded text-[18px] text-slate-400">
                expand_more
              </span>
            </a>
            <a
              href="#hotel"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-[#173f68]"
            >
              About
            </a>
          </nav>

          {/* Action buttons inside the mobile menu */}
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <a
              href="#enquiry"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-2.5 text-xs font-semibold text-[#173f68] transition hover:bg-slate-200"
            >
              <span className="material-symbols-rounded text-[18px]">
                phone
              </span>
              <span>Contact</span>
            </a>
            <a
              href="#enquiry"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#173f68] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#102f50]"
            >
              <span>Get started</span>
              <span className="material-symbols-rounded text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
