import { createFileRoute } from "@tanstack/react-router";
import { CallLeon, ExternalLink, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

const rules = [
  {
    title: "It is loaded.",
    body: "Treat every muzzleloader as loaded until you have proved it is not. That includes the one you just fired.",
  },
  {
    title: "Muzzle down the line.",
    body: "The muzzle points down the line. Never at a person, including yourself. Not while you talk. Not while you load. The muzzle is in your hands the whole time you load.",
  },
  {
    title: "Finger off.",
    body: "The finger stays outside the trigger guard until you are on target and you mean to fire.",
  },
  {
    title: "Wait for the line.",
    body: "Do not load, cap, or prime until the person running the line says to. When they stop the line, hands come off the gun. The ramrod comes out before you fire.",
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
    body: "Guests stay behind the shooters. The boom is loud, and the line is not a place to wander. If children are with you, ask Leon before you come. There is no written rule about that on this site.",
  },
  {
    title: "No alcohol. No smokeless.",
    body: "Do not drink and then shoot. If you have been drinking, you do not step up. Do not pour smokeless powder into a muzzleloader built for black powder.",
  },
  {
    title: "One person runs the line.",
    body: "Their word stops everything. If you do not know who that is, ask before you open a horn. If a ball does not seat, stop. Do not fire another charge on top of it.",
  },
] as const;

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Safety basics for Southern Idaho Muzzleloaders. Read them before you come to the line in Shoshone. Magic Valley, with Twin Falls.",
      },
    ],
  }),
  component: Safety,
});

function Safety() {
  return (
    <main>
      <PageHeader
        tone="dark"
        kicker="Read this first"
        title="Safety is the whole point of a slow gun."
        lede="These are the basics for a traditional muzzleloader day in the Magic Valley — Shoshone and Twin Falls. The person running the line can add to them. They cannot be talked down."
      />

      <section className="wrap py-16">
        <ol className="grid gap-4">
          {rules.map((rule, index) => (
            <li key={rule.title} className="card grid gap-3 p-5 sm:grid-cols-[4.5rem_1fr] sm:items-start sm:p-6">
              <span className="font-display text-3xl text-rust">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-2xl text-forest md:text-3xl">{rule.title}</h2>
                <p className="mt-2 leading-relaxed">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-muted">
          These are the basics this site carries. If the person running the line tells you something stricter that day, that is the rule.
        </p>
      </section>

      <section className="border-t border-line bg-cream/80">
        <div className="wrap grid gap-10 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-forest">Why the rules are shaped this way.</h2>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>You are holding the muzzle while you load. That is different from a gun that feeds itself. The direction of the barrel is the whole safety problem, from the first pour to the last shot.</p>
              <p>A click is not an empty gun. A pan can flash late. A cap can hang. Smoke can hide the person you did not know was walking.</p>
              <p>Black powder is the powder these guns were built around. Smokeless is a different material. Mixing them up is how barrels fail. This page will not give you a load. Ask someone who knows the rifle.</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl text-forest">If you also hunt.</h2>
            <p className="mt-4 leading-relaxed">
              A club shoot and an Idaho muzzleloader season are not the same rules. Fish and Game publishes the hunting equipment page. A short reading of it, checked October 2026: a muzzleloader-only season means loaded from the muzzle only, loose powder, no electronic devices on the gun, at least .45 for deer, and at least .50 for elk. Read the current page before a season. This is not legal advice, and it is not a club match rule.
            </p>
            <p className="mt-4">
              <ExternalLink href={club.idfg}>Idaho Fish and Game — muzzleloader equipment</ExternalLink>
            </p>
          </div>
        </div>
      </section>

      <CallLeon body="Call before a first visit. Tell Leon you have read the basics. He can add whatever the line needs that month." />
    </main>
  );
}
