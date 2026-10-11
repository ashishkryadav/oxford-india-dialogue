import Link from "next/link";
import { TricolorBar } from "@/components/Logo";
import { ArrowLink, Eyebrow, PrimaryButton, SecondaryButton, SquareCard } from "@/components/ui";
import { EVENT_DATES, IMG, REGISTER_URL, gallery, guestOfHonour, news, partners, speakers } from "@/lib/data";

const GOALS = [
  { text: "Host the largest India-focused conference at a university in Europe", color: "text-saffron" },
  { text: "Drive collaboration between the University of Oxford and Indian businesses on research, technology and policy", color: "text-saffron" },
  { text: "Curate an impactful year-round speaker series featuring global thought leaders", color: "text-india-green" },
  { text: "Enable Indian companies to attract and integrate top global talent", color: "text-india-green" },
];

const TESTIMONIALS = [
  {
    quote: "A dynamic platform that showcases the India growth story, and highlights collaborations between the University of Oxford and Indian business leaders.",
    name: "Soumitra Dutta",
    role: "Dean, Saïd Business School",
    photo: `${IMG}advisors/dean-soumitra-dutta.jpg`,
  },
  {
    quote: "A pivotal platform to inspire, drive collaborations and showcase the India growth story.",
    name: "Sidharth Sethi",
    role: "Chairperson, Oxford India Dialogue",
    photo: `${IMG}founders/sidharth-sethi.jpg`,
  },
];

const SECTION_H2 = "m-0 font-serif text-[clamp(32px,3.4vw,46px)] leading-[1.1] font-medium text-oxford text-balance";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-12 pt-14 pb-10">
        <div className="flex flex-col gap-[26px]">
          <div className="flex items-center gap-3.5 text-[13px] tracking-[.18em] text-slate uppercase">
            <span className="h-0.5 w-7 bg-saffron" />
            Third edition · Oxford
          </div>
          <h1 className="m-0 font-serif text-[clamp(44px,5.6vw,76px)] leading-[1.02] font-medium tracking-[-.01em] text-oxford text-balance">
            India and the <em className="text-rust italic">New World Order</em>
          </h1>
          <dl className="m-0 flex flex-wrap gap-7 text-base leading-normal">
            <div className="flex flex-col gap-0.5">
              <dt className="text-xs tracking-[.16em] text-subtle uppercase">Dates</dt>
              <dd className="m-0 font-semibold text-oxford">{EVENT_DATES}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-xs tracking-[.16em] text-subtle uppercase">Venue</dt>
              <dd className="m-0 font-semibold text-oxford">Saïd Business School, University of Oxford</dd>
            </div>
          </dl>
          <p className="m-0 max-w-[540px] text-lg leading-[1.6] text-pretty text-body">
            Two days bringing together the biggest and brightest minds in academia, business, policy and thought
            leadership to examine India&apos;s place in a shifting global order.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <PrimaryButton href={REGISTER_URL}>Register interest</PrimaryButton>
            <SecondaryButton href="/agenda">View the programme</SecondaryButton>
          </div>
        </div>
        <div className="relative">
          <img
            src={`${IMG}about/about.jpg`}
            alt="Delegates at the Oxford India Dialogue"
            className="aspect-[4/5] max-h-[640px] w-full object-cover"
          />
          <TricolorBar className="absolute inset-x-0 bottom-0 h-1.5" />
          <div className="absolute top-5 left-5 bg-paper/95 px-3.5 py-2.5 text-[12.5px] tracking-[.14em] text-oxford uppercase">
            Formerly Oxford India Forum
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-rule bg-paper-soft">
        <div className="container-page flex flex-col gap-6 py-9">
          <Eyebrow className="text-center text-subtle">Our partners</Eyebrow>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] items-center gap-x-8 gap-y-6">
            {partners.map((pt) => (
              <img
                key={pt.name}
                src={pt.logo}
                alt={pt.name}
                loading="lazy"
                className="mx-auto max-h-11 max-w-full object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-14 py-24">
        <div className="flex flex-col gap-5">
          <Eyebrow>About the Dialogue</Eyebrow>
          <h2 className={SECTION_H2}>
            Empowering India&apos;s future: a global platform for collaboration and thought leadership
          </h2>
          <p className="m-0 text-[17px] leading-[1.65] text-pretty text-body">
            A dynamic platform bringing together leaders in academia, business, policy and thought leadership to share
            their expertise on India and its potential. The Dialogue envisions being the largest of its kind at a
            university in Europe — highlighting India&apos;s advancements and innovations, and connecting thought
            leaders, industry experts and students.
          </p>
        </div>
        <ol className="m-0 flex list-none flex-col border-t border-rule-strong p-0">
          {GOALS.map((g, i) => (
            <li
              key={g.text}
              className="grid grid-cols-[48px_1fr] gap-4 border-b border-rule-strong py-[22px] text-[17px] leading-normal"
            >
              <span className={`font-serif text-[26px] ${g.color}`}>{String(i + 1).padStart(2, "0")}</span>
              <span>{g.text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="bg-oxford text-paper">
        <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-12 py-[88px]">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="m-0 flex flex-col gap-7">
              <blockquote className="m-0 font-serif text-[clamp(24px,2.4vw,32px)] leading-[1.3] text-pretty italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3.5">
                <img src={t.photo} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-mist">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="container-page flex flex-col gap-12 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Voices</Eyebrow>
            <h2 className={SECTION_H2}>Guest of Honour &amp; Speakers</h2>
          </div>
          <ArrowLink href="/speakers">All speakers &amp; moderators →</ArrowLink>
        </div>
        <div className="grid items-start gap-10 md:grid-cols-3">
          <Link href="/speakers" className="flex flex-col gap-4 text-inherit no-underline hover:text-inherit">
            <img src={guestOfHonour.photo} alt={guestOfHonour.name} className="aspect-[3/4] w-full object-cover" />
            <div className="flex flex-col gap-1.5">
              <div className="text-xs tracking-[.16em] text-rust uppercase">Guest of Honour</div>
              <div className="font-serif text-[30px] leading-[1.1] text-oxford">{guestOfHonour.name}</div>
              <div className="text-[15px] text-slate">{guestOfHonour.title}</div>
            </div>
          </Link>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-5 gap-y-6 md:col-span-2">
            {speakers.slice(0, 8).map((sp) => (
              <SquareCard key={sp.name} person={sp} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery + news */}
      <section className="border-t border-rule bg-paper-soft">
        <div className="container-page flex flex-col gap-10 py-[88px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <Eyebrow>Past editions</Eyebrow>
              <h2 className={SECTION_H2}>Moments from Oxford</h2>
            </div>
            <ArrowLink href="/gallery" accent="green">
              Gallery &amp; news →
            </ArrowLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
            {gallery.slice(0, 4).map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-7 border-t border-rule-strong pt-8">
            {news.slice(0, 3).map((n) => (
              <a
                key={n.url}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2.5 text-inherit no-underline hover:text-inherit"
              >
                <div className="text-xs tracking-[.14em] text-subtle uppercase">
                  {n.source} · {n.date}
                </div>
                <div className="font-serif text-[22px] leading-[1.25] text-pretty text-oxford group-hover:text-rust">
                  {n.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page flex flex-col items-center gap-[22px] py-24 text-center">
        <h2 className="m-0 max-w-[720px] font-serif text-[clamp(34px,4vw,54px)] leading-[1.08] font-medium text-oxford text-balance">
          Join the conversation on India&apos;s next chapter
        </h2>
        <p className="m-0 max-w-[520px] text-[17px] text-body">{EVENT_DATES} · Saïd Business School, Oxford</p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <PrimaryButton href={REGISTER_URL}>Register interest</PrimaryButton>
          <SecondaryButton href="/contact">Partner with us</SecondaryButton>
        </div>
      </section>
    </>
  );
}
