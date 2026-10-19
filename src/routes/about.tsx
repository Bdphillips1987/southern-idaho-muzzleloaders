import { createFileRoute } from "@tanstack/react-router";
import { club } from "@/lib/club";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Southern Idaho Muzzle Loaders Inc. keeps fur-trade shooting in the Magic Valley — Shoshone and Twin Falls. Affiliated with the Idaho State Rifle & Pistol Association.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">About the club</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Fur-trade skills, still practiced.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {club.facebookName} is the public name on Facebook. The incorporated name on the state association list is {club.legalName}.
          </p>
        </div>
      </header>

      <section className="wrap grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            The club’s own line is simple: preserve and practice the skills of the fur-trade era. In practice that means traditional muzzleloaders, flintlock and percussion, shot at a monthly match.
          </p>
          <p>
            Shoots fall on the last Saturday of the month. The club is the Magic Valley: Shoshone and Twin Falls. Mail still goes to the Twin Falls post office box. No street address is published here.
          </p>
          <p>
            {club.legalName} is an affiliated club of the Idaho State Rifle & Pistol Association. The public contact there, and on every directory that lists the club, is {club.contact}.
          </p>
        </div>
        <aside className="h-fit border border-line bg-cream p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brass">On the record</p>
          <dl className="mt-4 space-y-4">
            <Fact term="Contact" detail={club.contact} />
            <Fact term="Phone" detail={club.phoneDisplay} />
            <Fact term="Where" detail="Magic Valley — Shoshone and Twin Falls" />
            <Fact term="Mail" detail={`${club.mailing[0]}, ${club.mailing[1]}`} />
            <Fact term="Shoots" detail="Last Saturday of the month" />
          </dl>
          <a href={club.isrpa} className="mt-6 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            ISRPA club listing
          </a>
        </aside>
      </section>

      <section className="bg-cream py-14">
        <div className="wrap">
          <h2 className="font-display text-3xl text-forest">What this page will not guess</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Dues, and what they cover",
              "Officers besides Leon Reed",
              "A street address",
              "The club’s written safety rules and bylaws",
            ].map((item) => (
              <li key={item} className="border border-line bg-parchment p-5 text-lg">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-muted">
            Those belong to the club. When leadership sends them, they can go on this page without changing the rest of the site.
          </p>
        </div>
      </section>
    </main>
  );
}

function Fact({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="text-sm font-semibold uppercase tracking-widest text-muted">{term}</dt>
      <dd className="mt-1 text-ink">{detail}</dd>
    </div>
  );
}
