"use client";

import { CONTACT_EMAIL } from "@/lib/data";

const field =
  "w-full border border-oxford-line bg-oxford-input px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-mist/70 focus:border-saffron";

// No backend yet: submitting opens the visitor's mail client with the message pre-filled.
export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Oxford India Dialogue enquiry — ${get("name")}${get("organisation") ? `, ${get("organisation")}` : ""}`;
    const body = `${get("message")}\n\n${get("name")}\n${get("email")}\n${get("organisation")}`.trim();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3.5">
        <input name="name" required placeholder="Full name" aria-label="Full name" className={field} />
        <input name="email" type="email" required placeholder="Email" aria-label="Email" className={field} />
      </div>
      <input name="organisation" placeholder="Organisation" aria-label="Organisation" className={field} />
      <textarea name="message" required rows={5} placeholder="Message" aria-label="Message" className={`${field} resize-y`} />
      <button
        type="submit"
        className="mt-3.5 cursor-pointer self-start bg-saffron px-[26px] py-3.5 text-[15px] font-semibold text-oxford hover:bg-saffron-hover"
      >
        Send message
      </button>
    </form>
  );
}
