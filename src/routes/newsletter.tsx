import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CallLeon, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "A short note from Southern Idaho Muzzleloaders: the Shoshone shoot, Twin Falls valley news, and one plain lesson. A signup on this page stays on your phone.",
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
    let prior: unknown[] = [];
    try {
      const parsed = JSON.parse(localStorage.getItem("siml-newsletter") ?? "[]") as unknown;
      if (Array.isArray(parsed)) prior = parsed;
    } catch {
      prior = [];
    }
    localStorage.setItem("siml-newsletter", JSON.stringify([...prior, entry]));
    const text = `Newsletter signup for ${club.name}\nName: ${entry.name}\nEmail: ${entry.email}\nThis note was copied from the preview site. It was not emailed to the club.`;
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    setSaved(true);
  }

  return (
    <main>
      <PageHeader
        kicker="Newsletter"
        title="One note. The shoot, the valley, one lesson."
        lede="For the shooters who already mark the last Saturday, and for the newer ones who need a reason to show up. The letter is not being mailed from this page."
      />

      <section className="wrap grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-4xl text-forest">What would go in it.</h2>
          <ul className="mt-5 space-y-4 text-lg">
            <li className="border-l-4 border-brass pl-4">The next Shoshone shoot. The time, once Leon has said it.</li>
            <li className="border-l-4 border-brass pl-4">A short valley note when something real is happening in Twin Falls or Shoshone.</li>
            <li className="border-l-4 border-brass pl-4">One plain muzzleloading lesson. No catalog voice.</li>
          </ul>
          <p className="mt-6 text-muted">
            Read the latest on the{" "}
            <Link to="/blog" className="font-semibold text-forest underline decoration-brass underline-offset-4">
              blog
            </Link>
            . The same news, for people who will not come looking.
          </p>
          <article className="card mt-8 p-5">
            <p className="kicker">A sample, not a mailing</p>
            <h3 className="mt-2 font-display text-2xl text-forest">October, Magic Valley</h3>
            <p className="mt-3 text-muted">
              Next shoot: the last Saturday, October 31, in Shoshone. Twin Falls packed Main for Oktoberfest on October 3, KMVT said. Lesson: a flintlock and a percussion gun are both muzzleloaders. Call Leon before you come.
            </p>
          </article>
        </div>

        <form onSubmit={onSubmit} className="card p-6 md:p-8">
          <h2 className="font-display text-3xl text-forest">Keep a name on this phone</h2>
          <p className="mt-2 text-muted">The club does not receive this form. It is saved here, and a note is copied so you can read it to Leon.</p>
          <label className="mt-6 block text-sm font-semibold" htmlFor="nl-name">
            Name
          </label>
          <input id="nl-name" required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="field" />
          <label className="mt-4 block text-sm font-semibold" htmlFor="nl-email">
            Email
          </label>
          <input id="nl-email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="field" />
          <button type="submit" className="btn btn-rust mt-6">
            Save my name
          </button>
          {saved ? (
            <p className="mt-4 leading-relaxed">
              Saved on this phone, and copied. Nothing was emailed to the club. To be sure Leon has you, call {club.phoneDisplay}.
            </p>
          ) : (
            <p className="mt-4 text-sm text-muted">Until a real sender is chosen, this is a notebook on your device. Call {club.contact} if you want your name on paper.</p>
          )}
        </form>
      </section>

      <CallLeon />
    </main>
  );
}
