import { createFileRoute, Link } from "@tanstack/react-router";
import { club, formatShoot, photos, upcomingShoots } from "@/lib/club";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const next = upcomingShoots(1)[0];
  const following = upcomingShoots(4).slice(1);

  return (
    <main>
      <section className="bg-forest">
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="aspect-video w-full object-cover md:aspect-auto md:h-hero"
        />
      </section>

      <section className="wrap relative z-10 -mt-16 md:-mt-24">
        <div className="ledger grid md:grid-cols-[1.5fr_0.9fr]">
          <div className="p-6 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-rust">
              {club.place}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-forest md:text-6xl">
              Shoot the way the fur trade did.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Flintlock. Percussion. The Magic Valley — Shoshone and Twin Falls. Last Saturday still smells like black powder. Never shot one? The club said you can come try it for free. Call before you drive.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream hover:bg-forest"
              >
                Come to the shoot
              </Link>
              <Link
                to="/new-shooters"
                className="inline-flex min-h-11 items-center border border-forest px-5 font-semibold text-forest hover:bg-forest hover:text-cream"
              >
                Never shot black powder?
              </Link>
            </div>
          </div>
          <aside className="border-t border-brass/60 bg-parchment p-6 md:border-t-0 md:border-l md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brass">Next shoot</p>
            <p className="mt-3 font-display text-3xl leading-tight text-forest">{formatShoot(next)}</p>
            <p className="mt-3 text-muted">
              Last Saturday of the month, for Shoshone and Twin Falls. Time goes up on Facebook and over the phone. The street address stays with members.
            </p>
            <a
              href={`tel:${club.phoneTel}`}
              className="mt-6 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4"
            >
              Call {club.contact} · {club.phoneDisplay}
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-rust text-cream">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-5">
          <p className="font-display text-2xl">Safety is not optional here.</p>
          <Link to="/safety" className="inline-flex min-h-11 items-center bg-cream px-5 font-semibold text-forest">
            Read the safety page
          </Link>
        </div>
      </section>

      <section className="wrap py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-rust">A Saturday on the line</p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl leading-tight text-forest">
          Load it. Touch it off. Then sit by the fire.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { photo: photos[4], step: "01", line: "Measure the powder. Seat the patch and ball. Nobody is in a hurry." },
            { photo: photos[3], step: "02", line: "One shot. A cloud of smoke. The target comes back when the line is clear." },
            { photo: photos[2], step: "03", line: "Tin cup, wool blanket, stories. This is the part families come for." },
          ].map(({ photo, step, line }) => (
            <figure key={photo.src} className="border border-brass/50 bg-cream">
              <img src={photo.src} alt={photo.alt} className="aspect-3/2 w-full object-cover" />
              <figcaption className="p-4">
                <p className="font-display text-2xl text-brass">{step}</p>
                <p className="mt-1 leading-relaxed">{line}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative">
        <img
          src={photos[5].src}
          alt={photos[5].alt}
          className="h-hero w-full object-cover"
        />
        <div className="wrap relative z-10 -mt-28 pb-4 md:-mt-36">
          <div className="ledger max-w-xl p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-rust">Room on the blanket</p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-forest">The day is louder with company.</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Granddad’s rifle, a kid behind the firing line, somebody minding the fire. Ask Leon whether guests and families fit this month. It is a private club, and the boom is real.
            </p>
            <p className="mt-3 text-sm text-muted">The picture is a scene for the site, not a club photograph.</p>
            <Link to="/new-shooters" className="mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
              What a first visit is like
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Who we are</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest">
            A campfire, not a catalog.
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            {club.legalName} keeps fur-trade shooting skills alive in the Magic Valley. Flintlock and percussion. Not a gun shop.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Affiliated with the Idaho State Rifle & Pistol Association. The Facebook page is where the club already talks. This site is the front gate.
          </p>
          <Link to="/about" className="mt-5 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            Read the short history
          </Link>
        </div>
        <img src={photos[1].src} alt={photos[1].alt} className="aspect-3/2 w-full border border-brass/50 object-cover" />
      </section>

      <section className="border-y border-brass/40 bg-cream/80 py-16">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-rust">Match card</p>
              <h2 className="mt-2 font-display text-4xl text-forest">The next few last Saturdays</h2>
            </div>
            <Link to="/events" className="inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
              Full calendar
            </Link>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {following.map((day) => (
              <li key={day.toISOString()} className="border border-brass/50 bg-parchment p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-brass">Monthly shoot</p>
                <p className="mt-2 font-display text-2xl leading-tight text-forest">{formatShoot(day)}</p>
                <p className="mt-2 text-sm text-muted">Time by phone</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-4 pb-4 md:grid-cols-3">
        {[
          { to: "/new-shooters" as const, title: "Try a shot free", body: "New to this? The club said come out and shoot without paying for the shots. Call first." },
          { to: "/gear" as const, title: "What you need", body: "Rifle, powder, ball, patch, flint or cap, eyes and ears. Pictures, and a list you can check off." },
          { to: "/newsletter" as const, title: "The newsletter", body: "Shoot dates, Shoshone and Twin Falls notes, one short lesson. For the regulars and the new ones." },
        ].map((card) => (
          <Link key={card.to} to={card.to} className="border border-brass/50 bg-cream p-5 hover:bg-parchment">
            <h2 className="font-display text-2xl text-forest">{card.title}</h2>
            <p className="mt-2 text-muted">{card.body}</p>
          </Link>
        ))}
      </section>

      <section className="camp">
        <div className="wrap grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brass">Membership</p>
            <h2 className="mt-2 font-display text-4xl">Private club. Open welcome.</h2>
            <p className="mt-4 text-lg text-cream/80">
              You need to be a member, or a guest of one, to shoot. Dues are not posted yet. Leon will tell you the number.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/membership" className="inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream hover:bg-cream hover:text-forest">
              How to join
            </Link>
            <Link to="/donate" className="inline-flex min-h-11 items-center border border-cream/40 px-5 font-semibold text-cream hover:bg-cream hover:text-forest">
              Help with a gift
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
