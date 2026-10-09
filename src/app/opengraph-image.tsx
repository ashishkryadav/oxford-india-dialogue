import { ImageResponse } from "next/og";
import { EVENT_DATES } from "@/lib/data";
import { logoMarkSvg } from "@/lib/logo";

export const alt = "Oxford India Dialogue — India and the New World Order";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#002147";
const PAPER = "#f7f3eb";

// Satori needs raw TTF/OTF data; Google Fonts serves it when no modern user agent is sent.
async function loadGoogleFont(family: string, text: string) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
  ).text();
  const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`Font not found: ${family}`);
  return (await fetch(url)).arrayBuffer();
}

export default async function OpengraphImage() {
  const tagline = "India and the New World Order";
  const details = `${EVENT_DATES} · Saïd Business School, Oxford`;

  let fonts: { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" | "italic" }[] = [];
  try {
    fonts = [
      { name: "Garamond", data: await loadGoogleFont("EB+Garamond:wght@600", "OXFORD INDIA"), weight: 600, style: "normal" },
      { name: "Garamond", data: await loadGoogleFont("EB+Garamond", "DIALOGUE"), weight: 400, style: "normal" },
      { name: "Garamond", data: await loadGoogleFont("EB+Garamond:ital@1", tagline), weight: 400, style: "italic" },
      { name: "Sans", data: await loadGoogleFont("Instrument+Sans", details + "FORMERLY OXFORD INDIA FORUM"), weight: 400, style: "normal" },
    ];
  } catch {
    // Fall back to the built-in font rather than failing the build.
  }

  const logo = `data:image/svg+xml;base64,${Buffer.from(logoMarkSvg(NAVY)).toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: PAPER, color: NAVY }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 56, padding: "0 90px" }}>
          {/* eslint-disable-next-line jsx-a11y/alt-text -- Satori image, not DOM */}
          <img src={logo} width={300} height={300} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Garamond", fontWeight: 600, fontSize: 76, letterSpacing: "0.14em", lineHeight: 1 }}>
              OXFORD INDIA
            </div>
            <div style={{ fontFamily: "Garamond", fontSize: 46, letterSpacing: "0.42em", lineHeight: 1, marginTop: 14 }}>
              DIALOGUE
            </div>
            <div style={{ display: "flex", height: 5, width: 560, marginTop: 30 }}>
              <div style={{ flex: 1, background: "#FF9933" }} />
              <div style={{ flex: 1, background: "#e6dfd0" }} />
              <div style={{ flex: 1, background: "#138808" }} />
            </div>
            <div style={{ fontFamily: "Garamond", fontStyle: "italic", fontSize: 40, color: "#c2410c", marginTop: 30 }}>
              {tagline}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: NAVY,
            color: PAPER,
            padding: "26px 90px",
            fontFamily: "Sans",
            fontSize: 26,
          }}
        >
          <div style={{ whiteSpace: "nowrap" }}>{details}</div>
          <div style={{ fontSize: 18, letterSpacing: "0.14em", color: "#c9d1dd", whiteSpace: "nowrap" }}>FORMERLY OXFORD INDIA FORUM</div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
