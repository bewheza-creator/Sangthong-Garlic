import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";

export default async function Blog01() {
  const { data: posts } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="bg-[#fbf7f0] py-20 sm:py-28 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between text-center sm:text-left">
          <div>
            <p className="text-[#b91c1c] font-bold text-sm lg:text-base mb-2 uppercase tracking-wide">
              บทความและข่าวสาร
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#2d1b11] sm:text-4xl font-heading">
              อัปเดตล่าสุดจากร้านแสงทอง
            </h2>
          </div>
        </div>

        {!posts || posts.length === 0 ? (
          <div className="text-center py-20 text-[#5c4a3d]">
            ยังไม่มีบทความในขณะนี้
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex flex-col gap-4 rounded-[20px] border border-[#e6dccb] bg-[#f6efe6] p-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d4c8b6]"
              >
                <div className="aspect-[16/9] w-full rounded-xl bg-[#e6dccb] relative overflow-hidden">
                  <Image
                    src={post.image_url || "/images/product/garlic.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-3 px-2 pt-2">
                  <span className="text-xs font-bold text-[#b91c1c]">
                    {post.category}
                  </span>
                  <h3 className="text-balance text-lg font-bold leading-snug text-[#2d1b11] group-hover:text-[#b91c1c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-[#5c4a3d] text-pretty leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 px-2 pb-2 pt-4 text-xs font-medium text-[#5c4a3d]">
                  <span>{new Date(post.created_at).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span aria-hidden>·</span>
                  <span>{post.read_time}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

