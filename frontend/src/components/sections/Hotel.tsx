"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Wind,
  Bell,
  Sparkles,
  Wine,
  Bath,
  Phone,
  Wifi,
  Shirt,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import type { DealData } from "@/types/deal";

const amenitiesList = [
  { name: "Air Conditioned", icon: Wind },
  { name: "Room Services", icon: Bell },
  { name: "House Keeping", icon: Sparkles },
  { name: "Mini Bar", icon: Wine },
  { name: "Private Bathrooms", icon: Bath },
  { name: "Telephone Connection", icon: Phone },
  { name: "Free Wi-Fi", icon: Wifi },
  { name: "Laundry Services", icon: Shirt },
  { name: "Safe Guaranteed", icon: ShieldCheck },
];

export function Hotel({ deal }: { deal?: DealData }) {
  const hotel = deal?.hotels?.[0];
  const hotelName = hotel?.name ?? "Parliament Hotel";
  const rating = Number(hotel?.rating ?? 4);

  // Extract clean description text from hotel.description HTML if present
  const rawDescription = hotel?.description ?? "";
  const cleanDescription = rawDescription
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim() ||
    "The Parliament Hotel in Bucharest is a luxurious 4-star hotel that blends contemporary elegance with Romanian hospitality. Situated near the centre of the city, it provides convenient access to major landmarks like the famous Palace of Parliament, which is a tribute to the rich history of Romania. The hotel boasts well-appointed rooms and suites, each designed for comfort and equipped with modern amenities. Guests can indulge in gourmet dining at the hotel's restaurant, which offers a tantalising array of local and international cuisine. With its convenient location and upscale amenities, the Parliament Hotel promises a memorable stay for both business and leisure travellers visiting Bucharest.";

  // Hotel images from JSON data with safe fallback
  const images = hotel?.images?.filter((img) => img.path) ?? [];
  const displayImages = images.length > 0
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
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <Star className="size-3.5 text-slate-300" />
          </div>
          <span>{rating.toFixed(1)} Star Rating</span>
        </div>
      </div>

      {/* Card 1: Images Slider + Hotel Description */}
      <div className="overflow-hidden rounded-[22px] border border-slate-200/90 bg-white p-4 shadow-sm md:p-5">
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
                className="relative aspect-[4/3] w-[82%] shrink-0 snap-start overflow-hidden rounded-xl bg-slate-100 sm:w-[calc(50%-6px)] md:w-[calc(33.333%-10px)]"
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

          {/* Previous Button (revealed when scrolled right) */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous hotel photos"
              className="absolute left-2.5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105 md:left-3 md:size-11 cursor-pointer"
            >
              <ChevronLeft className="size-5 md:size-5.5" />
            </button>
          )}

          {/* Next Button Floating on the Right */}
          {canScrollRight && (
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next hotel photos"
              className="absolute right-2.5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105 md:right-3 md:size-11 cursor-pointer"
            >
              <ChevronRight className="size-5 md:size-5.5" />
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

      {/* Card 2: Room Amenities 3-column Grid */}
      <div className="mt-3.5 rounded-[22px] border border-slate-200/90 bg-white p-4 shadow-sm md:p-5">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
          {amenitiesList.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-3.5 rounded-xl border border-slate-100 bg-[#f8fafc] px-4 py-3 transition hover:bg-slate-100/70"
            >
              {/* Icon with vertical divider */}
              <div className="flex shrink-0 items-center border-r border-slate-200/80 pr-3.5 text-[#173f68]">
                <Icon className="size-4.5" />
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
