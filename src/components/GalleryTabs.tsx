"use client";

import { useState } from "react";
import { TabButton } from "./ui";
import { gallery, videos } from "@/lib/data";

export default function GalleryTabs() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");

  return (
    <>
      <div className="flex border-b border-rule-strong" role="tablist">
        <TabButton active={tab === "photos"} onClick={() => setTab("photos")}>
          Event photos
        </TabButton>
        <TabButton active={tab === "videos"} onClick={() => setTab("videos")}>
          Event videos
        </TabButton>
      </div>

      {tab === "photos" ? (
        <div
          role="tabpanel"
          className="grid grid-flow-dense auto-rows-[220px] grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-3"
        >
          {gallery.map((g, i) => (
            <img
              key={g.src}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className={`h-full w-full object-cover ${i % 7 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            />
          ))}
        </div>
      ) : (
        <div role="tabpanel" className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {videos.map((v) => (
            <a
              key={v.url}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex aspect-[16/10] flex-col justify-between gap-3 bg-oxford p-[22px] text-paper no-underline hover:bg-oxford-hover hover:text-paper"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-saffron text-[13px] text-saffron">
                ▶
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-serif text-2xl leading-[1.1]">{v.name}</div>
                <div className="text-[13px] text-mist">Watch on YouTube</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
