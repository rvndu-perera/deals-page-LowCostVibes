import Image from "next/image";
import type { DealData } from "@/types/deal";

const testimonials = [
  {
    name: "Sarath Jay",
    handle: "Ceo @Kapruka",
    avatar: "https://i.pravatar.cc/150?img=11",
    quote:
      "\"We booked a 5-bedroom villa for a milestone birthday with friends. The layout was spacious enough for everyone to have privacy while providing amazing common areas to cook, lounge, and celebrate together. Highly recommended!\"",
  },
  {
    name: "Sara Saf.",
    handle: "Ceo @codelabs",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "\"The villa was fully equipped with top-tier amenities, comfortable beds, and a kitchen that had everything we needed. The interior design was elegant yet cozy. It really felt like staying in a private retreat.\"",
  },
  {
    name: "Davy Johns",
    handle: "@Malaysia",
    avatar: "https://i.pravatar.cc/150?img=15",
    quote:
      "\"If you are looking for peace and quiet away from crowded resorts, this is the place. Nestled in the hills with panoramic views, we enjoyed total seclusion while still being only a 10-minute drive from the beach.\"",
  },
  {
    name: "St. John",
    handle: "@Australia",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "\"Traveling with toddlers can be stressful, but the villa team provided high chairs, baby gates, and pool safety measures beforehand. It allowed us to relax completely and enjoy our vacation together.\"",
  },
  {
    name: "Salina Wil.",
    handle: "Ceo @Multilac",
    avatar: "https://i.pravatar.cc/150?img=44",
    quote:
      "\"Photos usually look better than reality, but in this case, the villa was even more gorgeous in person. Five-star service, gorgeous architecture, and smooth booking from start to finish.\"",
  },
  {
    name: "Kenji N.",
    handle: "Ceo @Codex",
    avatar: "https://i.pravatar.cc/150?img=56",
    quote:
      "\"The high-speed Wi-Fi allowed me to handle remote work meetings seamlessly, while the serene outdoor lounge served as the best desk view I've ever had. A perfect balance of productivity and leisure!\"",
  },
  {
    name: "Milli Mack",
    handle: "Ceo @softlogic",
    avatar: "https://i.pravatar.cc/150?img=49",
    quote:
      "\"We stayed at Villa Serenity for a week, and it exceeded every expectation. The ocean views from the terrace were breathtaking, and the private pool was pristine. The staff went above and beyond to make our family stay memorable. We're already planning our return!\"",
  },
  {
    name: "Elena R.",
    handle: "@Germany",
    avatar: "https://i.pravatar.cc/150?img=13",
    quote:
      "\"From the seamless check-in process to the personalized concierge service, every detail was handled flawlessly. Waking up to the sound of the waves and enjoying fresh breakfast prepared daily at the villa was pure luxury.\"",
  },
];

export function Testimonials({ deal }: { deal: DealData }) {
  return (
    <section id="testimonials" className="mt-10 scroll-mt-24 px-4 py-10 md:px-8">
      {/* Section Header */}
      <div className="mb-6">
        <p className="text-xs font-medium text-[#64748b] md:text-sm">
          Testimonial
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#173f68] md:text-4xl">
          What travelers say about
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-5 shadow-xs"
          >
            {/* Avatar + name */}
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400">{t.handle}</p>
              </div>
            </div>
            {/* Quote */}
            <p className="text-sm leading-relaxed text-slate-600">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
