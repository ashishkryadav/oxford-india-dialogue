import type { Metadata } from "next";
import AgendaTabs from "@/components/AgendaTabs";
import { ArrowLink, PageHero, PrimaryButton } from "@/components/ui";
import { REGISTER_URL } from "@/lib/data";

export const metadata: Metadata = { title: "Programme" };

export default function AgendaPage() {
  return (
    <>
      <PageHero eyebrow="Saïd Business School · Oxford" title="Programme" className="pt-[72px] pb-10">
        A platform to inspire, collaborate and showcase the India growth story. Indicative programme based on the
        previous edition — the 2027 sessions will be confirmed in spring 2027.
      </PageHero>

      <section className="container-page flex flex-col gap-10 pb-24">
        <AgendaTabs />
        <div className="flex flex-wrap items-center gap-3.5 pt-3">
          <PrimaryButton href={REGISTER_URL}>Register interest</PrimaryButton>
          <ArrowLink href="/speakers">Meet the speakers →</ArrowLink>
        </div>
      </section>
    </>
  );
}
