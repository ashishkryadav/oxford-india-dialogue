"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col border-t border-rule-strong">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-rule-strong">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-5 py-[22px] text-left font-serif text-[23px] leading-[1.25] text-oxford"
            >
              <span>{f.q}</span>
              <span
                aria-hidden="true"
                className={`shrink-0 text-[26px] text-saffron transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p id={`faq-${i}`} className="m-0 pr-12 pb-6 text-base leading-[1.65] text-pretty text-body">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
