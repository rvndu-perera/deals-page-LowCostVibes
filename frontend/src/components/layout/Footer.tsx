import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Help & Support", href: "/support" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Request a Quote", href: "/request-a-quote" },
  { label: "Online Visa", href: "/online-visa" },
];

const policyLinks = [
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Air Passenger Rights", href: "/air-passenger-rights" },
  { label: "Members Only", href: "/members-only" },
  { label: "Manage Bookings", href: "/manage-bookings" },
  { label: "Customer Reviews", href: "/customer-reviews" },
  { label: "Sitemap", href: "/sitemap" },
];

const socialIcons = [
  { name: "Google Reviews", icon: "/icons/Frame.png", href: "https://google.com" },
  { name: "X (Twitter)", icon: "/icons/Frame-1.png", href: "https://x.com" },
  { name: "Facebook", icon: "/icons/Frame-2.png", href: "https://facebook.com" },
  { name: "Instagram", icon: "/icons/Frame-3.png", href: "https://instagram.com" },
  { name: "TikTok", icon: "/icons/Frame-4.png", href: "https://tiktok.com" },
  { name: "Pinterest", icon: "/icons/Frame-5.png", href: "https://pinterest.com" },
  { name: "YouTube", icon: "/icons/Frame-6.png", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#16385c] text-white">
      <div className="mx-auto w-full max-w-[1720px] px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:px-12">
        {/* Brand Logo */}
        <div className="mb-10 md:mb-12">
          <Link href="/" className="inline-block transition-opacity hover:opacity-90">
            <Image
              src="/dark-logo.png"
              alt="Low Cost Vibes - Good Vibes Only"
              width={190}
              height={52}
              className="h-9 w-auto object-contain md:h-11"
              priority
            />
          </Link>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-14">
          {/* Column 1: Location & Contacts */}
          <div className="space-y-6">
            {/* Location */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <MapPin className="size-4 shrink-0 text-white" />
                <span>Location</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-[13px]">
                14 Cricklewood Lane,
                <br />
                London NW2 1EX,
                <br />
                United Kingdom.
              </p>
            </div>

            {/* Call us on */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Phone className="size-4 shrink-0 text-white" />
                <span>Call us on:</span>
              </div>
              <a
                href="tel:+4402081257557"
                className="mt-1 block text-xs text-slate-300 transition-colors hover:text-white md:text-[13px]"
              >
                +(44) 020 8125 7557
              </a>
            </div>

            {/* Mail to */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Mail className="size-4 shrink-0 text-white" />
                <span>Mail to:</span>
              </div>
              <a
                href="mailto:info@lowcostvibes.com"
                className="mt-1 block text-xs text-slate-300 transition-colors hover:text-white md:text-[13px]"
              >
                info@lowcostvibes.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-300 transition-colors hover:text-white md:text-[13.5px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policy & Support Links */}
          <div>
            <ul className="space-y-2.5">
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-300 transition-colors hover:text-white md:text-[13.5px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Need Assistance, Payment Methods & Socials */}
          <div className="space-y-6">
            {/* Assistance */}
            <div>
              <h4 className="text-sm font-bold text-white">Need Assistance?</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-[13px]">
                For reservation and booking. Our team of experienced Travel Agents
                are 24/7 at your service to help you.
              </p>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="mb-2.5 text-sm font-bold text-white">We Accept:</h4>
              <div className="inline-flex w-fit max-w-full items-center shadow-sm">
                <Image
                  src="/images/pay-img.png"
                  alt="Accepted payment methods: Visa, Mastercard, American Express, Google Pay, Apple Pay, PayPal"
                  width={340}
                  height={45}
                  className="h-7 w-auto object-contain sm:h-8"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Follow us on:</h4>
              <div className="flex flex-wrap items-center gap-3 sm:gap-3">
                {socialIcons.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="transition-all hover:scale-110 hover:opacity-90"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="size-6 object-contain sm:size-7"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
