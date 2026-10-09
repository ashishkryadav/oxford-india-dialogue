import Link from "next/link";
import type { Person } from "@/lib/data";

type LinkProps = { href: string; children: React.ReactNode; className?: string };

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

function SmartLink({ href, className, children }: LinkProps) {
  return isExternal(href) ? (
    <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PrimaryButton({ href, children, className = "" }: LinkProps) {
  return (
    <SmartLink
      href={href}
      className={`bg-oxford px-[26px] py-3.5 text-[15px] font-medium text-white no-underline hover:bg-oxford-hover hover:text-white ${className}`}
    >
      {children}
    </SmartLink>
  );
}

export function SecondaryButton({ href, children, className = "" }: LinkProps) {
  return (
    <SmartLink
      href={href}
      className={`border-[1.5px] border-oxford px-[26px] py-[13px] text-[15px] font-medium text-oxford no-underline hover:bg-paper-hover hover:text-oxford ${className}`}
    >
      {children}
    </SmartLink>
  );
}

export function ArrowLink({ href, children, accent = "saffron" }: LinkProps & { accent?: "saffron" | "green" }) {
  return (
    <SmartLink
      href={href}
      className={`border-b-2 pb-[3px] font-medium no-underline ${accent === "green" ? "border-india-green" : "border-saffron"}`}
    >
      {children}
    </SmartLink>
  );
}

export function Eyebrow({ children, className = "text-rust" }: { children: React.ReactNode; className?: string }) {
  return <div className={`eyebrow ${className}`}>{children}</div>;
}

export function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`m-0 font-serif text-[clamp(30px,3vw,42px)] leading-[1.1] font-medium text-oxford text-balance ${className}`}>
      {children}
    </h2>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  className = "pt-[72px] pb-14",
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page flex flex-col gap-4 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="m-0 font-serif text-[clamp(40px,5vw,64px)] leading-[1.05] font-medium text-oxford">{title}</h1>
      {children && <p className="m-0 max-w-[640px] text-[17px] leading-[1.6] text-pretty text-body">{children}</p>}
    </section>
  );
}

/** Portrait card with a large serif name — speakers & industry advisors. */
export function PortraitCard({ person, muted = false }: { person: Person; muted?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={person.photo}
        alt={person.name}
        loading="lazy"
        className={`aspect-[4/5] w-full object-cover ${muted ? "grayscale-[.6]" : "saturate-[.9]"}`}
      />
      <div className="font-serif text-[22px] leading-[1.15] text-oxford">{person.name}</div>
      <div className="text-sm leading-[1.45] text-muted">{person.title}</div>
    </div>
  );
}

/** Square headshot with compact sans name — featured, past speakers, team. */
export function SquareCard({ person, imgClass = "saturate-[.9]" }: { person: Person; imgClass?: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <img src={person.photo} alt={person.name} loading="lazy" className={`aspect-square w-full object-cover ${imgClass}`} />
      <div className="text-[15px] leading-[1.2] font-semibold text-oxford">{person.name}</div>
      <div className="text-[13px] leading-[1.4] text-muted">{person.title}</div>
    </div>
  );
}

/** Round avatar beside name — moderators & university advisors. */
export function AvatarRow({ person, size = 84 }: { person: Person; size?: number }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={person.photo}
        alt={person.name}
        loading="lazy"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <div className="text-base font-semibold text-oxford">{person.name}</div>
        <div className="text-[13.5px] leading-[1.4] text-muted">{person.title}</div>
      </div>
    </div>
  );
}

export function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`-mb-px cursor-pointer border-b-[3px] px-[22px] py-3.5 text-[15px] ${
        active ? "border-saffron font-semibold text-oxford" : "border-transparent text-muted hover:text-oxford"
      }`}
    >
      {children}
    </button>
  );
}
