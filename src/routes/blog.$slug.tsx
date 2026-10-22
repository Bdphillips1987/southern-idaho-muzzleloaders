import { createFileRoute, Link } from "@tanstack/react-router";
import { CallLeon, PageHeader } from "@/components/editorial";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — Southern Idaho Muzzleloaders` : "Note — Southern Idaho Muzzleloaders" },
        { name: "description", content: post?.dek ?? "A field note from Southern Idaho Muzzleloaders in the Magic Valley." },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: Missing,
});

function Missing() {
  return (
    <main className="wrap py-20">
      <h1 className="display text-forest">That note is not here.</h1>
      <Link to="/blog" className="btn btn-line mt-6">
        Back to the blog
      </Link>
    </main>
  );
}

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return <Missing />;

  const more = posts.filter((item) => item.slug !== post.slug);

  return (
    <main>
      <PageHeader kicker={`${post.kicker} · ${post.date}`} title={post.title} lede={post.dek} />
      <article className="wrap max-w-3xl space-y-5 py-14 text-lg leading-relaxed">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="flex flex-wrap gap-x-4 gap-y-2 pt-4">
          <Link to="/newsletter" className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            The newsletter
          </Link>
          <Link to="/gear" className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            See the basic kit
          </Link>
          <Link to="/new-shooters" className="font-semibold text-forest underline decoration-brass decoration-2 underline-offset-4">
            Try it free
          </Link>
        </p>
      </article>
      {more.length > 0 ? (
        <section className="border-t border-line bg-cream/70">
          <div className="wrap py-12">
            <h2 className="font-display text-3xl text-forest">More notes</h2>
            <ul className="mt-4 space-y-3">
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
      <CallLeon />
    </main>
  );
}
