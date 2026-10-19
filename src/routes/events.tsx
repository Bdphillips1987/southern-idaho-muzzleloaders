import { createFileRoute } from "@tanstack/react-router";
import { club, formatShoot, upcomingShoots } from "@/lib/club";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Southern Idaho Muzzleloaders shoot on the last Saturday of each month. Magic Valley: Shoshone and Twin Falls. Call Leon Reed for the time.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const shoots = upcomingShoots(8);

  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Events</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Last Saturday. Every month.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            That schedule is the one the club publishes. Match fee, start time, and whether guests may shoot that day are not. Call before you load the truck.
          </p>
        </div>
      </header>

      <section className="wrap py-12">
        <ol className="divide-y divide-line border border-line bg-cream">
          {shoots.map((day, index) => (
            <li key={day.toISOString()} className="grid gap-2 p-5 md:grid-cols-[1.2fr_1fr_auto] md:items-center md:gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brass">
                  {index === 0 ? "Next shoot" : "Monthly shoot"}
                </p>
                <p className="mt-1 font-display text-2xl text-forest md:text-3xl">{formatShoot(day)}</p>
              </div>
              <p className="text-muted">
                Traditional muzzleloader shoot · Magic Valley · Shoshone and Twin Falls
              </p>
              <a
                href={`tel:${club.phoneTel}`}
                className="inline-flex min-h-11 items-center justify-center bg-forest px-4 font-semibold text-cream hover:bg-rust"
              >
                Ask the time
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Dates are calculated from the club’s published rule: the last Saturday of the month. If a shoot is moved, Facebook is the place they have said so before. This page does not take RSVPs, because a note left here would not reach Leon.
        </p>
      </section>
    </main>
  );
}
