import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { Eyebrow, PageHero } from "@/components/ui";
import { CONTACT_EMAIL } from "@/lib/data";

export const metadata: Metadata = { title: "FAQs & Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Practical information" title="FAQs & Contact" className="pt-[72px] pb-12" />

      <section className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-16 pb-24">
        <FaqAccordion />

        <div className="flex flex-col gap-7 bg-oxford p-7 text-paper sm:p-10">
          <div className="flex flex-col gap-2.5">
            <Eyebrow className="text-saffron">Get in touch</Eyebrow>
            <h2 className="m-0 font-serif text-[34px] leading-[1.1] font-medium">Partnerships, speaking &amp; press</h2>
          </div>
          <ContactForm />
          <div className="border-t border-oxford-line pt-[22px] text-sm leading-[1.6] text-mist">
            Saïd Business School, University of Oxford
            <br />
            Park End Street, Oxford OX1 1HP
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-paper hover:text-saffron">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
