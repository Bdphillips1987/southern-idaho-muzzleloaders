import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CallLeon, PageHeader } from "@/components/editorial";
import { club } from "@/lib/club";

const kit = [
  {
    id: "rifle",
    name: "The rifle",
    what: "A flintlock or a percussion muzzleloader. It loads from the muzzle, not from a magazine. Both are welcome.",
    src: "/photos/flintlock.jpg",
    alt: "Flintlock lock, brass furniture, and a powder horn on leather",
  },
  {
    id: "charge",
    name: "Loose powder",
    what: "Black powder, or a substitute made for muzzleloaders, poured from a horn or flask. Not a cartridge. Not smokeless powder in a gun built for black powder.",
    src: "/photos/loading.jpg",
    alt: "Hands pouring powder from a brass measure into a flintlock",
  },
  {
    id: "ball",
    name: "Round ball and patch",
    what: "A lead ball that fits the bore, wrapped in a cotton patch so it grips the rifling. A measure and a short starter put it where it belongs.",
    src: "/photos/kit-ball-patch.jpg",
    alt: "Lead round balls, cotton patches, a brass powder measure, and a wooden short starter",
  },
  {
    id: "spark",
    name: "Flint or caps",
    what: "A flintlock needs a sharp flint. A percussion gun needs a cap on the nipple. That is the spark. Carry a spare.",
    src: "/photos/kit-caps-flints.jpg",
    alt: "Percussion caps and gun flints beside a flintlock cock",
  },
  {
    id: "safety",
    name: "Eyes and ears",
    what: "The newest things in the pile. Glasses and muffs. The rest can look like 1830. Your hearing should not.",
    src: "/photos/kit-eyes-ears.jpg",
    alt: "Shooting glasses and hearing protection next to a powder horn",
  },
] as const;

const pouch = [
  { id: "ramrod", name: "Ramrod", what: "Usually under the barrel. It seats the ball. It comes back out before you fire." },
  { id: "starter", name: "Short starter", what: "A short wooden starter begins the ball. Your hand is not a mallet." },
  { id: "measure", name: "Powder measure", what: "The same charge, every time. Write down the charge someone who knows that rifle told you. Do not take it from a website." },
  { id: "spare", name: "Spare flint or caps", what: "The spark is a small part. It is also the part that fails." },
  { id: "pick", name: "Vent pick or nipple pick", what: "A fine pick for the touch hole, or for the nipple. Keep it off the muzzle when anyone is down the line." },
  { id: "patches", name: "Cleaning patches", what: "A way to wipe the bore when the day is done. The club has not posted a cleaning recipe here." },
] as const;

export const Route = createFileRoute("/gear")({
  head: () => ({
    meta: [
      { title: "Basic kit — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "What a traditional muzzleloader needs: rifle, loose powder, patched round ball, flint or caps, and eye and ear protection. A checklist saved on this phone. No prices.",
      },
    ],
  }),
  component: Gear,
});

function Gear() {
  const [have, setHave] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("siml-kit");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as unknown;
      if (Array.isArray(parsed)) setHave(parsed.filter((item) => typeof item === "string"));
    } catch {
      localStorage.removeItem("siml-kit");
    }
  }, []);

  function toggle(id: string) {
    setHave((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      localStorage.setItem("siml-kit", JSON.stringify(next));
      return next;
    });
  }

  const total = kit.length + pouch.length;

  return (
    <main>
      <PageHeader
        kicker="What you need"
        title="The basic pile. Nothing fancy."
        lede="Check off what you already own. The list stays on this phone. A first visit does not require the whole kit. The club said you can come try a shot for free. Call first."
      >
        <Link to="/new-shooters" className="btn btn-rust">
          Try it free
        </Link>
        <a href={`tel:${club.phoneTel}`} className="btn btn-line">
          Try it free: call Leon
        </a>
      </PageHeader>

      <section className="wrap grid gap-8 py-16">
        {kit.map((item, index) => (
          <article key={item.id} className="card grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]">
            <img src={item.src} alt={item.alt} className="aspect-3/2 h-full w-full object-cover" loading="lazy" />
            <div className="p-6 md:p-8">
              <p className="kicker">0{index + 1}</p>
              <h2 className="mt-2 font-display text-4xl text-forest">{item.name}</h2>
              <p className="mt-3 leading-relaxed">{item.what}</p>
              <label className="mt-5 flex min-h-12 items-center gap-3 font-semibold">
                <input
                  type="checkbox"
                  checked={have.includes(item.id)}
                  onChange={() => toggle(item.id)}
                  className="size-5 accent-rust"
                />
                I have this
              </label>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-line bg-cream/70">
        <div className="wrap py-16">
          <p className="kicker">Also in a working pouch</p>
          <h2 className="mt-3 font-display text-4xl text-forest">The small things.</h2>
          <p className="mt-3 max-w-2xl text-muted">No pictures for these. No prices either. Leon knows what the line is using. This list is the ordinary kit, not a shopping order.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {pouch.map((item) => (
              <li key={item.id} className="card p-5">
                <h3 className="font-display text-2xl text-forest">{item.name}</h3>
                <p className="mt-2 text-muted">{item.what}</p>
                <label className="mt-4 flex min-h-12 items-center gap-3 font-semibold">
                  <input
                    type="checkbox"
                    checked={have.includes(item.id)}
                    onChange={() => toggle(item.id)}
                    className="size-5 accent-rust"
                  />
                  I have this
                </label>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-muted">
            {have.length} of {total} checked on this phone. The checkmarks do not leave this device. Pictures show the kind of tool, not gear owned by the club. Do not load a rifle from a webpage.
          </p>
        </div>
      </section>

      <CallLeon body="If you are missing half the pile, that is normal. Call Leon and say so. A first visit does not wait on a perfect horn." />
    </main>
  );
}
