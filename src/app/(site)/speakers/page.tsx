import type { Metadata } from "next";
import { AvatarRow, Eyebrow, H2, PageHero, PortraitCard, SquareCard } from "@/components/ui";
import { EVENT_DATES, guestOfHonour, moderators, pastSpeakers, speakers } from "@/lib/data";

export const metadata: Metadata = { title: "Speakers & Moderators" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero eyebrow={`${EVENT_DATES} · India and the New World Order`} title="Speakers & Moderators">
        Leaders from government, industry, science and culture — confirmed from the previous edition and growing
        through 2026. Line-up subject to change.
      </PageHero>

      <section className="bg-oxford text-paper">
        <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-center gap-12 py-[72px]">
          <img
            src={guestOfHonour.photo}
            alt={guestOfHonour.name}
            className="aspect-[3/4] w-full max-w-[420px] object-cover"
          />
          <div className="flex flex-col gap-[18px]">
            <Eyebrow className="text-saffron">Guest of Honour</Eyebrow>
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] font-medium">
              {guestOfHonour.name}
            </h2>
            <div className="text-lg text-mist">{guestOfHonour.title}</div>
            <p className="m-0 max-w-[520px] text-[17px] leading-[1.65] text-pretty text-mist-soft">
              Spotlight session —{" "}
              <em className="font-serif text-[19px]">India @100: a developed, confident, compassionate nation</em>, in
              conversation with Vivek Agarwal, Tony Blair Institute for Global Change.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page flex flex-col gap-10 py-[88px]">
        <H2>Speakers</H2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-6 gap-y-9">
          {speakers.map((sp) => (
            <PortraitCard key={sp.name} person={sp} />
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-paper-soft">
        <div className="container-page flex flex-col gap-10 py-[88px]">
          <H2>Moderators</H2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-7">
            {moderators.map((m) => (
              <AvatarRow key={m.name} person={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page flex flex-col gap-10 py-[88px]">
        <div className="flex flex-col gap-3">
          <Eyebrow>2024 edition</Eyebrow>
          <H2>Past speakers</H2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-x-5 gap-y-7">
          {pastSpeakers.map((sp) => (
            <SquareCard key={sp.name} person={sp} imgClass="grayscale-[.6] transition hover:grayscale-0" />
          ))}
        </div>
      </section>
    </>
  );
}
