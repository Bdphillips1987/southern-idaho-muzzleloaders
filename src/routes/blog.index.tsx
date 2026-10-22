import { createFileRoute, Link } from "@tanstack/react-router";
import { CallLeon, PageHeader } from "@/components/editorial";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Field notes from Southern Idaho Muzzleloaders: Shoshone shoots, Twin Falls valley notes, and plain talk on flintlock and percussion.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <PageHeader
        kicker="Field notes"
        title="Shoshone, Twin Falls, and the line."
        lede="Shoot dates, a plain how-to, and what is actually happening in the Magic Valley. Written for people who have done this for forty years and people who have not done it once."
      />
      <section className="wrap grid gap-5 py-16">
        {posts.map((post) => (
          <article key={post.slug} className="card p-6 md:p-8">
            <p className="kicker">
              {post.kicker} · {post.date}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-forest md:text-4xl">
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="underline decoration-brass/40 underline-offset-4 hover:decoration-brass">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-muted">{post.dek}</p>
          </article>
        ))}
      </section>
      <CallLeon body="The notes are here to read. A signup on the newsletter page stays on this phone. To be sure Leon knows you, call." />
    </main>
  );
}
