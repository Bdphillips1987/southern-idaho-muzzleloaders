import { createFileRoute, Link } from "@tanstack/react-router";
import { CallLeon, FaqList, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

const steps = [
  {
    n: "01",
    title: "Call before you drive.",
    body: "Leon Reed is the public contact. Tell him you are new, which town you are coming from, and whether you own a rifle. The shooting is in Shoshone. The time is not on this site.",
  },
  {
    n: "02",
    title: "Ask about the rifle.",
    body: "The club said a first try can be free. That is the shots, not a promise that a gun will be handed to you. Leon can say whether one will be on the line. Do not assume.",
  },
  {
    n: "03",
    title: "Read the safety page.",
    body: "The muzzle stays down the line. You do not load until you are told. Eyes and ears, even if you only watch. Guests stay behind the shooters.",
  },
  {
    n: "04",
    title: "Watch one loading.",
    body: "Powder is measured. A patch wraps a round ball. The ball is seated. Then one shot and a cloud of smoke. The slow part is the sport. Nobody is timing you.",
  },
  {
    n: "05",
    title: "Decide about the next one.",
    body: "If you want to come back, ask Leon what membership takes. Dues are not posted. He has the number. You can also put your name on this phone from the join page. That note does not reach the club by itself.",
  },
] as const;

const faqs = [
  {
    q: "I have never shot black powder. Is that all right?",
    a: "Yes. Call first. The club said a new person can come try it without paying for the shots. You still need the person running the line to walk you through it.",
  },
  {
    q: "Will someone lend me a rifle?",
    a: "Maybe, and maybe not. Ask Leon on the phone. This site does not promise a loaner.",
  },
  {
    q: "Can my family come?",
    a: "Ask when you call. There is no written rule about children on this site. The line is loud. People who are not shooting stay behind it.",
  },
  {
    q: "Flintlock or percussion?",
    a: "Both. If you already have one, bring the question to the phone call. If you have neither, say so.",
  },
  {
    q: "Is this the same as hunting season?",
    a: "No. A club shoot and an Idaho muzzleloader season are different rules. The safety page points at the Fish and Game equipment page. Read that before a season. It is not legal advice.",
  },
] as const;

export const Route = createFileRoute("/new-shooters")({
  head: () => ({
    meta: [
      { title: "Try it free — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "First time with a flintlock or percussion rifle? Call Leon Reed at 208-423-4788. A first visit is free when you call first. Magic Valley: Shoshone and Twin Falls.",
      },
    ],
  }),
  component: NewShooters,
});

function NewShooters() {
  return (
    <main>
      <PageHeader
        kicker="New shooters"
        title="You do not need to already know this."
        lede="People show up because a smoke pole has been in the closet, or because they want to see why a round ball was enough. The club said a first try can be free. Call so Leon expects you."
      >
        <a href={`tel:${club.phoneTel}`} className="btn btn-rust">
          Try it free: call Leon
        </a>
        <Link to="/gear" className="btn btn-line">
          What the gear looks like
        </Link>
      </PageHeader>

      <section className="wrap py-16 md:py-20">
        <p className="kicker">A first visit</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-forest md:text-5xl">Five things, in order.</h2>
        <ol className="mt-10 grid gap-4">
          {steps.map((step) => (
            <li key={step.n} className="card grid gap-3 p-5 sm:grid-cols-[4.5rem_1fr] sm:p-6">
              <span className="font-display text-3xl text-brass-deep">{step.n}</span>
              <div>
                <h3 className="font-display text-2xl text-forest md:text-3xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-cream/70">
        <div className="wrap grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <article>
            <h2 className="font-display text-4xl text-forest">What to wear and carry.</h2>
            <ul className="mt-5 space-y-3 text-lg">
              <li className="border-l-4 border-brass pl-4">Eye and ear protection. The smoke is part of it, and the boom is real.</li>
              <li className="border-l-4 border-brass pl-4">Closed shoes and clothes you can kneel in.</li>
              <li className="border-l-4 border-brass pl-4">Your own traditional muzzleloader if you have one.</li>
              <li className="border-l-4 border-brass pl-4">Water, and a chair if you like to sit between shots.</li>
            </ul>
            <p className="mt-5 text-muted">
              Powder, ball size, and whether a rifle will be there are questions for the phone. Do not load a gun from a webpage.
            </p>
          </article>
          <article>
            <h2 className="font-display text-4xl text-forest">What people ask.</h2>
            <div className="mt-5">
              <FaqList items={faqs} />
            </div>
          </article>
        </div>
      </section>

      <CallLeon title="Call before the last Saturday." body={`${club.contact} answers at ${club.phoneDisplay}. It is a private club in the Magic Valley. Showing up from a map search will not get you onto the line.`} />
    </main>
  );
}
