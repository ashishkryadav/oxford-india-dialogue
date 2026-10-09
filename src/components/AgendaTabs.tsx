"use client";

import { useState } from "react";
import { TabButton } from "./ui";
import { agendaDay1, agendaDay2 } from "@/lib/data";

const DAYS = [
  { label: "Day 1 · Saturday 26 June", sessions: agendaDay1 },
  { label: "Day 2 · Sunday 27 June", sessions: agendaDay2 },
];

export default function AgendaTabs() {
  const [day, setDay] = useState(0);
  const { sessions } = DAYS[day];

  return (
    <>
      <div className="flex overflow-x-auto border-b border-rule-strong" role="tablist">
        {DAYS.map((d, i) => (
          <TabButton key={d.label} active={day === i} onClick={() => setDay(i)}>
            {d.label}
          </TabButton>
        ))}
      </div>

      {day === 1 && (
        <div className="flex max-w-[760px] flex-col gap-3 border border-rule bg-paper-soft p-7">
          <div className="font-serif text-[26px] text-oxford">Day 2 sessions to be announced</div>
          <p className="m-0 text-base leading-[1.6] text-body">
            The second day extends the Dialogue with closed-door roundtables and the evening programme below.
          </p>
        </div>
      )}

      <ol className="m-0 flex list-none flex-col p-0" role="tabpanel">
        {sessions.map((s) => (
          <li
            key={s.time}
            className={`grid grid-cols-1 gap-2 border-b border-rule-strong sm:grid-cols-[minmax(120px,160px)_1fr] sm:gap-6 ${
              s.isBreak ? "py-4 opacity-70" : "py-[26px]"
            }`}
          >
            <div className="text-sm font-medium tracking-[.02em] text-oxford tabular-nums">{s.time}</div>
            <div className="flex flex-col gap-2">
              {!s.isBreak && <div className="text-[11.5px] tracking-[.16em] text-rust uppercase">{s.kind}</div>}
              <div
                className={`leading-[1.25] text-pretty text-oxford ${s.isBreak ? "text-[15px]" : "font-serif text-2xl"}`}
              >
                {s.title}
              </div>
              {s.people && <div className="text-[14.5px] leading-normal text-muted">{s.people}</div>}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
