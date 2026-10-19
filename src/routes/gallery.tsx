import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/lib/club";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "A holding gallery for Southern Idaho Muzzleloaders. Member photos from monthly shoots will replace these scenes.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Gallery</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Room for the club’s own pictures.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Shoots, members, Shoshone and Twin Falls, and the older stories. Those albums should be photographs the club chooses. Until then, these scenes only set the color of the place.
          </p>
        </div>
      </header>
      <section className="wrap grid gap-8 py-12 sm:grid-cols-2">
        {photos.map((photo) => (
          <figure key={photo.src} className="bg-cream">
            <img src={photo.src} alt={photo.alt} className="aspect-3/2 w-full object-cover" />
            <figcaption className="p-4">
              <p className="font-display text-2xl text-forest">{photo.title}</p>
              <p className="mt-1 text-sm text-muted">{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
