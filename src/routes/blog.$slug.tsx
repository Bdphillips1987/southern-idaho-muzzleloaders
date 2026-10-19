import { createFileRoute, Link } from "@tanstack/react-router";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — Southern Idaho Muzzleloaders` : "Note — Southern Idaho Muzzleloaders" },
        { name: "description", content: post?.dek ?? "Club field note." },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="wrap py-16">
        <h1 className="font-display text-4xl text-forest">That note is not here.</h1>
        <Link to="/blog" className="mt-4 inline-flex min-h-11 items-center font-semibold text-forest underline decoration-brass underline-offset-4">
          Back to the blog
        </Link>
      </main>
    );
  }

  const more = posts.filter((item) => item.slug !== post.slug);

  return (
    <main>
      <header className="border-b border-line bg-cream">
        <div className="wrap py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rust">
            {post.kicker} · {post.date}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-forest md:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{post.dek}</p>
        </div>
      </header>
      <article className="wrap max-w-3xl space-y-4 py-12 text-lg leading-relaxed">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link to="/newsletter" className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            Get the next note
          </Link>
          {" · "}
          <Link to="/gear" className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            See the basic kit
          </Link>
        </p>
      </article>
      {more.length > 0 ? (
        <section className="border-t border-line bg-cream/70">
          <div className="wrap py-10">
            <h2 className="font-display text-2xl text-forest">More notes</h2>
            <ul className="mt-4 space-y-2">
              {more.map((item) => (
                <li key={item.slug}>
                  <Link to="/blog/$slug" params={{ slug: item.slug }} className="font-semibold text-forest underline decoration-brass/60 underline-offset-4">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}
