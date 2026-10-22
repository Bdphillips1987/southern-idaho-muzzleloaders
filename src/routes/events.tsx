import { createFileRoute, Link } from "@tanstack/react-router";
import { CallLeon, FaqList, PageHeader } from "@/components/editorial";
import { club, formatShoot, upcomingShoots } from "@/lib/club";

const faqs = [
  {
    q: "When is the shoot?",
    a: "The last Saturday of the month. This page figures the date. The start time is not published. Call Leon Reed, or watch the club Facebook page.",
  },
  {
    q: "Where is it?",
    a: "The shooting is in Shoshone. The club is the Magic Valley: Shoshone and Twin Falls. Mail goes to P.O. Box 6027, Twin Falls. There is no street address on this site.",
  },
  {
    q: "What does it cost?",
    a: "A first visit is free when you call Leon first. Dues are not posted. He tells people the number. Do not guess it from this page.",
  },
  {
    q: "Can I bring family?",
    a: "Ask when you call. The club has not published a written rule about children. Guests stay behind the shooters. The line is loud.",
  },
  {
    q: "Do I need my own rifle?",
    a: "Call and ask. The free try is real. A loaner is not promised here. Leon can say whether a rifle will be on the line that day.",
  },
] as const;

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Southern Idaho Muzzleloaders shoot on the last Saturday of each month in Shoshone. Magic Valley, with Twin Falls. Call Leon Reed for the time.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const shoots = upcomingShoots(8);
  const next = shoots[0];
  const rest = shoots.slice(1);

  return (
    <main>
      <PageHeader
        kicker="Events"
        title="Last Saturday. Every month."
        lede="That is the schedule the club publishes. The match fee, the start time, and whether a guest may shoot that day are not. Call before you load the truck."
      >
        <a href={`tel:${club.phoneTel}`} className="btn btn-rust">
          Try it free: call Leon
        </a>
        <Link to="/safety" className="btn btn-line">
          Read the safety page
        </Link>
      </PageHeader>

      <section className="wrap py-16">
        <article className="ledger p-6 md:p-10">
          <p className="kicker">Next shoot</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest md:text-5xl">{formatShoot(next)}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Traditional muzzleloader shoot. Magic Valley. The line is in Shoshone. Flintlock and percussion. Time by phone.
          </p>
          <a href={`tel:${club.phoneTel}`} className="btn btn-forest mt-6">
            Ask {club.contact} · {club.phoneDisplay}
          </a>
        </article>

        <ol className="mt-8 divide-y divide-line border border-line bg-cream">
          {rest.map((day) => (
            <li key={day.toISOString()} className="grid gap-2 p-5 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-6">
              <div>
                <p className="kicker">Monthly shoot</p>
                <p className="mt-1 font-display text-2xl text-forest md:text-3xl">{formatShoot(day)}</p>
              </div>
              <p className="text-muted">Shoshone · Magic Valley · time by phone</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-muted">
          Dates are calculated from the club’s rule: the last Saturday of the month. If a shoot moves, Facebook is where the club has said so. This page does not take RSVPs. A note left here would not reach Leon.
        </p>
      </section>

      <section className="border-y border-line bg-cream/70">
        <div className="wrap grid gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="kicker">The day</p>
            <h2 className="mt-3 font-display text-4xl text-forest">What a Saturday is, without a clock.</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed">
              <p>You call first. You find the person running the line before a rifle comes out of a case.</p>
              <p>Loading starts when that person says so. The muzzle stays down the line. One shot. Smoke. Targets are walked when the line is stopped.</p>
              <p>Between shots, people talk. It is a camp day, not a drill. Bring eyes and ears. Bring a chair if you like to sit. Bring water.</p>
              <p>When the line is done, the guns are proved empty. Then the blanket and the stories. That is the part a website cannot schedule.</p>
            </div>
          </div>
          <div>
            <p className="kicker">Questions</p>
            <h2 className="mt-3 font-display text-4xl text-forest">Before you drive.</h2>
            <div className="mt-6">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CallLeon body="Tell Leon you saw the date and you are new, or that you are coming back. He will tell you the time, and whether the day is open." />
    </main>
  );
}
