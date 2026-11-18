"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { DealData } from "@/types/deal";

const defaultImages = [
  "/images/jrny-1.jpg",
  "/images/dstn-2.jpg",
  "/images/dstn-3.jpg",
  "/images/dstn-1.png",
];

const fallbackDays = [
  {
    dayNumber: "Day 01",
    title: "Explore Bucharest",
    image: "/images/jrny-1.jpg",
    bullets: [
      "Spend your first day exploring Bucharest, a vibrant city. Bucharest, Romania's capital, has tree-lined boulevards, magnificent Belle Epoque architecture, city parks, and trendy cafes.",
      "The city centre is modern and flashy in terms of architecture, yet there is a beautiful mix of Art Nouveau, mediaeval, and abandoned communist structures. A Bucharest walking tour is the best way to view the city's main sights. The enormous Palace of Parliament should not be overlooked. The Soviet-era structure is Europe's second-largest administrative structure.",
      "Then go to the Old Town. It's a delightful area to explore, dubbed \"Paris of the East\" because of its cobblestone streets, chic cafes, and restaurants. Before touring the streets, get some lunch. Historic attractions include various antique churches like Stavropoleos, Zlatari, and Solari.",
    ],
  },
  {
    dayNumber: "Day 02",
    title: "Discover Brasov",
    image: "/images/dstn-2.jpg",
    bullets: [
      "Brasov is the largest city in a mountain resort region, with the dramatic Carpathian Mountains as a backdrop. On the 2nd day, explore the historical opulence of Peles Castle, then enter the majestic realm of Bran Castle (Dracula's Castle), and then hit the slopes at Poiana Brasov.",
      "Explore Rasnov Citadel's ancient splendour, then stroll through Brasov Historical Center before ascending to a higher altitude at Muntele Tampa. The primary attraction here is Bran Castle, 30 kilometres from Brasov, well-known for being the enigmatic land of bloodthirsty vampires and terrifying howling wolves.",
    ],
  },
  {
    dayNumber: "Day 03",
    title: "Sighisoara and Sibiu",
    image: "/images/dstn-3.jpg",
    bullets: [
      "Romania will also lead you to a UNESCO World Heritage Site. Beitrag, one of Transylvania's most attractive Saxon settlements, is famed for its 16th-century fortified church, a mediaeval hilltop building surrounded by three fortified walls. Beitrag is about 40 minutes southwest of Sighisoara by cab.",
      "After spending a relaxing afternoon in the countryside, drive an hour to Sibiu, another Transylvanian mediaeval gem. German settlers founded Sibiu over 800 years ago, and well-preserved 15th-century defences ring its old city. It is home to some of Romania's finest Gothic, Baroque, and Renaissance architecture.",
      "You may round off your third day with a fantastic dinner at Crama Sibiul Vechi, where you will eat wonderful traditional foods in an intimate setting with a gorgeous ambience.",
    ],
  },
  {
    dayNumber: "Day 04",
    title: "Departure",
    image: "/images/dstn-1.png",
    bullets: [
      "Pack your bags and say goodbye to Romania.",
      "Transfer to the airport for your return flight, carrying unforgettable memories of Transylvania and Bucharest.",
    ],
  },
];

export function Itinerary({ deal }: { deal?: DealData }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Parse itinerary items from deal prop if provided, else use fallback
  const parsedDays = deal?.itineraries?.length
    ? deal.itineraries.map((item, index) => {
        const pMatches = item.content.match(/<p>([\s\S]*?)<\/p>/gi) || [];
        const cleanParagraphs = pMatches
          .map((p) =>
            p
              .replace(/<[^>]+>/g, "")
              .replace(/&nbsp;/g, " ")
              .trim()
          )
          .filter(Boolean);

        const title = cleanParagraphs[0] || `Day ${item.day}`;
        const bullets =
          cleanParagraphs.length > 1
            ? cleanParagraphs.slice(1)
            : fallbackDays[index]?.bullets ?? [
                "Enjoy your scheduled day activity and local Romanian sightseeing.",
              ];

        const dayNum = String(item.day).padStart(2, "0");

        return {
          dayNumber: `Day ${dayNum}`,
          title,
          image: defaultImages[index % defaultImages.length],
          bullets,
        };
      })
    : fallbackDays;

  const days = parsedDays.length > 0 ? parsedDays : fallbackDays;

  const scrollToDay = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= days.length) return;
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollTo({
        left: newIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      if (clientWidth > 0) {
        const newIndex = Math.round(scrollLeft / clientWidth);
        if (
          newIndex !== currentIndex &&
          newIndex >= 0 &&
          newIndex < days.length
        ) {
          setCurrentIndex(newIndex);
        }
      }
    }
  };

  return (
    <section id="itinerary" className="mt-10 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-5">
        <p className="text-xs font-medium text-[#64748b] md:text-sm">
          Itinerary
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#173f68] md:text-4xl">
          Day by Day Journey
        </h2>
      </div>

      {/* Main Card with Horizontal Scroll */}
      <div className="overflow-hidden rounded-3xl bg-[#163a63] p-5 shadow-sm sm:p-6 md:p-8">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {days.map((item, index) => (
            <div
              key={item.dayNumber}
              className="w-full shrink-0 snap-start snap-always"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start lg:gap-8">
                {/* Left: Journey Image from public/images */}
                <div className="relative aspect-4/5 w-full shrink-0 overflow-hidden rounded-2xl md:w-65 lg:w-75">
                  <Image
                    src={item.image}
                    alt={`${item.dayNumber}: ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Right: Day Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-start">
                  {/* Top Bar: Day label & Next/Prev Icon Buttons */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium tracking-wide text-[#7ca0c5] md:text-sm">
                        {item.dayNumber}
                      </p>
                      <h3 className="mt-0.5 text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Circular Next / Prev Icon Buttons */}
                    <div className="flex shrink-0 items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => scrollToDay(index - 1)}
                        disabled={index === 0}
                        aria-label="Previous day"
                        className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 md:h-9 md:w-9"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={() => scrollToDay(index + 1)}
                        disabled={index === days.length - 1}
                        aria-label="Next day"
                        className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 md:h-9 md:w-9"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Bullet Points with exact design styling */}
                  <ul className="mt-5 space-y-3.5 text-xs leading-relaxed text-[#d2dce7] md:text-[13.5px]">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/90" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Itinerary;
