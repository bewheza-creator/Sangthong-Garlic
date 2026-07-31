import Image from "next/image";

export default function CTASection2() {
  return (
    <section className="pb-12 lg:pb-20 bg-[#eae1d3]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-[#f6efe6] relative grid grid-cols-1 flex-col justify-between overflow-hidden rounded-[20px] text-center lg:grid-cols-2 lg:flex-row lg:text-start shadow-sm border border-[#e6dccb]">
          <header className="flex flex-col px-6 py-10 lg:px-12 justify-center">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl md:text-4xl text-[#2d1b11] font-bold">
                วิสัยทัศน์ของเรา
              </h3>
              <p className="text-[#5c4a3d] md:text-lg leading-relaxed">
                เรามุ่งมั่นเป็นศูนย์กลางการจำหน่าย หอมแดง กระเทียม พริกแห้ง
                และวัตถุดิบอาหารคุณภาพ ที่ลูกค้าทั่วประเทศไว้วางใจ
                ด้วยสินค้าคุณภาพ บริการจริงใจ และราคาที่ยุติธรรม
                เพื่อเป็นพันธมิตรที่เติบโตไปพร้อมกับธุรกิจของลูกค้า
              </p>
            </div>
          </header>
          <figure className="relative h-64 lg:h-auto w-full">
            <Image
              className="object-cover"
              fill
              src="/images/about/me3.png"
              alt="Our Vision"
              unoptimized
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
