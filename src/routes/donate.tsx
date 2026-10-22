import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CallLeon, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

const causes = [
  { id: "targets", title: "Targets", detail: "Paper and stands for the line." },
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
          "A gift for Southern Idaho Muzzleloaders in the Magic Valley. Targets, a first shot, or upkeep. Shoshone and Twin Falls.",
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
      <PageHeader
        kicker="Magic Valley"
        title="Give to the line."
        lede="Shoshone and Twin Falls. A gift is for targets, a first shot for somebody new, or upkeep. Pick one and see it through."
      />

      <section className="wrap py-16">
        {step === "thanks" ? (
          <article className="ledger mx-auto max-w-xl p-6 md:p-10">
            <p className="kicker">Thank you</p>
            <h2 className="mt-3 font-display text-6xl text-forest">${chosen}</h2>
            <p className="mt-2 font-display text-3xl text-forest">{name.trim() || "A friend of the club"}</p>
            <p className="mt-2 text-lg text-muted">
              {causeLabel} · {club.towns}
            </p>
            {note.trim() ? <p className="mt-4 leading-relaxed">“{note.trim()}”</p> : null}
            <p className="mt-6 text-sm text-muted">A card is not charged, and the club does not receive this note.</p>
            <button type="button" className="btn btn-line mt-6" onClick={() => setStep("gift")}>
              Give another
            </button>
          </article>
        ) : (
          <div className="mx-auto grid max-w-3xl gap-8">
            <ol className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.16em]" aria-label="Gift steps">
              {(
                [
                  ["gift", "The gift"],
                  ["name", "Your name"],
                  ["review", "Review"],
                ] as const
              ).map(([id, label], index) => (
                <li key={id} className={step === id ? "text-rust" : "text-muted"} aria-current={step === id ? "step" : undefined}>
                  <span className="font-display text-lg normal-case tracking-normal">0{index + 1}</span> {label}
                </li>
              ))}
            </ol>

            {step === "gift" ? (
              <div className="card p-6 md:p-8">
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
                          ? "min-h-12 border-2 border-rust bg-parchment p-4 text-left"
                          : "min-h-12 border border-line bg-cream p-4 text-left hover:border-brass"
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
                      className={!useCustom && amount === value ? "btn btn-forest min-w-20 font-display text-2xl" : "btn btn-line min-w-20 font-display text-2xl"}
                    >
                      ${value}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-pressed={useCustom}
                    onClick={() => setUseCustom(true)}
                    className={useCustom ? "btn btn-forest font-display text-2xl" : "btn btn-line font-display text-2xl"}
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
                      className="field"
                      placeholder="25"
                    />
                  </label>
                ) : null}
                <button type="button" disabled={!ready} onClick={() => setStep("name")} className="btn btn-rust mt-8 disabled:opacity-40">
                  Continue
                </button>
              </div>
            ) : null}

            {step === "name" ? (
              <form
                className="card p-6 md:p-8"
                onSubmit={(event) => {
                  event.preventDefault();
                  setStep("review");
                }}
              >
                <h2 className="font-display text-3xl text-forest">Who is giving?</h2>
                <label className="mt-4 block text-sm font-semibold" htmlFor="gift-name">
                  Name
                </label>
                <input id="gift-name" required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="field" />
                <label className="mt-4 block text-sm font-semibold" htmlFor="gift-note">
                  A note, if you want
                </label>
                <textarea id="gift-note" value={note} onChange={(event) => setNote(event.target.value)} rows={3} className="field" />
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="submit" className="btn btn-rust">
                    Review the gift
                  </button>
                  <button type="button" onClick={() => setStep("gift")} className="btn btn-line">
                    Back
                  </button>
                </div>
              </form>
            ) : null}

            {step === "review" ? (
              <div className="ledger p-6 md:p-8">
                <p className="kicker">Review</p>
                <h2 className="mt-2 font-display text-6xl text-forest">${chosen}</h2>
                <p className="mt-2 text-lg">
                  {name.trim()} · {causeLabel}
                </p>
                <p className="mt-1 text-muted">{club.towns} · Magic Valley</p>
                {note.trim() ? <p className="mt-4">“{note.trim()}”</p> : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="button" onClick={() => setStep("thanks")} className="btn btn-rust">
                    Give ${chosen}
                  </button>
                  <button type="button" onClick={() => setStep("name")} className="btn btn-line">
                    Back
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </section>

      <CallLeon title="Or come shoot first." body="A gift can wait. A first visit is free when you call Leon before you come." />
    </main>
  );
}
