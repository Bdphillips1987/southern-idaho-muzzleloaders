import { createFileRoute } from "@tanstack/react-router";
import { CallLeon, PageHeader } from "@/components/editorial";
import { photos } from "@/lib/club";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Scenes made for the Southern Idaho Muzzleloaders site. They are not photographs of members. Magic Valley: Shoshone and Twin Falls.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <main>
      <PageHeader
        kicker="Gallery"
        title="Scenes for the site. Not member photographs."
        lede="The color of a canyon camp, a lock, and smoke on a sagebrush line. Real pictures of the club will replace these when members choose them. None of the faces here are members. None of the guns are claimed as club property."
      />
      <section className="wrap grid gap-8 py-16 sm:grid-cols-2">
        {photos.map((photo) => (
          <figure key={photo.src} className="card overflow-hidden">
            <img src={photo.src} alt={photo.alt} className="aspect-3/2 w-full object-cover" loading="lazy" />
            <figcaption className="p-5">
              <p className="font-display text-2xl text-forest">{photo.title}</p>
              <p className="mt-2 text-sm text-muted">{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </section>
      <CallLeon body="If you have a picture the club is willing to share, tell Leon. Until then, these stay labeled as scenes." />
    </main>
  );
}
