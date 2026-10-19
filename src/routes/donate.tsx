import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { club } from "@/lib/club";

const causes = [
  { id: "targets", title: "Targets", detail: "Paper, stands, and a patch knife on the line." },
  { id: "first", title: "A first shot", detail: "Powder and a ball for someone trying it free." },
  { id: "upkeep", title: "Upkeep", detail: "Keeping a place to shoot in the Magic Valley." },
] as const;

const presets = [15, 25, 50, 100] as const;

type Cause = (typeof causes)[number]["id"];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Give — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Give to Southern Idaho Muzzleloaders in the Magic Valley. Targets, a first shot, or upkeep. Shoshone and Twin Falls.",
      },
    ],
  }),
  component: Donate,
});

function Donate() {
  const [cause, setCause] = useState<Cause>("targets");
  const [amount, setAmount] = useState<number>(25);
  const [custom, setCustom] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [step, setStep] = useState<"gift" | "name" | "review" | "thanks">("gift");

  const chosen = useCustom ? Number(custom) : amount;
  const causeLabel = causes.find((item) => item.id === cause)?.title ?? "Gift";
  const ready = Number.isFinite(chosen) && chosen >= 5;

  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Magic Valley</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Give to the line.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Shoshone and Twin Falls. A gift buys targets, a first shot for somebody new, or upkeep. Pick one and see it through.
          </p>
        </div>
      </header>

      <section className="wrap py-12">
        {step === "thanks" ? (
          <article className="ledger mx-auto max-w-xl p-6 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brass">Thank you</p>
            <h2 className="mt-3 font-display text-5xl text-forest">${chosen}</h2>
            <p className="mt-2 font-display text-3xl text-forest">{name.trim() || "A friend of the club"}</p>
            <p className="mt-2 text-lg text-muted">
              {causeLabel} · {club.towns}
            </p>
            {note.trim() ? <p className="mt-4 leading-relaxed">“{note.trim()}”</p> : null}
            <p className="mt-6 text-sm text-muted">
              This is the thank-you a donor sees. A card is not charged from this page yet.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex min-h-11 items-center border border-forest px-5 font-semibold text-forest"
              onClick={() => setStep("gift")}
            >
              Give another
            </button>
          </article>
        ) : (
          <div className="mx-auto grid max-w-3xl gap-8">
            <ol className="flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-widest">
              {[
                ["gift", "The gift"],
                ["name", "Your name"],
                ["review", "Review"],
              ].map(([id, label], index) => (
                <li key={id} className={step === id ? "text-rust" : "text-muted"}>
                  0{index + 1} {label}
                </li>
              ))}
            </ol>

            {step === "gift" ? (
              <div>
                <h2 className="font-display text-3xl text-forest">Where should it go?</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {causes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={cause === item.id}
                      onClick={() => setCause(item.id)}
                      className={
                        cause === item.id
                          ? "min-h-11 border-2 border-rust bg-cream p-4 text-left"
                          : "min-h-11 border border-line bg-cream p-4 text-left"
                      }
                    >
                      <span className="block font-display text-2xl text-forest">{item.title}</span>
                      <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                    </button>
                  ))}
                </div>
                <h2 className="mt-8 font-display text-3xl text-forest">How much?</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {presets.map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={!useCustom && amount === value}
                      onClick={() => {
                        setUseCustom(false);
                        setAmount(value);
                      }}
                      className={
                        !useCustom && amount === value
                          ? "inline-flex min-h-14 min-w-20 items-center justify-center bg-forest px-4 font-display text-2xl text-cream"
                          : "inline-flex min-h-14 min-w-20 items-center justify-center border border-forest px-4 font-display text-2xl text-forest"
                      }
                    >
                      ${value}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-pressed={useCustom}
                    onClick={() => setUseCustom(true)}
                    className={
                      useCustom
                        ? "inline-flex min-h-14 items-center bg-forest px-4 font-display text-2xl text-cream"
                        : "inline-flex min-h-14 items-center border border-forest px-4 font-display text-2xl text-forest"
                    }
                  >
                    Other
                  </button>
                </div>
                {useCustom ? (
                  <label className="mt-4 block max-w-xs text-sm font-semibold">
                    Amount
                    <input
                      inputMode="decimal"
                      value={custom}
                      onChange={(event) => setCustom(event.target.value)}
                      className="mt-1 w-full border border-line bg-parchment px-3 py-3 text-lg"
                      placeholder="25"
                    />
                  </label>
                ) : null}
                <button
                  type="button"
                  disabled={!ready}
                  onClick={() => setStep("name")}
                  className="mt-8 inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            ) : null}

            {step === "name" ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setStep("review");
                }}
              >
                <h2 className="font-display text-3xl text-forest">Who is giving?</h2>
                <label className="mt-4 block text-sm font-semibold" htmlFor="gift-name">
                  Name
                </label>
                <input
                  id="gift-name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  className="mt-1 w-full border border-line bg-parchment px-3 py-3"
                />
                <label className="mt-4 block text-sm font-semibold" htmlFor="gift-note">
                  A note, if you want
                </label>
                <textarea
                  id="gift-note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={3}
                  className="mt-1 w-full border border-line bg-parchment px-3 py-3"
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream">
                    Review the gift
                  </button>
                  <button type="button" onClick={() => setStep("gift")} className="inline-flex min-h-11 items-center px-3 font-semibold text-forest">
                    Back
                  </button>
                </div>
              </form>
            ) : null}

            {step === "review" ? (
              <div className="ledger p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-brass">Review</p>
                <h2 className="mt-2 font-display text-5xl text-forest">${chosen}</h2>
                <p className="mt-2 text-lg">
                  {name.trim()} · {causeLabel}
                </p>
                <p className="mt-1 text-muted">{club.towns} · Magic Valley</p>
                {note.trim() ? <p className="mt-4">“{note.trim()}”</p> : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setStep("thanks")}
                    className="inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream"
                  >
                    Give ${chosen}
                  </button>
                  <button type="button" onClick={() => setStep("name")} className="inline-flex min-h-11 items-center px-3 font-semibold text-forest">
                    Back
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
}
