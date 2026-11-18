"use client";

import { useEffect, useState, useRef } from "react";

const sections = [
  { label: "Overview", id: "overview" },
  { label: "Highlights", id: "highlights" },
  { label: "Itinerary", id: "itinerary" },
  { label: "Hotel", id: "hotel" },
  { label: "Destinations", id: "destinations" },
  { label: "Excursions", id: "excursions" },
  { label: "Payment", id: "payment" },
  { label: "FAQs", id: "faq" },
  { label: "Testimonials", id: "testimonials" },
];

export function SectionNav() {
  const [activeId, setActiveId] = useState<string>("overview");
  const isClickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return;

      const offset = 140; // Top offset threshold
      const sectionElements = sections
        .map((s) => ({ id: s.id, el: document.getElementById(s.id) }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      let currentSection = sectionElements[0]?.id || "overview";
      for (const section of sectionElements) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentSection = section.id;
        }
      }

      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);
    isClickingRef.current = true;

    el.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <nav
      aria-label="Holiday details navigation"
      className="sticky top-5 z-20 mt-4 mb-6 md:mt-5 md:mb-7 overflow-x-auto rounded-2xl bg-white/95 p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur-md scrollbar-none [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex w-full min-w-max md:min-w-full items-center justify-between gap-1">
        {sections.map(({ label, id }) => {
          const isActive = activeId === id;
          return (
            <li key={id} className="flex-1 text-center">
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isActive ? "location" : undefined}
                className={`block w-full cursor-pointer whitespace-nowrap rounded-xl px-2 py-2.5 text-center text-xs font-semibold transition-all sm:text-[13px] ${
                  isActive
                    ? "bg-[#163a63] text-white shadow-xs"
                    : "text-slate-600 hover:bg-[#edf2f7] hover:text-[#163a63]"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SectionNav;
