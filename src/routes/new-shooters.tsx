import { createFileRoute, Link } from "@tanstack/react-router";
import { club } from "@/lib/club";

export const Route = createFileRoute("/new-shooters")({
  head: () => ({
    meta: [
      { title: "New Shooters — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "First time with a flintlock or percussion rifle? What to expect at a Southern Idaho Muzzleloaders monthly shoot.",
      },
    ],
  }),
  component: NewShooters,
});

function NewShooters() {
  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">New shooters</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            You do not need to already know this.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            People show up because a smoke pole has been in the closet, or because they want to see why a round ball was enough. The club said a first try can be free. Call so Leon expects you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${club.phoneTel}`} className="inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream hover:bg-forest">
              Call for a free try · {club.phoneDisplay}
            </a>
            <Link to="/gear" className="inline-flex min-h-11 items-center border border-forest px-5 font-semibold text-forest hover:bg-forest hover:text-cream">
              What the gear looks like
            </Link>
          </div>
        </div>
      </header>

      <section className="wrap grid gap-10 py-14 md:grid-cols-2">
        <article>
          <h2 className="font-display text-3xl text-forest">What a shoot is like</h2>
          <p className="mt-4 leading-relaxed">
            It is slower than a modern rifle line. You measure powder, seat a patched ball, and make one careful shot. Then you do it again. Smoke hangs. Nobody is in a hurry to look tactical.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Families who want to watch should say so when they call. The club has not published a written “kids welcome” policy, so ask Leon rather than assuming either way.
          </p>
        </article>
        <article className="border border-line bg-cream p-6">
          <h2 className="font-display text-2xl text-forest">Bring, until they tell you otherwise</h2>
          <ul className="mt-4 space-y-3">
            <li>Eye and ear protection. Black powder is loud and the smoke is part of it.</li>
            <li>Closed shoes and clothes you can kneel in.</li>
            <li>Your own traditional muzzleloader if you have one — flintlock or percussion.</li>
            <li>A patient attitude. Loading is the sport.</li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Powder, ball size, and whether a rifle will be there for you are questions for the phone call. The free try is the club’s offer. The details still come from Leon.
          </p>
        </article>
      </section>

      <section className="bg-forest text-cream">
        <div className="wrap py-12">
          <h2 className="font-display text-3xl">Call before the last Saturday</h2>
          <p className="mt-3 max-w-2xl text-cream/80">
            It is a private club in the Magic Valley. Showing up from a map search will not get you onto the line. {club.contact} is the public contact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${club.phoneTel}`} className="inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream">
              {club.phoneDisplay}
            </a>
            <Link to="/safety" className="inline-flex min-h-11 items-center border border-cream/40 px-5 font-semibold text-cream">
              Read the safety page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
