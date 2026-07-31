import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: post, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="bg-[#fbf7f0] min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8">
          <Link href="/blog" className="text-[#b91c1c] font-medium hover:underline">
            &larr; กลับไปหน้าบทความ
          </Link>
        </div>
        
        <header className="mb-10 text-center">
          <span className="text-[#b91c1c] font-bold text-sm uppercase tracking-wider mb-4 block">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#2d1b11] font-heading leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-[#5c4a3d] text-sm font-medium">
            <span>{new Date(post.created_at).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span aria-hidden>·</span>
            <span>{post.read_time}</span>
          </div>
        </header>

        <div className="relative w-full aspect-video rounded-[20px] overflow-hidden mb-12 shadow-md">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="prose prose-lg max-w-none text-[#5c4a3d] leading-relaxed pb-20">
          {/* If you add rich text support later, you would render HTML here */}
          <p className="whitespace-pre-line text-lg">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
}
