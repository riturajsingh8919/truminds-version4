import { DraggableGlobe } from "@/components/home/DraggableGlobe";

const markets = [
  { name: "United States", x: 23.1, y: 32.8 },
  { name: "Canada", x: 29.9, y: 23.7 },
  { name: "United Kingdom", x: 49.9, y: 21.4 },
  { name: "India", x: 71.6, y: 42.8 },
];

const routes = [
  "M231 164 Q365 78 499 107",
  "M299 119 Q390 68 499 107",
  "M499 107 Q640 60 716 214",
];

export function WorldPresenceMap() {
  return (
    <div
      className="relative isolate mx-auto w-full max-w-180 overflow-hidden rounded-[1.75rem] border border-[#d8e9ed] bg-[linear-gradient(145deg,#f8fcfd_0%,#edf7f9_52%,#e3f1f5_100%)] shadow-[0_24px_60px_rgba(13,65,85,.08)]"
      aria-label="Animated globe with a world map marking the United States, Canada, the United Kingdom and India"
    >
      <div className="pointer-events-none absolute -top-30 -right-30 size-130 rounded-full bg-[#c5e9f0]/45 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-100 rounded-full bg-white/80 blur-3xl" aria-hidden="true" />

      <div className="relative z-20 flex items-center justify-between gap-3 px-5 pt-5 sm:px-7 sm:pt-6">
        <span className="text-[11px] font-bold tracking-[.19em] text-[#0068a5] uppercase sm:text-xs">
          Connected across borders
        </span>
        <span className="rounded-full border border-[#c5e4ea] bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-[#356b7c] sm:text-xs">
          4 locations
        </span>
      </div>

      <div className="relative h-137 sm:h-112">
        <div className="absolute top-84 left-0 z-10 w-full sm:top-30 sm:-left-[4%] sm:w-[60%]">
          <div className="relative aspect-[2/1] w-full" aria-label="World map with four marked countries">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse,rgba(142,206,218,.25),transparent_68%)]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat opacity-45 brightness-75"
              style={{ backgroundImage: "url('/images/maps/world-land.svg')" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#8bbdcc_0%,#b9dce5_65%,#d6e9ee_100%)] opacity-90"
              style={{
                WebkitMaskImage: "url('/images/maps/world-land.svg')",
                maskImage: "url('/images/maps/world-land.svg')",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }}
              aria-hidden="true"
            />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              {routes.map((route, index) => (
                <path
                  key={route}
                  className="map-route-flow"
                  d={route}
                  stroke="#078fa8"
                  strokeWidth="2"
                  strokeDasharray="3 10"
                  strokeLinecap="round"
                  opacity=".7"
                  style={{ animationDelay: `${index * -1.5}s` }}
                />
              ))}
            </svg>
            {markets.map((market, index) => (
              <button
                key={market.name}
                type="button"
                aria-label={market.name}
                className="group absolute z-20 grid size-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] sm:size-9"
                style={{ left: `${market.x}%`, top: `${market.y}%` }}
              >
                <span
                  className="map-ripple absolute size-6 rounded-full border border-[#0095a9]/80 bg-[#18b3c1]/20 motion-reduce:animate-none sm:size-7"
                  style={{ animationDelay: `${index * 220}ms` }}
                  aria-hidden="true"
                />
                <span
                  className="map-ripple absolute size-6 rounded-full border border-[#0095a9]/70 bg-[#18b3c1]/15 motion-reduce:animate-none sm:size-7"
                  style={{ animationDelay: `${index * 220 + 900}ms` }}
                  aria-hidden="true"
                />
                <span className="relative size-2.5 rounded-full border-2 border-white bg-[#007fa2] shadow-[0_0_0_3px_rgba(0,127,162,.2)] transition-transform duration-300 group-hover:scale-125 group-focus:scale-125" aria-hidden="true" />
                <span className={`pointer-events-none absolute top-[calc(100%+4px)] z-30 -translate-y-1 whitespace-nowrap rounded-full border border-[#c8e4e9] bg-white px-3 py-1.5 text-xs font-semibold text-[#0a4058] opacity-0 shadow-[0_8px_20px_rgba(13,65,85,.14)] transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 motion-reduce:transition-none ${market.name === "India" ? "right-0" : "left-1/2 -translate-x-1/2"}`}>
                  {market.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute top-1 left-1/2 z-20 w-[min(90%,370px)] -translate-x-1/2 sm:top-4 sm:right-[-2%] sm:left-auto sm:w-[58%] sm:translate-x-0">
          <div className="pointer-events-none absolute inset-[10%] rounded-full bg-white/90 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-[7%] rounded-full border border-[#a8d7e3]/40" aria-hidden="true" />
          <DraggableGlobe />
        </div>
      </div>

      <div className="relative z-20 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-[#d8e9ed] bg-white/50 px-5 py-4 text-xs text-[#527587] sm:px-7 sm:text-sm">
        <span>Drag the globe to explore our connected markets</span>
        <span className="font-semibold text-[#0068a5]">US · Canada · UK · India</span>
      </div>
    </div>
  );
}
