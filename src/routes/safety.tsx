import { createFileRoute } from "@tanstack/react-router";
import { club } from "@/lib/club";

const rules = [
  {
    title: "It is loaded.",
    body: "Treat every muzzleloader as loaded until you have proved it is not. That includes the one you just fired.",
  },
  {
    title: "Muzzle down the line.",
    body: "The muzzle points down the line. Never at a person, including yourself. Not while you talk. Not while you load.",
  },
  {
    title: "Finger off.",
    body: "The finger stays outside the trigger guard until you are on target and you mean to fire.",
  },
  {
    title: "Wait for the line.",
    body: "Do not load, cap, or prime until the person running the line says to. When they stop the line, hands come off the gun.",
  },
  {
    title: "A hangfire is still loaded.",
    body: "If it clicks and does not fire, keep it pointed down the line and wait. Do not look down the muzzle. Do not recap it yet.",
  },
  {
    title: "Smoke hides people.",
    body: "Nobody steps in front of the line to see a target. Wait until the line is clear and you are told to go.",
  },
  {
    title: "Eyes and ears.",
    body: "Glasses and hearing protection stay on for everyone near the line. That includes people who only came to watch.",
  },
  {
    title: "Behind the line.",
    body: "Guests and kids stay behind the shooters. The boom is loud, and the line is not a place to wander.",
  },
  {
    title: "No alcohol.",
    body: "Do not drink and then shoot. If you have been drinking, you do not step up.",
  },
  {
    title: "One person runs the line.",
    body: "Their word stops everything. If you do not know who that is, ask before you open a horn.",
  },
] as const;

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Safety rules for Southern Idaho Muzzleloaders in the Magic Valley. Read them before you come to the line in Shoshone or Twin Falls.",
      },
    ],
  }),
  component: Safety,
});

function Safety() {
  return (
    <main>
      <header className="camp border-b-4 border-double border-brass">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brass">Read this first</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Safety is the whole point of a slow gun.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            The club is serious about this. These are the basics for the Magic Valley — Shoshone and Twin Falls. The person running the line can add to them. They cannot be talked down.
          </p>
        </div>
      </header>

      <section className="wrap py-12">
        <ol className="grid gap-4">
          {rules.map((rule, index) => (
            <li key={rule.title} className="grid gap-3 border border-brass/50 bg-cream p-5 sm:grid-cols-[4rem_1fr] sm:items-start">
              <span className="font-display text-3xl text-rust">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-2xl text-forest">{rule.title}</h2>
                <p className="mt-1 leading-relaxed">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-muted">
          This is the standard the club wants on the site, not a secret rulebook copied from a drawer. If a line officer tells you something stricter, that is the rule that day.
        </p>
      </section>

      <section className="border-t border-line bg-cream/80">
        <div className="wrap py-12">
          <h2 className="font-display text-3xl text-forest">If you also hunt</h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            A club shoot and an Idaho muzzleloader season are not the same rules. Fish and Game publishes the hunting equipment page. A short reading of it, checked October 2026: a muzzleloader-only season means loaded from the muzzle only, loose powder, no electronic devices on the gun, at least .45 for deer, and at least .50 for elk. Read the current page before a season. This is not legal advice.
          </p>
          <a href={club.idfg} className="mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            Idaho Fish and Game — muzzleloader equipment
          </a>
        </div>
      </section>
    </main>
  );
}
