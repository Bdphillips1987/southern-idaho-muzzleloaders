import { createFileRoute, Link } from "@tanstack/react-router";
import { CallLeon, Rule } from "@/components/editorial";
import { club, formatShoot, photos, upcomingShoots } from "@/lib/club";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Southern Idaho Muzzleloaders — Magic Valley" },
      {
        name: "description",
        content: club.shareDescription,
      },
    ],
  }),
  component: Home,
});

function Home() {
  const next = upcomingShoots(1)[0];
  const following = upcomingShoots(4).slice(1);

  return (
    <main>
      <section className="relative bg-forest">
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          width={1600}
          height={900}
          fetchPriority="high"
          className="h-[50vh] min-h-[18rem] w-full object-cover object-[center_40%] md:h-[78vh] md:min-h-[26rem]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-forest/10" />
        <div className="wrap relative z-10 -mt-28 pb-6 md:-mt-52">
          <div className="ledger grid md:grid-cols-[1.45fr_0.9fr]">
            <div className="p-6 md:p-10">
              <p className="kicker">Magic Valley</p>
              <h1 className="display mt-3 text-forest">Shoot the way the fur trade did.</h1>
              <Rule />
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Flintlock. Percussion. Shoshone and Twin Falls. The last Saturday of the month still smells like black powder. Never shot one? Come try it for free. Call before you drive.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${club.phoneTel}`} className="btn btn-rust">
                  Try it free: call Leon
                </a>
                <Link to="/events" className="btn btn-line">
                  See the next shoot
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted">{photos[0].caption}</p>
            </div>
            <aside className="border-t border-brass/70 bg-parchment p-6 md:border-l md:border-t-0 md:p-10">
              <p className="kicker">Next shoot</p>
              <p className="mt-3 font-display text-3xl leading-tight text-forest md:text-4xl">{formatShoot(next)}</p>
              <p className="mt-4 text-muted">
                Last Saturday of the month, for Shoshone and Twin Falls. The time is on the phone and on Facebook. The street stays with members.
              </p>
              <a
                href={`tel:${club.phoneTel}`}
                className="mt-6 inline-flex min-h-12 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4"
              >
                {club.contact} · {club.phoneDisplay}
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-rust text-cream">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="font-display text-3xl leading-tight">Safety is not optional here.</p>
          <Link to="/safety" className="btn btn-cream">
            Read the safety page
          </Link>
        </div>
      </section>

      <section className="wrap py-20">
        <p className="kicker">A Saturday on the line</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-forest md:text-5xl">
          Load it. Touch it off. Then sit by the fire.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { photo: photos[4], step: "01", line: "Measure the powder. Seat the patch and ball. Nobody is in a hurry." },
            { photo: photos[3], step: "02", line: "One shot. A cloud of smoke. The target is walked when the line is clear." },
            { photo: photos[2], step: "03", line: "Tin cup, wool blanket, stories. This is the part people stay for." },
          ].map(({ photo, step, line }) => (
            <figure key={photo.src} className="card">
              <img src={photo.src} alt={photo.alt} className="aspect-3/2 w-full object-cover" loading="lazy" />
              <figcaption className="p-5">
                <p className="font-display text-3xl text-brass-deep">{step}</p>
                <p className="mt-2 leading-relaxed">{line}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative">
        <img src={photos[5].src} alt={photos[5].alt} className="h-[28rem] w-full object-cover md:h-hero" loading="lazy" />
        <div className="wrap relative z-10 -mt-28 pb-6 md:-mt-40">
          <div className="ledger max-w-xl p-6 md:p-10">
            <p className="kicker">Room on the blanket</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest">The day is better with company.</h2>
            <p className="mt-4 leading-relaxed text-muted">
              A rifle that has been in the family. Someone watching from behind the line. Ask Leon whether guests and families fit this month. It is a private club, and the boom is real.
            </p>
            <p className="mt-3 text-sm text-muted">{photos[5].caption}</p>
            <Link to="/new-shooters" className="mt-5 inline-flex min-h-12 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
              What a first visit is like
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker">Who we are</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest md:text-5xl">A campfire, not a catalog.</h2>
          <p className="mt-5 text-lg leading-relaxed">{club.mission}</p>
          <p className="mt-4 leading-relaxed text-muted">
            {club.legalName} keeps that work in the Magic Valley. The shooting is in Shoshone. The mail goes to Twin Falls. Affiliated with the Idaho State Rifle & Pistol Association. The Facebook page is where the club already talks.
          </p>
          <Link to="/about" className="mt-6 inline-flex min-h-12 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            The short history
          </Link>
        </div>
        <img src={photos[1].src} alt={photos[1].alt} className="aspect-3/2 w-full border border-brass/50 object-cover" loading="lazy" />
      </section>

      <section className="border-y border-brass/40 bg-cream/80 py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Match card</p>
              <h2 className="mt-3 font-display text-4xl text-forest md:text-5xl">The next few last Saturdays</h2>
            </div>
            <Link to="/events" className="inline-flex min-h-12 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
              Full calendar
            </Link>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {following.map((day) => (
              <li key={day.toISOString()} className="card p-6">
                <p className="kicker">Monthly shoot</p>
                <p className="mt-3 font-display text-2xl leading-tight text-forest">{formatShoot(day)}</p>
                <p className="mt-2 text-muted">Shoshone · time by phone</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-4 py-16 md:grid-cols-3">
        {[
          { to: "/new-shooters" as const, title: "Try a shot free", body: "New to this? Come shoot without paying for the shots. Call Leon first." },
          { to: "/gear" as const, title: "What you need", body: "Rifle, powder, ball, patch, flint or cap, eyes and ears. A list you can check off on this phone." },
          { to: "/blog" as const, title: "Field notes", body: "How the guns work, what a Saturday feels like, and valley notes that are real." },
        ].map((card) => (
          <Link key={card.to} to={card.to} className="card p-6 hover:border-brass">
            <h2 className="font-display text-3xl text-forest">{card.title}</h2>
            <p className="mt-3 text-muted">{card.body}</p>
          </Link>
        ))}
      </section>

      <CallLeon
        title="Private club. Open door."
        body="You need to be a member, or a guest of one, to shoot. Dues are not posted. Leon will tell you the number. A gift helps with targets, a first shot, or upkeep."
      >
        <Link to="/membership" className="font-semibold text-brass-bright underline decoration-brass-bright/60 underline-offset-4">
          How to join
        </Link>
        <Link to="/donate" className="font-semibold text-cream underline decoration-cream/40 underline-offset-4">
          Help with a gift
        </Link>
      </CallLeon>
    </main>
  );
}
