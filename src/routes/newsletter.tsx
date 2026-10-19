import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { club } from "@/lib/club";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Subscribe for the Southern Idaho Muzzleloaders note: the Shoshone shoot, Twin Falls valley news, and a short muzzleloading lesson.",
      },
    ],
  }),
  component: Newsletter,
});

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const entry = { name: name.trim(), email: email.trim(), at: new Date().toISOString() };
    const prior = JSON.parse(localStorage.getItem("siml-newsletter") ?? "[]") as unknown[];
    localStorage.setItem("siml-newsletter", JSON.stringify([...prior, entry]));
    const text = `Newsletter signup for ${club.name}\nName: ${entry.name}\nEmail: ${entry.email}`;
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    setSaved(true);
  }

  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Newsletter</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            One note. The shoot, the valley, one lesson.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            The meeting asked for a letter people can subscribe to. This is that page. It is for the shooters who already mark the last Saturday, and for the newer ones who need a reason to show up.
          </p>
        </div>
      </header>

      <section className="wrap grid gap-10 py-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl text-forest">What goes in it</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>The next Shoshone shoot, with the time once Leon has said it.</li>
            <li>A short valley note when something real is happening in Twin Falls or Shoshone.</li>
            <li>One plain muzzleloading lesson. No catalog voice.</li>
          </ul>
          <p className="mt-6 text-muted">
            Read the latest on the <Link to="/blog" className="font-semibold text-forest underline decoration-brass underline-offset-4">blog</Link>. The letter is the same news, sent to people who will not come looking.
          </p>
        </div>

        <form onSubmit={onSubmit} className="border border-brass/60 bg-cream p-6">
          <h2 className="font-display text-2xl text-forest">Put me on the list</h2>
          <label className="mt-5 block text-sm font-semibold" htmlFor="nl-name">Name</label>
          <input id="nl-name" required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="mt-1 w-full border border-line bg-parchment px-3 py-3 text-ink" />
          <label className="mt-4 block text-sm font-semibold" htmlFor="nl-email">Email</label>
          <input id="nl-email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="mt-1 w-full border border-line bg-parchment px-3 py-3 text-ink" />
          <button type="submit" className="mt-5 inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream hover:bg-forest">
            Subscribe
          </button>
          {saved ? (
            <p className="mt-4 leading-relaxed">
              Saved on this phone, and copied so you can forward it. The club does not have a mail service connected yet, so this does not send by itself. To be sure Leon has you, call {club.phoneDisplay}.
            </p>
          ) : (
            <p className="mt-4 text-sm text-muted">
              Until an email service is connected, a signup stays on this device and copies a note. Call {club.contact} if you want your name on paper in the meantime.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
