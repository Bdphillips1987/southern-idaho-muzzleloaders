import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CallLeon, ExternalLink, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Call Leon Reed at 208-423-4788. Mail: P.O. Box 6027, Twin Falls, ID 83303-6027. Southern Idaho Muzzleloaders, Magic Valley.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <PageHeader
        kicker="Contact"
        title="Leon answers the phone."
        lede="Call, or write the box. The note on this page is for you to read from. It copies to your clipboard. It is not sent."
      >
        <a href={`tel:${club.phoneTel}`} className="btn btn-rust">
          Try it free: call Leon
        </a>
      </PageHeader>

      <section className="wrap grid gap-10 py-16 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <p>
            <span className="kicker">Phone</span>
            <a className="mt-2 block font-display text-4xl text-forest underline decoration-brass decoration-2 underline-offset-4" href={`tel:${club.phoneTel}`}>
              {club.phoneDisplay}
            </a>
            <span className="mt-1 block text-muted">{club.contact}</span>
          </p>
          <p>
            <span className="kicker">Mail</span>
            <span className="mt-2 block text-lg">
              {club.legalName}
              <br />
              {club.mailing[0]}
              <br />
              {club.mailing[1]}
            </span>
          </p>
          <p>
            <span className="kicker">Facebook</span>
            <span className="mt-2 block">
              <ExternalLink href={club.facebook}>{club.facebookName}</ExternalLink>
            </span>
          </p>
          <p className="text-muted">
            Shooting is in Shoshone. The box is in Twin Falls. Both are the Magic Valley. No street address is published.
          </p>
        </div>
        <NoteCard />
      </section>

      <CallLeon />
    </main>
  );
}

function NoteCard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [ready, setReady] = useState("");
  const [copied, setCopied] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = [
      `Message for ${club.contact}, ${club.name}.`,
      name.trim() ? `From: ${name.trim()}` : "From: (name not given)",
      phone.trim() ? `Callback: ${phone.trim()}` : "Callback: (none given)",
      "",
      note.trim() || "(no note)",
      "",
      "Copied on this device. Not sent to the club.",
    ].join("\n");
    setReady(text);
    setCopied(false);
    void navigator.clipboard
      ?.writeText(text)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8">
      <h2 className="font-display text-3xl text-forest">Draft a note, then call</h2>
      <p className="mt-2 text-muted">This copies the note onto your phone or computer. The club does not receive it.</p>
      <label className="mt-5 block text-sm font-semibold" htmlFor="name">
        Your name
      </label>
      <input id="name" value={name} onChange={(event) => setName(event.target.value)} className="field" autoComplete="name" />
      <label className="mt-4 block text-sm font-semibold" htmlFor="phone">
        Your phone
      </label>
      <input id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} className="field" autoComplete="tel" inputMode="tel" />
      <label className="mt-4 block text-sm font-semibold" htmlFor="note">
        What you want to ask
      </label>
      <textarea id="note" value={note} onChange={(event) => setNote(event.target.value)} rows={5} className="field" />
      <button type="submit" className="btn btn-forest mt-5">
        Copy my note
      </button>
      {ready ? (
        <>
          <p className="mt-4 text-sm font-semibold text-forest">{copied ? "Copied. Read it to Leon, or paste it into a message you send yourself." : "Here is the note. Copy it if your browser blocked the clipboard."}</p>
          <pre className="mt-3 whitespace-pre-wrap border border-line bg-parchment p-4 text-sm text-ink">{ready}</pre>
        </>
      ) : null}
    </form>
  );
}
