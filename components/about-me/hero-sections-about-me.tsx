import { Badge } from "@/components/ui/badge";

export default function HeroSectionAbout() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <header className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">เกี่ยวกับร้านแสงทอง</Badge>
            <h1 className="font-heading my-4 text-4xl text-balance md:text-5xl lg:leading-14">
              จัดหน่อย กระทียม และพริกแห้ง
              <br />
              ราคาส่ง มากกว่า 20 ปี
            </h1>
            <p className="text-muted-foreground mb-8 text-balance lg:text-lg">
              ร้านแสงทองดำเนินธุรกิจจำหน่าย หอมแดง กระเทียม พริกแห้ง
              และวัตถุดิบเครื่องเทศ มายาวนานกว่า 20 ปี โดยมุ่งเน้นการคัดสรร
              สินค้าคุณภาพจากแหล่งผลิดโดยตรง เพื่อให้ลูกค้าได้รับสินค้า
              ได้มาตรฐาน ในราคาส่งที่คุ้มค่า
            </p>
          </header>
          <img
            src="/images/hero/hero.avif"
            alt="Dashboard interface of the SaaS platform"
            className="aspect-square w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
