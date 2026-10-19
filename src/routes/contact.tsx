import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { club } from "@/lib/club";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Call Leon Reed at 208-423-4788 or write P.O. Box 6027, Twin Falls, ID 83303-6027. The club’s Facebook page is public.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Leon answers the phone.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            No public email turned up for the club. A form on this page cannot deliver a message, so it will not pretend to.
          </p>
        </div>
      </header>

      <section className="wrap grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <p>
            <span className="block text-sm font-semibold uppercase tracking-widest text-muted">Phone</span>
            <a className="font-display text-3xl text-forest underline decoration-brass decoration-2 underline-offset-4" href={`tel:${club.phoneTel}`}>
              {club.phoneDisplay}
            </a>
          </p>
          <p>
            <span className="block text-sm font-semibold uppercase tracking-widest text-muted">Mail</span>
            <span className="text-lg">
              {club.legalName}
              <br />
              {club.mailing[0]}
              <br />
              {club.mailing[1]}
            </span>
          </p>
          <p>
            <span className="block text-sm font-semibold uppercase tracking-widest text-muted">Facebook</span>
            <a className="text-lg font-semibold text-forest underline decoration-brass underline-offset-4" href={club.facebook}>
              {club.facebookName}
            </a>
          </p>
        </div>
        <NoteCard />
      </section>
    </main>
  );
}

function NoteCard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [ready, setReady] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = [
      `Message for ${club.contact}, ${club.name}.`,
      name.trim() ? `From: ${name.trim()}` : "From: (name not given)",
      phone.trim() ? `Callback: ${phone.trim()}` : "Callback: (none given)",
      "",
      note.trim() || "(no note)",
    ].join("\n");
    setReady(text);
    void navigator.clipboard?.writeText(text).catch(() => undefined);
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-cream p-6">
      <h2 className="font-display text-2xl text-forest">Draft a note, then call</h2>
      <p className="mt-2 text-sm text-muted">
        This copies the note onto your phone or computer. It is not sent anywhere.
      </p>
      <label className="mt-5 block text-sm font-semibold" htmlFor="name">
        Your name
      </label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="mt-1 w-full border border-line bg-parchment px-3 py-3 text-ink"
        autoComplete="name"
      />
      <label className="mt-4 block text-sm font-semibold" htmlFor="phone">
        Your phone
      </label>
      <input
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        className="mt-1 w-full border border-line bg-parchment px-3 py-3 text-ink"
        autoComplete="tel"
        inputMode="tel"
      />
      <label className="mt-4 block text-sm font-semibold" htmlFor="note">
        What you want to ask
      </label>
      <textarea
        id="note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
        rows={5}
        className="mt-1 w-full border border-line bg-parchment px-3 py-3 text-ink"
      />
      <button type="submit" className="mt-5 inline-flex min-h-11 items-center bg-forest px-5 font-semibold text-cream hover:bg-rust">
        Copy my note
      </button>
      {ready ? (
        <pre className="mt-5 whitespace-pre-wrap border border-line bg-parchment p-4 text-sm text-ink">{ready}</pre>
      ) : null}
    </form>
  );
}
