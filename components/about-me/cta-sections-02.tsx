import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-muted relative grid grid-cols-1 flex-col justify-between gap-4 overflow-hidden rounded-lg text-center lg:grid-cols-2 lg:flex-row lg:gap-10 lg:text-start">
          <header className="flex flex-col px-4 py-10 lg:px-10">
            <div className="mb-4 space-y-4">
              <h3 className="font-heading text-3xl text-balance md:text-4xl">
                ประสบการณ์มากกว่า 20 ปี
                <br />
                ที่เข้าใจความต้องการของลูกค้า
              </h3>
              <p className="text-muted-foreground md:text-lg">
                ด้วยประสบการณ์มากกว่า 20 ปี
                เราเข้าใจความต้องการของลูกค้าเป็นอย่างดี
                จึงพร้อมให้คำแนะนำเรื่องสินค้า ขนาดบรรจุ และการจัดส่ง
                เพื่อให้ลูกค้าได้รับ สินค้าที่เหมาะสมกับธุรกิจมากที่สุด
              </p>
            </div>
          </header>
          <figure className="relative lg:mt-10 lg:self-end">
            <Image
              className="lg:rounded-te-none aspect-video w-full rounded-tl-lg rounded-tr-lg object-cover lg:rounded-tr-none"
              width={300}
              height={300}
              src="/aboutme2.png"
              alt="aboutme2"
              unoptimized
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
