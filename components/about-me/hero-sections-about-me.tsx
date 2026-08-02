import { Badge } from "@/components/ui/badge";

export default function HeroSectionAbout() {
  return (
    <section className="py-10 lg:py-16 bg-[#eae1d3]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <header className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-[#b91c1c] font-bold text-sm lg:text-base mb-2">
              เกี่ยวกับร้านแสงทอง
            </p>
            <h1 className="font-heading my-4 text-4xl text-balance md:text-5xl lg:leading-14 text-[#2d1b11] font-bold">
              ผู้จำหน่ายหอมกระเทียมพริกแห้งตลาดไท
              <br />
              <span className="text-[#b91c1c]">
                ราคาส่ง
              </span>
            </h1>
            <p className="text-[#5c4a3d] mb-8 text-balance lg:text-lg">
              ร้านแสงทองดำเนินธุรกิจจำหน่าย หอมแดง กระเทียม พริกแห้ง
              และวัตถุดิบเครื่องเทศ มายาวนานกว่า 20 ปี โดยมุ่งเน้นการคัดสรร
              สินค้าคุณภาพจากแหล่งผลิตโดยตรง เพื่อให้ลูกค้าได้รับสินค้า
              ได้มาตรฐาน ในราคาส่งที่คุ้มค่า
            </p>
          </header>
          <img
            src="/images/hero/hero.avif"
            alt="Garlic, onion, and dried chili"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
