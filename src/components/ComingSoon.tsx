import { LogoMark, TricolorBar } from "./Logo";

export default function ComingSoon() {
  return (
    <main className="flex min-h-dvh flex-col bg-paper text-oxford">
      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <LogoMark size={168} className="h-auto w-[clamp(120px,22vw,168px)]" />
        <div className="flex flex-col items-center gap-3 font-serif">
          <h1 className="m-0 text-[clamp(30px,6vw,56px)] leading-none font-semibold tracking-[.14em]">
            OXFORD INDIA
          </h1>
          <div className="text-[clamp(18px,3.4vw,32px)] leading-none tracking-[.42em]">DIALOGUE</div>
        </div>
        <TricolorBar className="h-[3px] w-[min(320px,70vw)]" middle="bg-rule" />
        <p className="eyebrow m-0 text-muted">Coming soon</p>
      </div>
    </main>
  );
}
