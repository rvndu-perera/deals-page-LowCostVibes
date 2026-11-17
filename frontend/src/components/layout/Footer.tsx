export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="mb-3 text-lg font-black uppercase tracking-[0.2em] text-white">Low Cost Vibes</p>
          <p className="text-sm text-slate-300">Travel deals designed around sunshine, culture, and value.</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Romania escapes</li>
            <li>City breaks</li>
            <li>Group travel</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Booking support</li>
            <li>Payment plans</li>
            <li>Travel advice</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;