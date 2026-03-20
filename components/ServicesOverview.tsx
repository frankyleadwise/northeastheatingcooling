import Link from "next/link";

const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const HomeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.75}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.75}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
    />
  </svg>
);

const residentialServices = [
  {
    label: "Residential HVAC Repair",
    href: "/residential/hvac-service-tampa",
  },
  {
    label: "Residential AC Installation",
    href: "/residential/hvac-installation-tampa-fl",
  },
  {
    label: "Residential Heating Repair",
    href: "/residential/hvac-service-tampa",
  },
  {
    label: "Air Duct Repair",
    href: "/residential/air-duct-repair-tampa",
  },
  {
    label: "Exhaust Fan Repair",
    href: "/residential/exhaust-fan-repair-tampa",
  },
  {
    label: "Water Heater Repair",
    href: "/residential/water-heater-repair-tampa",
  },
];

const commercialServices = [
  {
    label: "Commercial HVAC Installation",
    href: "/commercial/hvac-installation-tampa-fl",
  },
  {
    label: "Commercial HVAC Service",
    href: "/commercial/hvac-service-tampa",
  },
  {
    label: "Commercial Air Duct Repair",
    href: "/commercial/air-duct-repair-tampa",
  },
  {
    label: "Commercial Exhaust Fan Repair",
    href: "/commercial/exhaust-fan-repair-tampa",
  },
  {
    label: "Commercial Water Heater Repair",
    href: "/commercial/water-heater-repair-tampa",
  },
];

interface ServiceColumnProps {
  title: string;
  icon: React.ReactNode;
  services: { label: string; href: string }[];
  ctaHref: string;
  ctaLabel: string;
}

function ServiceColumn({
  title,
  icon,
  services,
  ctaHref,
  ctaLabel,
}: ServiceColumnProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {/* Column header */}
      <div className="bg-blue-700 px-6 py-5 flex items-center gap-3">
        <span className="text-blue-200">{icon}</span>
        <h3 className="text-white font-bold text-xl">{title}</h3>
      </div>

      {/* Service list */}
      <ul className="flex-1 divide-y divide-gray-100">
        {services.map((service) => (
          <li key={service.href + service.label}>
            <Link
              href={service.href}
              className="flex items-center justify-between gap-3 px-6 py-4 text-gray-700 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 group"
            >
              <span>{service.label}</span>
              <span className="text-blue-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-150">
                <ArrowRightIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Column CTA */}
      <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
        <Link
          href={ctaHref}
          className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors duration-150 shadow-sm hover:shadow-md"
        >
          {ctaLabel}
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Residential &amp; Commercial HVAC Solutions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From single-family homes to large commercial facilities, North East
            Heating &amp; Cooling provides comprehensive HVAC services across the
            entire Tampa Bay area.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceColumn
            title="Residential Services"
            icon={<HomeIcon />}
            services={residentialServices}
            ctaHref="/residential"
            ctaLabel="View All Residential Services"
          />
          <ServiceColumn
            title="Commercial Services"
            icon={<BuildingIcon />}
            services={commercialServices}
            ctaHref="/commercial"
            ctaLabel="View All Commercial Services"
          />
        </div>

        {/* Bottom trust note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Not sure which service you need?{" "}
          <Link
            href="/contact"
            className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-2"
          >
            Contact us for a free diagnosis
          </Link>{" "}
          and we&apos;ll point you in the right direction.
        </p>
      </div>
    </section>
  );
}
