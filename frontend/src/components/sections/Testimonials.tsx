import type { DealData } from "@/types/deal";

const testimonials = [
  "The trip felt easy to organise and the price was excellent for what we got.",
  "The hotel was central, clean, and perfect for exploring the city.",
  "Everything was smooth from the airport transfers to the day itinerary.",
];

export function Testimonials({ deal }: { deal: DealData }) {
  return (
    <section id="testimonials" className="mt-10 scroll-mt-24 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">What travellers say</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((quote, index) => (
          <article key={quote} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 text-amber-500">★★★★★</div>
            <p className="text-sm leading-6 text-slate-700">“{quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Traveller {index + 1}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;