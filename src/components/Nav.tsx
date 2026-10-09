"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark, LogoWordmark } from "./Logo";
import { REGISTER_URL } from "@/lib/data";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Agenda", href: "/agenda" },
  { label: "Team", href: "/team" },
  { label: "Gallery & News", href: "/gallery" },
  { label: "FAQs & Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur-[10px]">
      <div className="container-page flex items-center justify-between gap-6 py-3.5">
        <Link href="/" className="flex items-center gap-3 text-oxford no-underline hover:text-oxford">
          <LogoMark size={46} className="shrink-0" />
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-[26px] lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-1.5 text-sm ${
                  active ? "border-saffron font-semibold text-oxford" : "border-transparent text-slate"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={REGISTER_URL}
            className="bg-oxford px-[18px] py-2.5 text-sm font-medium tracking-[.02em] text-white hover:bg-oxford-hover hover:text-white"
          >
            Register interest
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-6 bg-oxford transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-oxford transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-oxford transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-rule lg:hidden" aria-label="Main">
          <div className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`border-l-2 py-2.5 pl-3 text-[15px] ${
                    active ? "border-saffron font-semibold text-oxford" : "border-transparent text-slate"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={REGISTER_URL}
              className="mt-3 bg-oxford px-[18px] py-3 text-center text-sm font-medium text-white hover:bg-oxford-hover hover:text-white"
            >
              Register interest
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
