import Image from "next/image";
import { Utensils, Building, Factory, Package, Store, ShoppingCart, Building2, MapPin } from "lucide-react";

const data = [
  {
    id: 1,
    name: "ร้านอาหาร",
    icon: <Utensils strokeWidth={1.5} size={48} />,
  },
  {
    id: 2,
    name: "โรงแรม",
    icon: <Building strokeWidth={1.5} size={48} />,
  },
  {
    id: 3,
    name: "โรงงานแปรรูปอาหาร",
    icon: <Factory strokeWidth={1.5} size={48} />,
  },
  {
    id: 4,
    name: "ผู้ค้าส่ง",
    icon: <Package strokeWidth={1.5} size={48} />,
  },
  {
    id: 5,
    name: "ตลาดสด",
    icon: <Store strokeWidth={1.5} size={48} />,
  },
  {
    id: 6,
    name: "ร้านค้าปลีก",
    icon: <ShoppingCart strokeWidth={1.5} size={48} />,
  },
  {
    id: 7,
    name: "ธุรกิจอาหารทุกขนาด",
    icon: <Building2 strokeWidth={1.5} size={48} />,
  },
];

export default function CTASection1() {
  return (
    <section className="pb-12 lg:pb-20 bg-[#eae1d3]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-[#f6efe6] relative grid grid-cols-1 gap-4 overflow-hidden rounded-[20px] text-center lg:grid-cols-[4fr_6fr] lg:gap-10 lg:text-start p-6 lg:p-10 shadow-sm border border-[#e6dccb]">
          <div className="flex flex-col">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-2 text-[#4a2e1b]">
                <MapPin className="text-[#4a2e1b]" size={32} />
                สถานที่ตั้งร้าน
              </h3>
              <p className="text-[#5c4a3d] md:text-base font-medium leading-relaxed">
                89/70 อาคารพาณิชย์ คลองสอง<br/>
                Khlong Luang District, Pathum Thani 12120<br/>
                (ใกล้กับ ตลาดอารยา)
              </p>
              
              <div className="flex flex-row gap-2 mt-6 w-full">
                <figure className="relative w-1/2 aspect-[4/3]">
                  <Image
                    fill
                    className="object-cover rounded-md"
                    src="/images/about/me4.png"
                    alt="Store front"
                    unoptimized
                  />
                </figure>
                <figure className="relative w-1/2 aspect-[4/3]">
                  <Image
                    fill
                    className="object-cover rounded-md"
                    src="/images/about/me3.png"
                    alt="Map"
                    unoptimized
                  />
                </figure>
              </div>
              <p className="text-[#5c4a3d] text-sm mt-4 font-medium">
                ลูกค้าสามารถเดินทางเข้ามาเลือกชมสินค้า ตรวจสอบคุณภาพ<br className="hidden lg:block"/>
                และรับสินค้าด้วยตนเองได้ทุกวัน
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-[#e6dccb] pt-8 lg:pt-0 lg:pl-10">
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-[#4a2e1b] text-center lg:text-left">
                ทางร้านรองรับลูกค้าทุกประเภท ไม่ว่าจะเป็น
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-start gap-4 text-center"
                >
                  <div className="text-[#43250c]">{item.icon}</div>
                  <p className="text-sm font-semibold leading-tight text-[#4a2e1b] w-[90px]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
