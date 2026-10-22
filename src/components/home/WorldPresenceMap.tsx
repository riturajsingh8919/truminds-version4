type FlagCode = "us" | "ca" | "in" | "gb";

type Office = {
  name: string;
  flag: FlagCode;
  address: string[];
};

const offices: Office[] = [
  {
    name: "Texas",
    flag: "us",
    address: ["14800 Quorum Dr, Suite 550", "Dallas, TX 75254"],
  },
  {
    name: "New Jersey",
    flag: "us",
    address: ["80 Cottontail Ln, Suite 451", "Somerset, NJ 08873"],
  },
  {
    name: "Canada",
    flag: "ca",
    address: ["1145 Midland Ave, Suite 9", "Toronto, Ontario, Canada, M1K 4H2."],
  },
  {
    name: "India",
    flag: "in",
    address: [
      "Plot No.13, H.No.2-48/13",
      "Telecom Nagar, Gachibowli",
      "Hyderabad, Telangana 500032.",
    ],
  },
  {
    name: "UK",
    flag: "gb",
    address: ["71-75 Shelton Street, Covent Garden", "London, WC2H 9JQ"],
  },
];

const mapMarkets = [
  { name: "United States", x: 23.1, y: 32.8 },
  { name: "Canada", x: 29.9, y: 23.7 },
  { name: "United Kingdom", x: 49.9, y: 21.4 },
  { name: "India", x: 71.6, y: 42.8 },
];

const routes = [
  "M231 164 Q365 22 499 107",
  "M299 119 Q390 29 499 107",
  "M499 107 Q629 45 716 214",
];

const landMask = {
  WebkitMaskImage: "url('/images/maps/world-land.svg')",
  maskImage: "url('/images/maps/world-land.svg')",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

function CountryFlag({ code }: { code: FlagCode }) {
  const className = "block h-6 w-9 rounded-[2px]";

  if (code === "us") {
    return (
      <svg viewBox="0 0 32 22" className={className} aria-hidden="true">
        <rect width="32" height="22" fill="#fff" />
        {Array.from({ length: 7 }, (_, index) => (
          <rect key={index} y={(index * 44) / 13} width="32" height={22 / 13} fill="#bf0a30" />
        ))}
        <rect width="13" height="11.85" fill="#21468b" />
        {Array.from({ length: 9 }, (_, row) =>
          Array.from({ length: row % 2 ? 5 : 6 }, (_, column) => (
            <circle
              key={`${row}-${column}`}
              cx={1.25 + column * 2.05 + (row % 2 ? 1.02 : 0)}
              cy={1.1 + row * 1.2}
              r=".32"
              fill="#fff"
            />
          )),
        )}
      </svg>
    );
  }

  if (code === "ca") {
    return (
      <svg viewBox="0 0 32 22" className={className} aria-hidden="true">
        <rect width="32" height="22" fill="#fff" />
        <path d="M0 0h7v22H0zm25 0h7v22h-7z" fill="#d80621" />
        <path
          d="m16 3 1.3 3.4 1.8-1.1-.5 2.4 2.5.3-1.8 2.1.7 1.7-3.2-.4-.3 5.1h-1l-.3-5.1-3.2.4.7-1.7-1.8-2.1 2.5-.3-.5-2.4 1.8 1.1z"
          fill="#d80621"
        />
      </svg>
    );
  }

  if (code === "in") {
    return (
      <svg viewBox="0 0 32 22" className={className} aria-hidden="true">
        <path d="M0 0h32v7.33H0z" fill="#ff9933" />
        <path d="M0 7.33h32v7.34H0z" fill="#fff" />
        <path d="M0 14.67h32V22H0z" fill="#138808" />
        <circle cx="16" cy="11" r="3" fill="none" stroke="#1a3c8a" strokeWidth=".7" />
        <circle cx="16" cy="11" r=".55" fill="#1a3c8a" />
        {Array.from({ length: 12 }, (_, index) => {
          const angle = (index * Math.PI) / 6;
          return (
            <line
              key={index}
              x1={16 + Math.cos(angle) * 1.1}
              y1={11 + Math.sin(angle) * 1.1}
              x2={16 + Math.cos(angle) * 2.7}
              y2={11 + Math.sin(angle) * 2.7}
              stroke="#1a3c8a"
              strokeWidth=".45"
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 22" className={className} aria-hidden="true">
      <rect width="32" height="22" fill="#012169" />
      <path d="M0 0 32 22M32 0 0 22" stroke="#fff" strokeWidth="5" />
      <path d="M0 0 32 22M32 0 0 22" stroke="#c8102e" strokeWidth="2" />
      <path d="M16 0v22M0 11h32" stroke="#fff" strokeWidth="8" />
      <path d="M16 0v22M0 11h32" stroke="#c8102e" strokeWidth="4" />
    </svg>
  );
}

export function WorldPresenceMap() {
  return (
    <div className="relative isolate mx-auto w-full max-w-180 overflow-hidden rounded-[1.75rem] border border-[#244660] bg-[#081d36] text-white shadow-[0_24px_60px_rgba(7,30,52,.16)]">
      <div
        role="group"
        aria-label="World map marking TruMinds markets in the United States, Canada, the United Kingdom and India"
        className="relative isolate aspect-[2/1] w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_27%,#153c5c_0%,#0a2441_50%,#071a32_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#285773,#173a58_58%,#214e69)] opacity-90" style={landMask} aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            ...landMask,
            backgroundImage: "radial-gradient(circle, rgba(154, 221, 232, .56) .7px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute top-[12%] left-[18%] size-32 rounded-full bg-[#55d5e8]/15 blur-3xl sm:size-48" aria-hidden="true" />
        <div className="pointer-events-none absolute top-[8%] left-[43%] size-24 rounded-full bg-[#55d5e8]/15 blur-3xl sm:size-40" aria-hidden="true" />

        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 500" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <defs>
            <filter id="presence-route-glow" x="-30%" y="-50%" width="160%" height="200%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          {routes.map((route, index) => (
            <g key={route}>
              <path d={route} stroke="#87eaf2" strokeWidth="7" opacity=".35" filter="url(#presence-route-glow)" />
              <path d={route} stroke="#a8eef2" strokeWidth="1.6" opacity=".6" />
              <path
                d={route}
                className="map-route-flow"
                stroke="#e5ffff"
                strokeWidth="1.5"
                strokeDasharray="3 16"
                strokeLinecap="round"
                opacity=".9"
                style={{ animationDelay: `${index * -1.25}s` }}
              />
            </g>
          ))}
        </svg>

        {mapMarkets.map((market, index) => (
          <button
            key={market.name}
            type="button"
            aria-label={market.name}
            className="group absolute z-10 grid size-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7f5f6] sm:size-11"
            style={{ left: `${market.x}%`, top: `${market.y}%` }}
          >
            <span className="map-ripple absolute size-7 rounded-full border border-[#9ceff4]/80 bg-[#6bd9e8]/15 motion-reduce:animate-none sm:size-8" style={{ animationDelay: `${index * 260}ms` }} aria-hidden="true" />
            <span className="map-ripple absolute size-7 rounded-full border border-[#9ceff4]/60 bg-[#6bd9e8]/10 motion-reduce:animate-none sm:size-8" style={{ animationDelay: `${index * 260 + 850}ms` }} aria-hidden="true" />
            <span className="relative size-3 rounded-full border-2 border-white bg-[#8feaf0] shadow-[0_0_12px_5px_rgba(117,232,241,.8)] transition-transform duration-300 group-hover:scale-125 group-focus-visible:scale-125" aria-hidden="true" />
            <span className="pointer-events-none absolute top-[calc(100%+5px)] left-1/2 z-20 -translate-x-1/2 -translate-y-1 whitespace-nowrap rounded-lg border border-[#92dce7]/45 bg-[#e9fbfc] px-3 py-2 text-lg font-medium text-[#09273c] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,.28)] transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 motion-reduce:transition-none">
              {market.name}
            </span>
          </button>
        ))}
      </div>

      <div className="border-t border-white/12 px-5 py-4 sm:px-7 sm:py-5">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
          <h3 className="text-xl font-semibold text-white">Our locations</h3>
          <span className="text-lg font-medium text-[#aed0de]">5 offices · 4 countries</span>
        </div>
        <ul className="grid sm:grid-cols-2 sm:gap-x-6">
          {offices.map((office) => (
            <li key={office.name} className="min-w-0 border-t border-white/12 py-3 sm:last:col-span-2 sm:last:pb-0">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-10 shrink-0 place-items-center rounded border border-white/20 bg-white/8">
                  <CountryFlag code={office.flag} />
                </span>
                <h4 className="text-lg font-semibold leading-tight text-white">{office.name}</h4>
              </div>
              <address className="mt-1 block break-words text-lg font-medium leading-snug not-italic text-[#c2dce6]">
                {office.address.join(" ")}
              </address>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
