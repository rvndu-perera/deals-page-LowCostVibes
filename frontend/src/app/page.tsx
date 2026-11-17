import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionNav } from "@/components/layout/SectionNav";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Highlights } from "@/components/sections/Highlights";
import { Itinerary } from "@/components/sections/Itinerary";
import { Hotel } from "@/components/sections/Hotel";
import { Destinations } from "@/components/sections/Destinations";
import { Excursions } from "@/components/sections/Excursions";
import { Payment } from "@/components/sections/Payment";
import { FinePrint } from "@/components/sections/FinePrint";
import { Faqs } from "@/components/sections/Faqs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Enquiry } from "@/components/sections/Enquiry";
import { deal } from "@/lib/deal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efefef]">
      <Navbar />
      <div className="mx-auto w-full max-w-[1800px] px-4 pb-16 pt-1 md:px-6">
        <Hero deal={deal} />
        <SectionNav />
        <Overview deal={deal} />
        <Highlights deal={deal} />
        <Itinerary deal={deal} />
        <Hotel deal={deal} />
        <Destinations deal={deal} />
        <Excursions deal={deal} />
        <Payment deal={deal} />
        <FinePrint deal={deal} />
        <Faqs deal={deal} />
        <Testimonials deal={deal} />
        <Enquiry deal={deal} />
      </div>
      <Footer />
    </main>
  );
}
