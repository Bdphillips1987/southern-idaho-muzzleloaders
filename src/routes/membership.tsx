import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
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
          "Sign up online for Southern Idaho Muzzleloaders in the Magic Valley. Shoshone and Twin Falls. Try a shot free, or put your name in as a member.",
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
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Magic Valley</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Put your name in.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Shoshone and Twin Falls. One club. Sign up here for a free first shot, or for membership. Dues are not on this page yet — the club has not set a public amount.
          </p>
        </div>
      </header>

      <section className="wrap grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-3xl text-forest">What you are joining</h2>
          <ul className="mt-5 space-y-4 text-lg">
            <li className="border-l-4 border-brass pl-4">Last Saturday of the month, in the Magic Valley.</li>
            <li className="border-l-4 border-brass pl-4">Flintlock and percussion. The slow way.</li>
            <li className="border-l-4 border-brass pl-4">A free try if you have never shot one.</li>
          </ul>
          <p className="mt-6 text-muted">
            The club has not named who keeps the paper list yet. Until they do, {club.contact} at {club.phoneDisplay} is still the public contact, and your signup is kept on this phone.
          </p>
        </div>

        {saved ? (
          <article className="ledger p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brass">You are on the list</p>
            <h2 className="mt-2 font-display text-4xl text-forest">{saved.name}</h2>
            <p className="mt-2 text-lg text-muted">
              {saved.intent === "try" ? "Free try" : "Membership"} · {saved.town} · Magic Valley
            </p>
            <dl className="mt-6 space-y-2">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-muted">Phone</dt>
                <dd>{saved.phone}</dd>
              </div>
              {saved.email ? (
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-widest text-muted">Email</dt>
                  <dd>{saved.email}</dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-6 leading-relaxed">
              This signup lives on this phone. When the club names who receives new members, it can be sent there. To be sure a person has it now, call {club.phoneDisplay}.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex min-h-11 items-center border border-forest px-5 font-semibold text-forest"
              onClick={() => {
                localStorage.removeItem("siml-member");
                setSaved(null);
              }}
            >
              Change my signup
            </button>
          </article>
        ) : (
          <form onSubmit={onSubmit} className="ledger p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brass">Online signup</p>
            <h2 className="mt-2 font-display text-3xl text-forest">Which door?</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {intents.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIntent(item.id)}
                  className={
                    intent === item.id
                      ? "min-h-11 border-2 border-rust bg-parchment p-4 text-left"
                      : "min-h-11 border border-line bg-cream p-4 text-left"
                  }
                  aria-pressed={intent === item.id}
                >
                  <span className="block font-display text-2xl text-forest">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                </button>
              ))}
            </div>

            <label className="mt-6 block text-sm font-semibold" htmlFor="member-name">Name</label>
            <input id="member-name" required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="mt-1 w-full border border-line bg-parchment px-3 py-3" />

            <label className="mt-4 block text-sm font-semibold" htmlFor="member-phone">Phone</label>
            <input id="member-phone" required type="tel" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="tel" className="mt-1 w-full border border-line bg-parchment px-3 py-3" />

            <label className="mt-4 block text-sm font-semibold" htmlFor="member-email">Email, if you have one</label>
            <input id="member-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="mt-1 w-full border border-line bg-parchment px-3 py-3" />

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold">Town</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {towns.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTown(item)}
                    className={
                      town === item
                        ? "inline-flex min-h-11 items-center bg-forest px-4 font-semibold text-cream"
                        : "inline-flex min-h-11 items-center border border-forest px-4 font-semibold text-forest"
                    }
                    aria-pressed={town === item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="mt-6 inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream hover:bg-forest">
              Sign me up
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
