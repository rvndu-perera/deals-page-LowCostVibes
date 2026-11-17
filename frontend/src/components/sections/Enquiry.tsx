import type { DealData } from "@/types/deal";

export function Enquiry({ deal }: { deal: DealData }) {
  return (
    <section id="enquiry" className="mt-10 rounded-[28px] border border-slate-200 bg-gradient-to-r from-sky-950 to-sky-900 p-6 text-white shadow-sm md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-200">Plan your trip</p>
          <h2 className="text-3xl font-black uppercase tracking-tight">Take a quick enquiry about this holiday</h2>
        </div>

        <form className="space-y-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <input
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-sky-200"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-sky-200"
            placeholder="Email address"
          />
          <button type="button" className="w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-sky-950">
            Send enquiry for {deal.title}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Enquiry;