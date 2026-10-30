export function CountryFlag({ code }: { code: string }) {
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
