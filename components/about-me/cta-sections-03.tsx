import Image from "next/image";

export default function CTASection2() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-muted relative grid grid-cols-1 flex-col justify-between gap-4 overflow-hidden rounded-lg text-center lg:grid-cols-2 lg:flex-row lg:gap-10 lg:text-start">
          <header className="flex flex-col px-4 py-10 lg:px-10">
            <div className="mb-4 space-y-4">
              <h3 className="font-heading text-3xl text-balance md:text-4xl">
                วิสัยทัศน์ของเรา
              </h3>
              <p className="text-muted-foreground md:text-lg">
                เรามุ่งมั่นเป็นศูนย์กลางการจำหน่าย หอมแดง กระเทียม พริกแห้ง
                และวัตถุดิบอาหารคุณภาพ ที่ลูกค้าทั่วประเทศไว้วางใจ
                ด้วยสินค้าคุณภาพ บริการจริงใจ และราคาที่ยุติธรรม
                เพื่อเป็นพันธมิตรที่เติบโดไปพร้อมกับธุรกิจของลูกค้า
              </p>
            </div>
          </header>
          <figure className="relative lg:mt-10 lg:self-end">
            <Image
              className="lg:rounded-te-none aspect-video w-full rounded-tl-lg rounded-tr-lg object-cover lg:rounded-tr-none"
              width={300}
              height={300}
              src="/images/about/me3.png"
              alt="shadcn landing page"
              unoptimized
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
