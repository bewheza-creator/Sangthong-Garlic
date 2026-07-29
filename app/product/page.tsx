const posts = [
  {
    id: 1,
    category: "Engineering",
    title: "How we cut cold-start latency by 60% across all edge regions",
    excerpt:
      "A deep dive into our deployment pipeline refactor and the caching layer that changed everything about how we handle request distribution.",
    date: "May 28, 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "Design",
    title: "Building a token-first design system that scales across 12 products",
    excerpt:
      "Semantic tokens, dark mode, and the decision to move entirely to OKLCH. Here&apos;s what we learned after six months in production.",
    date: "May 14, 2025",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Product",
    title: "Shipping faster without breaking things: our new release cadence",
    excerpt:
      "Weekly releases used to terrify us. After restructuring our QA pipeline and adopting feature flags at the team level, they&apos;re routine.",
    date: "Apr 30, 2025",
    readTime: "5 min read",
  },
]

import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col gap-3.5 justify-center items-center">
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From the team
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="aspect-[16/9] w-full rounded-xl bg-muted" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-balance text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
