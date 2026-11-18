"use client";

import { useState } from "react";
import Image from "next/image";
import { SuccessModal } from "@/components/ui/SuccessModal";
import type { DealData } from "@/types/deal";

export function Enquiry({ deal }: { deal?: DealData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="enquiry" className="mt-10 scroll-mt-24">
      {/* Full-bleed card with background image */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background image */}
        <Image
          src="/images/cto-img.jpg"
          alt="Corvin Castle, Romania"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay — heavier on the left, fades right */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0e2340]/90 via-[#0e2340]/60 to-[#0e2340]/20" />

        {/* Content Row */}
        <div className="relative z-10 flex min-h-105 flex-col justify-center gap-6 px-7 py-10 md:flex-row md:items-center md:gap-10 md:px-10 md:py-12 lg:px-14">
          {/* Left: Text block */}
          <div className="flex-1 max-w-sm md:max-w-md">
            <p className="mb-2 text-xs font-medium text-white/70 md:text-sm">
              Contact us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight">
              Take a Inquiry about this Holiday or Solve your every doubts here.
            </h2>

            {/* CTA button */}
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/60 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20"
            >
              We are available 24×7
              <span className="material-symbols-rounded text-[18px] leading-none">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Right: Form Card */}
          <div className="w-full max-w-sm md:ml-auto md:w-96 md:max-w-none lg:w-100">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white/95 px-6 py-7 shadow-xl backdrop-blur-md"
            >
              {/* Your Name */}
              <div className="mb-4">
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#173f68]">
                  <span className="material-symbols-rounded text-[16px] text-[#173f68]">
                    person
                  </span>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John David"
                  className="w-full rounded-xl bg-[#f1f4f8] px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#173f68]/30"
                />
              </div>

              {/* Email Address */}
              <div className="mb-4">
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#173f68]">
                  <span className="material-symbols-rounded text-[16px] text-[#173f68]">
                    mail
                  </span>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  className="w-full rounded-xl bg-[#f1f4f8] px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#173f68]/30"
                />
              </div>

              {/* Message / Purpose */}
              <div className="mb-5">
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#173f68]">
                  <span className="material-symbols-rounded text-[16px] text-[#173f68]">
                    chat
                  </span>
                  Message / Purpose
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-xl bg-[#f1f4f8] px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#173f68]/30"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#173f68] py-3 text-sm font-semibold text-white transition hover:bg-[#102f50]"
              >
                <span className="material-symbols-rounded text-[18px]">
                  send
                </span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal Pop-up Component */}
      <SuccessModal
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
      />
    </section>
  );
}

export default Enquiry;
