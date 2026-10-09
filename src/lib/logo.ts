// 24 Ashoka Chakra spokes radiating from the dome's hub.
export const SPOKES = Array.from({ length: 24 }, (_, i) => {
  const a = (i * 15 * Math.PI) / 180;
  const pt = (r: number) => `${(60 + Math.cos(a) * r).toFixed(2)} ${(56 + Math.sin(a) * r).toFixed(2)}`;
  return `M${pt(6.8)}L${pt(30.6)}`;
}).join("");

/** Standalone SVG markup of the emblem, for contexts that can't render the React component (e.g. OG images). */
export function logoMarkSvg(color = "#002147") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><clipPath id="c"><rect width="120" height="56"/></clipPath></defs><g clip-path="url(#c)"><circle cx="60" cy="56" r="34" fill="none" stroke="${color}" stroke-width="3.5"/><path d="${SPOKES}" stroke="${color}" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="60" cy="56" r="6" fill="#FF9933"/></g><rect x="26" y="54" width="68" height="3.5" fill="${color}"/><path d="M36 61v23M44 61v23M52 61v23M60 61v23M68 61v23M76 61v23M84 61v23" stroke="${color}" stroke-width="3" stroke-linecap="round"/><rect x="20" y="86" width="80" height="4" fill="${color}"/><rect x="14" y="92" width="92" height="4" fill="#138808"/><rect x="56" y="14" width="8" height="8" fill="${color}"/><path d="M54 14a6 6 0 0 1 12 0z" fill="${color}"/><path d="M60 8v-4" stroke="${color}" stroke-width="2"/><circle cx="60" cy="3" r="1.6" fill="${color}"/></svg>`;
}
