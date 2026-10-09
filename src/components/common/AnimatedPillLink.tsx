import Link from "next/link";

type AnimatedPillLinkProps = {
  href: string;
  label: string;
  variant?: "dark" | "light";
  size?: "default" | "large";
};

// Button motion adapted from doniaskima's MIT-licensed Uiverse design.
export function AnimatedPillLink({
  href,
  label,
  variant = "dark",
  size = "default",
}: AnimatedPillLinkProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={`group relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 text-xs font-black tracking-[.07em] uppercase focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#008b9c] ${
        isDark
          ? "border-[#0068a5] bg-[#0068a5]"
          : "border-white bg-white"
      } ${size === "large" ? "min-h-14 px-7 py-3" : "min-h-11 px-6 py-2.5"}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-[-104%] left-[-60%] z-0 h-[102%] w-[130%] transform-[skew(30deg)_translateY(0)] transition-transform duration-300 ease-out group-hover:transform-[skew(30deg)_translateY(100%)] group-focus-visible:transform-[skew(30deg)_translateY(100%)] motion-reduce:transition-none ${isDark ? "bg-white" : "bg-[#0068a5]"}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-[102%] left-[30%] z-0 h-[102%] w-[130%] transform-[skew(30deg)_translateY(0)] transition-transform duration-300 ease-out group-hover:transform-[skew(30deg)_translateY(-102%)] group-focus-visible:transform-[skew(30deg)_translateY(-102%)] motion-reduce:transition-none ${isDark ? "bg-white" : "bg-[#0068a5]"}`}
      />
      <span className="relative z-10 block overflow-hidden">
        <span className={`block transition-transform duration-300 group-hover:translate-y-full group-focus-visible:translate-y-full motion-reduce:transition-none ${isDark ? "text-white" : "text-[#0068a5]"}`}>
          {label}
        </span>
        <span
          aria-hidden="true"
          className={`absolute inset-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none ${isDark ? "text-[#0068a5]" : "text-white"}`}
        >
          {label}
        </span>
      </span>
    </Link>
  );
}
