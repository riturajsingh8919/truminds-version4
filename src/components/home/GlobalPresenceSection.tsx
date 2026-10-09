import { ArrowUpRight, Globe2, Layers3, Move, Network, UsersRound } from "lucide-react";
import { DraggableGlobe } from "@/components/home/DraggableGlobe";
import { section, shell, title } from "@/lib/site-styles";

const capabilities = [
  {
    icon: Globe2,
    title: "Global perspective",
    description: "Research experience that travels across markets and study settings.",
  },
  {
    icon: Layers3,
    title: "Phase I–IV",
    description: "Support through every stage of clinical development.",
  },
  {
    icon: UsersRound,
    title: "Connected teams",
    description: "Clinical, data and specialist expertise working together.",
  },
  {
    icon: Network,
    title: "Flexible delivery",
    description: "Full-service and embedded support shaped to each program.",
  },
];

export function GlobalPresenceSection() {
  return (
    <section
      id="global-presence"
      aria-labelledby="global-presence-title"
      className={`${section} relative overflow-hidden border-t border-[#e5eef0] bg-white`}
    >
      <div className={`${shell} relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-18`}>
        <div className="relative z-10">
          <h2 id="global-presence-title" className={title}>
            Global <span className="text-[#0068a5]">presence.</span>
          </h2>
          <p className="mt-6 max-w-145 text-lg leading-[1.65] text-[#526d7d]">
            Bringing people, science and technology together to support clinical
            research wherever it moves next.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="group relative min-h-49 overflow-hidden rounded-[1.5rem] border border-[#dce9ed] bg-[#f3f8f9] p-6 transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:border-[#b8d9e2] hover:bg-white hover:shadow-[0_20px_45px_rgba(14,57,78,.10)] motion-reduce:transition-none"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl border border-[#d1e8ed] bg-white text-[#0068a5] transition-colors duration-500 group-hover:bg-[#0068a5] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-[#90b9c5] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-.035em] text-[#0b2c40]">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-base leading-[1.55] text-[#5a7484]">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative isolate mx-auto flex w-full max-w-155 flex-col items-center lg:mx-0 lg:justify-self-end">
          <div className="pointer-events-none absolute inset-x-[6%] top-[14%] -z-10 aspect-square rounded-full bg-[radial-gradient(circle,rgba(207,236,239,.62)_0%,rgba(238,248,249,.47)_43%,transparent_70%)] blur-2xl" />
          <DraggableGlobe />
          <div className="-mt-2 inline-flex items-center gap-2 rounded-full border border-[#dbe9ed] bg-white/85 px-4 py-2 text-sm font-medium text-[#527486] shadow-[0_10px_30px_rgba(14,57,78,.06)] backdrop-blur-sm sm:-mt-5">
            <Move size={15} strokeWidth={1.7} aria-hidden="true" />
            Drag to explore connected markets
          </div>
        </div>
      </div>
    </section>
  );
}
