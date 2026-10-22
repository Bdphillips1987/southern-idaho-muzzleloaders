import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { CallLeon, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

const towns = ["Shoshone", "Twin Falls", "Elsewhere in the Magic Valley"] as const;
const intents = [
  { id: "try", title: "Try a shot free", detail: "First time. Come see the smoke before you buy anything." },
  { id: "join", title: "Become a member", detail: "You already know you want the last Saturday." },
] as const;

type Intent = (typeof intents)[number]["id"];
type Town = (typeof towns)[number];

type Application = {
  name: string;
  phone: string;
  email: string;
  town: Town;
  intent: Intent;
};

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Join — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Put your name down for a free try or for membership with Southern Idaho Muzzleloaders. The note stays on this phone. Call Leon Reed, 208-423-4788.",
      },
    ],
  }),
  component: Membership,
});

function Membership() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState<Town>("Shoshone");
  const [intent, setIntent] = useState<Intent>("try");
  const [saved, setSaved] = useState<Application | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("siml-member");
    if (!raw) return;
    try {
      setSaved(JSON.parse(raw) as Application);
    } catch {
      localStorage.removeItem("siml-member");
    }
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const application: Application = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      town,
      intent,
    };
    localStorage.setItem("siml-member", JSON.stringify(application));
    setSaved(application);
  }

  return (
    <main>
      <PageHeader
        kicker="Magic Valley"
        title="Put your name in."
        lede="Shoshone and Twin Falls. One club. Use this page for a free first shot, or for membership. The note stays on this phone. Dues are not posted. Leon tells you the number."
      />

      <section className="wrap grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-4xl text-forest">What you are joining</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li className="border-l-4 border-brass pl-4">Last Saturday of the month. The line is in Shoshone.</li>
            <li className="border-l-4 border-brass pl-4">Flintlock and percussion. The slow way.</li>
            <li className="border-l-4 border-brass pl-4">A free try if you have never shot one, when you call first.</li>
            <li className="border-l-4 border-brass pl-4">Mail still goes to Twin Falls. The Magic Valley covers both towns.</li>
          </ul>
          <p className="mt-6 text-muted">
            The club has not named who keeps the paper list. Until they do, {club.contact} at {club.phoneDisplay} is the public contact. A signup here does not reach him by itself.
          </p>
        </div>

        {saved ? (
          <article className="ledger p-6 md:p-8">
            <p className="kicker">Saved on this phone</p>
            <h2 className="mt-3 font-display text-4xl text-forest">{saved.name}</h2>
            <p className="mt-2 text-lg text-muted">
              {saved.intent === "try" ? "Free try" : "Membership"} · {saved.town} · Magic Valley
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="kicker">Phone</dt>
                <dd className="mt-1">{saved.phone}</dd>
              </div>
              {saved.email ? (
                <div>
                  <dt className="kicker">Email</dt>
                  <dd className="mt-1">{saved.email}</dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-6 leading-relaxed">
              The club does not have this yet. Call {club.phoneDisplay} if you want a person to hear it today.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${club.phoneTel}`} className="btn btn-rust">
                Try it free: call Leon
              </a>
              <button
                type="button"
                className="btn btn-line"
                onClick={() => {
                  localStorage.removeItem("siml-member");
                  setSaved(null);
                }}
              >
                Change my note
              </button>
            </div>
          </article>
        ) : (
          <form onSubmit={onSubmit} className="ledger p-6 md:p-8">
            <p className="kicker">Your note</p>
            <h2 className="mt-2 font-display text-3xl text-forest">Which door?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {intents.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIntent(item.id)}
                  className={item.id === intent ? "min-h-12 border-2 border-rust bg-parchment p-4 text-left" : "min-h-12 border border-line bg-cream p-4 text-left hover:border-brass"}
                  aria-pressed={intent === item.id}
                >
                  <span className="block font-display text-2xl text-forest">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                </button>
              ))}
            </div>

            <label className="mt-6 block text-sm font-semibold" htmlFor="member-name">
              Name
            </label>
            <input id="member-name" required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="field" />

            <label className="mt-4 block text-sm font-semibold" htmlFor="member-phone">
              Phone
            </label>
            <input id="member-phone" required type="tel" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="tel" className="field" />

            <label className="mt-4 block text-sm font-semibold" htmlFor="member-email">
              Email, if you want
            </label>
            <input id="member-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="field" />

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold">Town</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {towns.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTown(item)}
                    className={town === item ? "btn btn-forest" : "btn btn-line"}
                    aria-pressed={town === item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="btn btn-rust mt-6">
              Save on this phone
            </button>
            <p className="mt-4 text-sm text-muted">Saving here does not sign you up with the club. Call Leon to be sure a person has your name.</p>
          </form>
        )}
      </section>

      <CallLeon />
    </main>
  );
}
