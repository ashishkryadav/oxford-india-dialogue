import type { Metadata } from "next";
import { AvatarRow, H2, PageHero, PortraitCard } from "@/components/ui";
import { advisorsIndustry, advisorsProfessors, team } from "@/lib/data";

export const metadata: Metadata = { title: "Team & Advisors" };

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="People" title="Team & Advisors">
        A student-led initiative at the University of Oxford, guided by advisors from industry and the
        University&apos;s faculty.
      </PageHero>

      <section className="container-page flex flex-col gap-8 pb-20">
        <H2>Advisors — Industry</H2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-6 gap-y-8">
          {advisorsIndustry.map((a) => (
            <PortraitCard key={a.name} person={a} />
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-paper-soft">
        <div className="container-page flex flex-col gap-8 py-20">
          <div className="flex flex-col gap-2.5">
            <H2>Advisors — University of Oxford</H2>
            <div className="text-[15px] text-muted">
              Faculty across Saïd Business School, Blavatnik School of Government, Materials, History, Physics,
              Medicine, English and Theology.
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-7 gap-y-6">
            {advisorsProfessors.map((a) => (
              <AvatarRow key={a.name} person={a} size={76} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page flex flex-col gap-8 py-[88px]">
        <H2>Organising team</H2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-5 gap-y-7">
          {team.map((t) => (
            <div key={t.name} className="flex flex-col gap-2.5">
              <img src={t.photo} alt={t.name} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="text-[14.5px] leading-[1.25] font-semibold text-oxford">{t.name}</div>
              <div className="text-[13px] text-muted">{t.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
