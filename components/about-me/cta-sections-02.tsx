import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-12 lg:py-20 bg-[#eae1d3]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-[#f6efe6] relative grid grid-cols-1 flex-col justify-between gap-4 overflow-hidden rounded-[20px] shadow-sm text-center lg:grid-cols-2 lg:flex-row lg:gap-10 lg:text-start border border-[#e6dccb]">
          <header className="flex flex-col px-4 py-10 lg:px-12 justify-center">
            <div className="mb-4 space-y-6">
              <h3 className="font-heading text-3xl text-balance md:text-4xl text-[#2d1b11] font-bold">
                ประสบการณ์ที่มีมาอย่างยาวนาน
                <br />
                ที่เข้าใจความต้องการของลูกค้า
              </h3>
              <p className="text-[#5c4a3d] md:text-lg leading-relaxed">
                ด้วยประสบการณ์ที่มีมาอย่างยาวนาน
                เราเข้าใจความต้องการของลูกค้าเป็นอย่างดี
                จึงพร้อมให้คำแนะนำเรื่องสินค้า ขนาดบรรจุ และการจัดส่ง
                เพื่อให้ลูกค้าได้รับ สินค้าที่เหมาะสมกับธุรกิจมากที่สุด
              </p>
            </div>
          </header>
          <figure className="relative lg:mt-0 lg:self-stretch">
            <Image
              className="aspect-video lg:aspect-auto w-full h-full object-cover"
              width={500}
              height={500}
              src="/images/about/aboutme2.png"
              alt="Experience"
              unoptimized
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
