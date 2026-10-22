import { createFileRoute } from "@tanstack/react-router";
import { CallLeon, ExternalLink, PageHeader, Rule } from "@/components/editorial";
import { club } from "@/lib/club";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Southern Idaho Muzzle Loaders Inc. keeps fur-trade shooting in the Magic Valley. Shoshone and Twin Falls. Flintlock and percussion. Leon Reed, 208-423-4788.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHeader
        kicker="About the club"
        title="Fur-trade skills, still practiced."
        lede={`${club.facebookName} is the name on Facebook. The incorporated name is ${club.legalName}. The work is the same: flintlock and percussion, the slow way, in the Magic Valley.`}
      />

      <section className="wrap grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            The club’s line is simple. Preserve and practice the skills of the fur-trade era. In practice that means traditional muzzleloaders, shot on the last Saturday of the month.
          </p>
          <p>
            The shooting is in Shoshone. Shoshone sits in Lincoln County, inside the Magic Valley. Twin Falls County is the next one over. Mail still goes to the Twin Falls post office box. No street address is published here.
          </p>
          <p>
            {club.legalName} is an affiliated club of the Idaho State Rifle & Pistol Association. The public contact on that list, and on the directories that name the club, is {club.contact}.
          </p>
          <p>
            People come who have shot these guns for decades. People come who hunt with a muzzleloader and want a day that is not a season. People come who have never loaded from the muzzle and want to see the smoke once. Call before you come. A first try is free when you do.
          </p>
        </div>
        <aside className="card h-fit p-6 md:p-8">
          <p className="kicker">On the record</p>
          <dl className="mt-5 space-y-5">
            <Fact term="Contact" detail={club.contact} />
            <Fact term="Phone" detail={club.phoneDisplay} />
            <Fact term="Where" detail="Magic Valley — shooting in Shoshone, mail in Twin Falls" />
            <Fact term="Mail" detail={`${club.mailing[0]}, ${club.mailing[1]}`} />
            <Fact term="Shoots" detail="Last Saturday of the month" />
            <Fact term="First visit" detail="Free when you call Leon first" />
          </dl>
          <p className="mt-6">
            <ExternalLink href={club.isrpa}>ISRPA club listing</ExternalLink>
          </p>
          <p className="mt-3">
            <ExternalLink href={club.facebook}>Facebook page</ExternalLink>
          </p>
        </aside>
      </section>

      <section className="border-y border-line bg-cream/80">
        <div className="wrap py-16 md:py-20">
          <p className="kicker">The tradition</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-5xl">
            How a muzzleloader came to be the slow gun.
          </h2>
          <Rule />
          <div className="mt-8 grid gap-8 text-lg leading-relaxed md:grid-cols-2">
            <p>
              For centuries a gun loaded from the front of the barrel. Powder. A ball. A way to light it. That is the whole machine. There is no cartridge to drop in, and there is no hurry built into the lock.
            </p>
            <p>
              A flintlock strikes flint on steel. Sparks fall into a pan of powder. The flash travels through a touch hole and lights the charge behind the ball. Rifles of the fur trade were flintlocks. People still shoot them because the older spark is the point.
            </p>
            <p>
              Percussion arrived in the early 1800s. A copper cap sits on a nipple. The hammer crushes it, and the flame goes straight to the powder. It is surer in damp weather. It is still a muzzleloader. The club shoots both.
            </p>
            <p>
              The ball is round, and it wears a cloth patch. The patch takes the rifling, so the ball spins. The powder is measured by hand. That slowness is the sport the club is keeping in the Magic Valley. This is the history of the gun, not a founding date for the club. The club has not published one here.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <h2 className="font-display text-4xl text-forest">Ask Leon for the rest.</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Dues, the street, and who else speaks for the club stay with him until the club writes them down. Call {club.phoneDisplay}. He is the public contact.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {["What the dues are", "Where to turn in", "Who else to ask"].map((item) => (
            <li key={item} className="card p-5 text-lg">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CallLeon />
    </main>
  );
}

function Fact({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="kicker">{term}</dt>
      <dd className="mt-1 text-ink">{detail}</dd>
    </div>
  );
}
