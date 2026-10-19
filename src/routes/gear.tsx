import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const kit = [
  {
    id: "rifle",
    name: "The rifle",
    what: "A flintlock or a percussion muzzleloader. It loads from the muzzle, not from a magazine.",
    src: "/photos/flintlock.jpg",
    alt: "Flintlock lock, brass furniture, and a powder horn on leather",
  },
  {
    id: "charge",
    name: "Loose powder",
    what: "Black powder, or a substitute made for muzzleloaders, poured from a horn or flask. Not a cartridge.",
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

export const Route = createFileRoute("/gear")({
  head: () => ({
    meta: [
      { title: "Basic kit — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "What a traditional muzzleloader needs: rifle, loose powder, patched round ball, flint or caps, and eye and ear protection. Pictures of each.",
      },
    ],
  }),
  component: Gear,
});

function Gear() {
  const [have, setHave] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("siml-kit");
    if (stored) setHave(JSON.parse(stored) as string[]);
  }, []);

  function toggle(id: string) {
    setHave((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      localStorage.setItem("siml-kit", JSON.stringify(next));
      return next;
    });
  }

  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">What you need</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            The basic pile. Nothing fancy.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Check off what you already own. The rest can wait. A first visit does not require the whole kit — the club said you can come try a shot for free. Call first.
          </p>
          <Link to="/new-shooters" className="mt-5 inline-flex min-h-11 items-center bg-rust px-5 font-semibold text-cream hover:bg-forest">
            Try it free
          </Link>
        </div>
      </header>
      <section className="wrap grid gap-8 py-12">
        {kit.map((item) => (
          <article key={item.id} className="grid gap-4 border border-brass/40 bg-cream md:grid-cols-[1.1fr_0.9fr]">
            <img src={item.src} alt={item.alt} className="aspect-3/2 h-full w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-3xl text-forest">{item.name}</h2>
              <p className="mt-3 leading-relaxed">{item.what}</p>
              <label className="mt-4 flex min-h-11 items-center gap-3 font-semibold">
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
      <section className="wrap pb-4">
        <p className="text-muted">
          {have.length} of {kit.length} checked on this phone. Pictures show the kind of tool, not gear owned by the club. Do not load a rifle from a webpage. Wait for the line.
        </p>
      </section>
    </main>
  );
}
