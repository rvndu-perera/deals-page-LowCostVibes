"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import type { DealData } from "@/types/deal";

// Exact icons matching the amenities design
function AirConditionedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="9" rx="2" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <path d="M7 16l-1.5 3M12 16v3M17 16l1.5 3" />
    </svg>
  );
}

function RoomServicesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16" />
      <path d="M5 18a7 7 0 0 1 14 0" />
      <circle cx="12" cy="8.5" r="1.5" />
    </svg>
  );
}

function HouseKeepingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v8" />
      <path d="M7 11h10l1.2 9H5.8L7 11z" />
      <line x1="10" y1="15" x2="10" y2="20" />
      <line x1="14" y1="15" x2="14" y2="20" />
    </svg>
  );
}

function MiniBarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <line x1="14.5" y1="11" x2="14.5" y2="13" strokeWidth="2.5" />
    </svg>
  );
}

function PrivateBathroomsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3z" />
      <line x1="6.5" y1="19" x2="5" y2="21" />
      <line x1="17.5" y1="19" x2="19" y2="21" />
      <path d="M8 8c0-1.5 1-2 1-3M12 8c0-1.5 1-2 1-3M16 8c0-1.5 1-2 1-3" />
    </svg>
  );
}

function TelephoneConnectionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <circle cx="8.5" cy="8.5" r="0.9" fill="currentColor" />
      <circle cx="12" cy="8.5" r="0.9" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="0.9" fill="currentColor" />
      <circle cx="8.5" cy="12" r="0.9" fill="currentColor" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
      <circle cx="15.5" cy="12" r="0.9" fill="currentColor" />
      <circle cx="8.5" cy="15.5" r="0.9" fill="currentColor" />
      <circle cx="12" cy="15.5" r="0.9" fill="currentColor" />
      <circle cx="15.5" cy="15.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LaundryServicesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="13" r="3.8" />
      <circle cx="15" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function SafeGuaranteedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s7 2 7 8c0 5-4 9-7 10-3-1-7-5-7-10 0-6 7-8 7-8z" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}

const amenitiesList = [
  { name: "Air Conditioned", icon: AirConditionedIcon },
  { name: "Room Services", icon: RoomServicesIcon },
  { name: "House Keeping", icon: HouseKeepingIcon },
  { name: "Mini Bar", icon: MiniBarIcon },
  { name: "Private Bathrooms", icon: PrivateBathroomsIcon },
  { name: "Telephone Connection", icon: TelephoneConnectionIcon },
  { name: "Free Wi-Fi", icon: WifiIcon },
  { name: "Laundry Services", icon: LaundryServicesIcon },
  { name: "Safe Guaranteed", icon: SafeGuaranteedIcon },
];

export function Hotel({ deal }: { deal?: DealData }) {
  const hotel = deal?.hotels?.[0];
  const hotelName = hotel?.name ?? "Parliament Hotel";
  const rating = Number(hotel?.rating ?? 4);

  // Extract clean description text from hotel.description HTML if present
  const rawDescription = hotel?.description ?? "";
  const cleanDescription =
    rawDescription
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim() ||
    "The Parliament Hotel in Bucharest is a luxurious 4-star hotel that blends contemporary elegance with Romanian hospitality. Situated near the centre of the city, it provides convenient access to major landmarks like the famous Palace of Parliament, which is a tribute to the rich history of Romania. The hotel boasts well-appointed rooms and suites, each designed for comfort and equipped with modern amenities. Guests can indulge in gourmet dining at the hotel's restaurant, which offers a tantalising array of local and international cuisine. With its convenient location and upscale amenities, the Parliament Hotel promises a memorable stay for both business and leisure travellers visiting Bucharest.";

  // Hotel images from JSON data with safe fallback
  const images = hotel?.images?.filter((img) => img.path) ?? [];
  const displayImages =
    images.length > 0
      ? images
      : [
          { path: "https://cdn.techneapp-staging.site/deals/hotel/image/a1cfb90a-f241-44f2-ae0d-545e1701c640.png" },
          { path: "https://cdn.techneapp-staging.site/deals/hotel/image/21717bb0-5f26-453c-b2f0-532daffe550c.png" },
          { path: "https://cdn.techneapp-staging.site/deals/hotel/image/1fa4128a-8c3f-404a-a134-868b82fc1767.png" },
          { path: "https://cdn.techneapp-staging.site/deals/hotel/image/2bd0b23f-2ab6-4a96-ae72-f3464cabb948.png" },
          { path: "https://cdn.techneapp-staging.site/deals/hotel/image/7bded5ab-6e5d-4a49-be26-9aa3cf368c0d.png" },
          { path: "https://cdn.techneapp-staging.site/deals/hotel/image/37c29cbd-1775-4906-8477-c85fd22d6860.png" },
        ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const amount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const amount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="hotel" className="mt-10 scroll-mt-24">
      {/* Section Header: Eyebrow, Title & Star Rating Pill */}
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-[#64748b] md:text-sm">Hotels</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#173f68] md:text-4xl">
            {hotelName}
          </h2>
        </div>

        {/* 4.0 Star Rating Badge */}
        <div className="flex items-center gap-2 rounded-full bg-[#eef2f6] px-3.5 py-1.5 text-xs font-semibold text-[#173f68] md:text-sm">
          <div className="flex items-center text-amber-400">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-rounded material-symbols-fill text-[16px] text-amber-400 leading-none"
              >
                star
              </span>
            ))}
            <span className="material-symbols-rounded text-[16px] text-slate-300 leading-none">
              star
            </span>
          </div>
          <span>{rating.toFixed(1)} Star Rating</span>
        </div>
      </div>

      {/* Card 1: Images Slider + Hotel Description */}
      <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-xs md:p-5">
        {/* Horizontal Image Slider */}
        <div className="relative">
          {/* Scrollable track showing 3 images at a time on desktop */}
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth scrollbar-none md:gap-3.5 [&::-webkit-scrollbar]:hidden"
          >
            {displayImages.map((img, index) => (
              <div
                key={img.path ?? index}
                className="relative aspect-4/3 w-[82%] shrink-0 snap-start overflow-hidden rounded-xl bg-slate-100 sm:w-[calc(50%-6px)] md:w-[calc(33.333%-10px)]"
              >
                <Image
                  src={img.path}
                  alt={`${hotelName} photograph ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous hotel photos"
              className="absolute left-2.5 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white md:left-3 md:size-11"
            >
              <span className="material-symbols-rounded text-[22px] leading-none">
                chevron_left
              </span>
            </button>
          )}

          {/* Next Button */}
          {canScrollRight && (
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next hotel photos"
              className="absolute right-2.5 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white md:right-3 md:size-11"
            >
              <span className="material-symbols-rounded text-[22px] leading-none">
                chevron_right
              </span>
            </button>
          )}
        </div>

        {/* Hotel Description Text */}
        <div className="pt-7 md:pt-9">
          <p className="text-xs leading-relaxed text-slate-600 md:text-[13.5px]">
            {cleanDescription}
          </p>
        </div>
      </div>

      {/* Card 2: Room Amenities 3-column Grid matching exact design */}
      <div className="mt-3.5 rounded-2xl bg-white p-4 shadow-xs md:p-5">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
          {amenitiesList.map(({ name, icon: IconComponent }) => (
            <div
              key={name}
              className="flex items-center gap-3.5 rounded-xl bg-[#f8fafc] px-4 py-3 transition hover:bg-slate-100/70"
            >
              {/* Icon with vertical divider */}
              <div className="flex shrink-0 items-center border-r border-slate-200/80 pr-3.5 text-[#173f68]">
                <IconComponent />
              </div>
              {/* Amenity Title */}
              <span className="text-xs font-medium text-[#173f68] md:text-[13px]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hotel;
