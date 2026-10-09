import Link from "next/link";
import { LogoMark, LogoWordmark, TricolorBar } from "./Logo";
import { CONTACT_EMAIL, REGISTER_URL } from "@/lib/data";

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Agenda", href: "/agenda" },
  { label: "Team & Advisors", href: "/team" },
  { label: "Gallery & News", href: "/gallery" },
  { label: "FAQs & Contact", href: "/contact" },
];

const FOLLOW = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/oxford-indiaforum/" },
  { label: "Instagram", href: "https://www.instagram.com/oxfordindiaforum" },
  { label: "Register interest", href: REGISTER_URL },
];

const link = "text-paper no-underline hover:text-saffron";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow mb-1.5 text-saffron">{children}</div>;
}

export default function Footer() {
  return (
    <footer className="bg-oxford text-paper">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 pt-16 pb-10">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center gap-3 text-white">
            <LogoMark size={56} className="shrink-0" />
            <LogoWordmark large />
          </div>
          <p className="m-0 max-w-[320px] text-sm leading-relaxed text-mist">
            A platform to inspire, collaborate and showcase the India growth story — at the University of Oxford.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <ColumnHeading>Explore</ColumnHeading>
          {EXPLORE.map((l) => (
            <Link key={l.href} href={l.href} className={link}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 text-sm leading-normal">
          <ColumnHeading>Venue</ColumnHeading>
          <address className="not-italic">
            Saïd Business School
            <br />
            University of Oxford
            <br />
            Park End Street, Oxford OX1 1HP
          </address>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${link} break-all underline underline-offset-[3px]`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <ColumnHeading>Follow</ColumnHeading>
          {FOLLOW.map((l) => (
            <a key={l.href} href={l.href} className={link} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <TricolorBar />

      <div className="container-page flex flex-wrap justify-between gap-4 py-[18px] text-[12.5px] text-fog">
        <div>© 2027 Oxford India Dialogue</div>
        <div className="flex gap-5">
          {["Cookie Policy", "Privacy Policy", "Terms of Use"].map((t) => (
            <a key={t} href="#" className="text-fog no-underline hover:text-paper">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
