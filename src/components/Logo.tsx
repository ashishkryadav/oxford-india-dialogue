import { useId } from "react";
import { SPOKES } from "@/lib/logo";

/** Radcliffe Camera emblem whose dome doubles as the Ashoka Chakra. Inherits `color`. */
export function LogoMark({ size = 46, className }: { size?: number; className?: string }) {
  const clipId = useId();
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="120" height="56" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <circle cx="60" cy="56" r="34" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <path d={SPOKES} stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="60" cy="56" r="6" fill="#FF9933" />
      </g>
      <rect x="26" y="54" width="68" height="3.5" fill="currentColor" />
      <path
        d="M36 61v23M44 61v23M52 61v23M60 61v23M68 61v23M76 61v23M84 61v23"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="20" y="86" width="80" height="4" fill="currentColor" />
      <rect x="14" y="92" width="92" height="4" fill="#138808" />
      <rect x="56" y="14" width="8" height="8" fill="currentColor" />
      <path d="M54 14a6 6 0 0 1 12 0z" fill="currentColor" />
      <path d="M60 8v-4" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="3" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function LogoWordmark({ large = false }: { large?: boolean }) {
  return (
    <div className="flex flex-col gap-1 font-serif">
      <div className={`${large ? "text-[22px]" : "text-[21px]"} leading-none font-semibold tracking-[.14em]`}>
        OXFORD INDIA
      </div>
      <div className="text-[13px] leading-none tracking-[.42em]">DIALOGUE</div>
    </div>
  );
}

export function TricolorBar({ className = "h-[3px]", middle = "bg-paper" }: { className?: string; middle?: string }) {
  return (
    <div className={`flex ${className}`} aria-hidden="true">
      <div className="flex-1 bg-saffron" />
      <div className={`flex-1 ${middle}`} />
      <div className="flex-1 bg-india-green" />
    </div>
  );
}
