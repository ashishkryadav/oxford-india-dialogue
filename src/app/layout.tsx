import type { Metadata } from "next";
import { EB_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Two days at Saïd Business School, University of Oxford, bringing together leaders in academia, business, policy and thought leadership to examine India's place in a shifting global order.";

export const metadata: Metadata = {
  // Social crawlers need absolute image URLs.
  metadataBase: new URL("https://www.oxfordindiadialogue.com"),
  title: {
    default: "Oxford India Dialogue — India and the New World Order",
    template: "%s · Oxford India Dialogue",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Oxford India Dialogue",
    title: "Oxford India Dialogue — India and the New World Order",
    description,
    url: "/",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
