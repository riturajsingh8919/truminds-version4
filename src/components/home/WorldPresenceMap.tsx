import { CountryFlag } from "@/components/common/CountryFlag";
import { contactOffices as offices } from "@/lib/contact";

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

export function WorldPresenceMap({ showOffices = true }: { showOffices?: boolean }) {
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

      {showOffices && <div className="border-t border-white/12 px-5 py-4 sm:px-7 sm:py-5">
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
      </div>}
    </div>
  );
}
