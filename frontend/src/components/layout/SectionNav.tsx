const sections = [
  ["Overview", "#overview"],
  ["Highlights", "#highlights"],
  ["Itinerary", "#itinerary"],
  ["Hotel", "#hotel"],
  ["Destinations", "#destinations"],
  ["Excursion", "#excursions"],
  ["Payment", "#payment"],
  ["Fine Print", "#fine-print"],
  ["FAQs", "#faq"],
  ["Testimonials", "#testimonials"],
] as const;

export function SectionNav() {
  return (
    <nav
      aria-label="Holiday details"
      className="sticky top-2 z-30 mt-3 mb-4 overflow-x-auto rounded-xl border border-slate-200 bg-white/95 px-2 shadow-[0_3px_12px_rgba(15,35,55,0.08)] backdrop-blur scrollbar-none [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex min-w-max items-center gap-1 py-1">
        {sections.map(([label, href], index) => (
          <li key={href}>
            <a
              href={href}
              aria-current={index === 0 ? "location" : undefined}
              className={`block whitespace-nowrap rounded-lg px-3 py-2.5 text-xs transition-colors hover:bg-slate-100 hover:text-[#173f68] sm:px-4 ${
                index === 0
                  ? "font-bold text-[#173f68]"
                  : "font-medium text-slate-500"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;
