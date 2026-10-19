import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Southern Idaho Muzzleloaders" },
      {
        name: "description",
        content:
          "Club news and Magic Valley notes from Southern Idaho Muzzleloaders: Shoshone shoots, Twin Falls happenings, and black-powder how-tos.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">Field notes</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
            Shoshone, Twin Falls, and the line.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A blog the club can keep. Shoot dates, a plain how-to, and what is actually happening in the valley. Written for the people who have done this for forty years and the people who have not done it once.
          </p>
        </div>
      </header>
      <section className="wrap grid gap-6 py-12">
        {posts.map((post) => (
          <article key={post.slug} className="border border-brass/50 bg-cream p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brass">
              {post.kicker} · {post.date}
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-forest">
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="underline decoration-brass/50 underline-offset-4">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-muted">{post.dek}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
