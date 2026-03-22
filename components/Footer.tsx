import Link from "next/link";
import Image from "next/image";

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const SnowflakeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-blue-300"
    aria-hidden="true"
  >
    <line x1="12" y1="2"  x2="12" y2="22" />
    <line x1="2"  y1="12" x2="22" y2="12" />
    <line x1="4.93"  y1="4.93"  x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93"  x2="4.93"  y2="19.07" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="3"  r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="21" r="1" fill="currentColor" stroke="none" />
    <circle cx="3"  cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="21" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Social icon placeholders
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36003 19.27 5.00003 16.25 5.00003 12C5.00003 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42003 2 2.03003 6.8 2.03003 12C2.03003 17.05 6.16003 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickLinks = [
  { label: "Home",          href: "/"             },
  { label: "About Us",      href: "/about"        },
  { label: "Services",      href: "/residential"  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog",          href: "/blog"         },
  { label: "Contact Us",    href: "/contact"      },
  { label: "Get Free Quote",href: "/contact"      },
];

const serviceLinks = [
  { label: "Residential HVAC Repair", href: "/residential"   },
  { label: "AC Installation",         href: "/residential"   },
  { label: "Heating Repair",          href: "/residential"   },
  { label: "Air Duct Repair",         href: "/residential"   },
  { label: "Exhaust Fan Repair",      href: "/residential"   },
  { label: "Water Heater Repair",     href: "/residential"   },
  { label: "Commercial HVAC",         href: "/commercial"    },
];

const serviceAreas = [
  { label: "Tampa",         href: "/service-areas/tampa"         },
  { label: "St. Petersburg",href: "/service-areas/st-petersburg" },
  { label: "Clearwater",    href: "/service-areas/clearwater"    },
  { label: "Brandon",       href: "/service-areas/brandon"       },
  { label: "Riverview",     href: "/service-areas/riverview"     },
];

const socialLinks = [
  { label: "Facebook",  href: "#", Icon: FacebookIcon  },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Google",    href: "#", Icon: GoogleIcon    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="bg-[#0f1620] text-white"
      aria-label="Site footer"
    >
      {/* ── Main footer grid ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 – Logo & tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.svg"
                alt="North East Heating and Cooling"
                width={200}
                height={64}
                className="w-auto h-14"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Professional HVAC services for residential and commercial
              customers throughout Tampa Bay. Licensed, insured, and available
              24/7 for emergency service.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-800 hover:bg-red-600 transition-colors text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:bg-white transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:bg-white transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Service Areas + Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">
              Service Areas
            </h3>
            <ul className="space-y-2.5 mb-6">
              {serviceAreas.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 group-hover:bg-white transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-orange-400 hover:text-white text-sm font-semibold transition-colors flex items-center gap-1"
                >
                  View All Areas &rarr;
                </Link>
              </li>
            </ul>

            {/* Contact info */}
            <h3 className="text-white font-bold text-base mb-3 pb-2 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:8132916146"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <PhoneIcon />
                  (813) 291-6146
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@northeastheatingcooling.com"
                  className="flex items-start gap-2 text-slate-400 hover:text-white text-sm transition-colors break-all"
                >
                  <EmailIcon />
                  office@northeastheatingcooling.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-blue-200 text-sm">
                  <MapPinIcon />
                  Tampa, FL
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; 2024 North East Heating &amp; Cooling. All rights reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20" aria-hidden="true">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <span className="text-white/20" aria-hidden="true">|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
