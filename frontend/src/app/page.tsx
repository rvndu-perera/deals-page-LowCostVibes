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
import { Faqs } from "@/components/sections/Faqs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Enquiry } from "@/components/sections/Enquiry";
import { DealSidebar } from "@/components/sections/DealSidebar";
import { deal } from "@/lib/deal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efefef]">
      <Navbar />
      <div className="mx-auto w-full max-w-[1800px] px-4 pb-16 pt-1 md:px-6">
        <Hero deal={deal} />
        {/* 2-column layout: Main content on the left, sticky offer/contact sidebar on the right until Testimonials */}
        <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-5 xl:grid-cols-[minmax(0,1fr)_350px]">
          <div className="min-w-0">
            <SectionNav />
            <Overview deal={deal} />
            <Highlights deal={deal} />
            <Itinerary deal={deal} />
            <Hotel deal={deal} />
            <Destinations deal={deal} />
            <Excursions deal={deal} />
            <Payment deal={deal} />
            <Faqs deal={deal} />
          </div>

          {/* Sticky sidebar: remains visible and fixed on the right until Testimonials is reached */}
          <div className="min-w-0 md:sticky md:top-5">
            <DealSidebar deal={deal} />
          </div>
        </div>

        {/* Full-width sections after sidebar stops */}
        <Testimonials deal={deal} />
        <Enquiry deal={deal} />
      </div>
      <Footer />
    </main>
  );
}
