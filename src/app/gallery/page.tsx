import type { Metadata } from "next";
import GalleryTabs from "@/components/GalleryTabs";
import { Eyebrow, H2, PageHero } from "@/components/ui";
import { news } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery & News" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Past editions" title="Gallery & News" className="pt-[72px] pb-12" />

      <section className="container-page flex flex-col gap-7 pb-20">
        <GalleryTabs />
      </section>

      <section className="border-t border-rule bg-paper-soft">
        <div className="container-page flex flex-col gap-10 py-[88px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>In the news</Eyebrow>
            <H2>Conference highlights &amp; coverage</H2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-x-7 gap-y-9">
            {news.map((n) => (
              <a
                key={n.url}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3.5 text-inherit no-underline hover:text-inherit"
              >
                <img src={n.image} alt="" loading="lazy" className="aspect-video w-full object-cover" />
                <div className="text-xs tracking-[.14em] text-subtle uppercase">
                  {n.source} · {n.date}
                </div>
                <div className="font-serif text-[23px] leading-[1.25] text-pretty text-oxford group-hover:text-rust">
                  {n.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
