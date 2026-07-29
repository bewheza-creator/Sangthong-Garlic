import Image from "next/image";
import { FaLeaf, FaTruckFast, FaShieldHeart, FaStore } from "react-icons/fa6";
import { FaHotel, FaShoppingCart, FaIndustry } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "ร้านอาหาร",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    name: "โรงแรม",
    icon: <FaHotel />,
  },
  {
    id: 3,
    name: "โรงงานแปรรูปอาหาร",
    icon: <FaIndustry />,
  },
  {
    id: 4,
    name: "ผู้ค้าส่ง",
    icon: <FaTruckFast />,
  },
  {
    id: 5,
    name: "ตลาดสด",
    icon: <FaStore />,
  },
  {
    id: 6,
    name: "ร้านค้าปลีก",
    icon: <FaShoppingCart />,
  },
  {
    id: 7,
    name: "ธุรกิจอาหารทุกขนาด",
    icon: <FaShieldHeart />,
  },
];

export default function CTASection1() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-muted relative grid grid-cols-1 flex-col justify-between gap-4 overflow-hidden rounded-lg text-center lg:grid-cols-2 lg:flex-row lg:gap-10 lg:text-start">
          <div className="flex flex-col px-4 py-10 lg:px-10">
            <div className="mb-4 space-y-4">
              <h3 className="font-heading text-3xl text-balance md:text-4xl">
                สถานที่ตั่งร้าน
              </h3>
              <p className="text-muted-foreground md:text-lg">
                ที่อยู่ 89/70 ตำบลคลองสอง อำเภอคลองหลวง จังหวัดปทุมธานี 12120
              </p>
              <div className="flex flex-row gap-2.5">
                <figure className="relative lg:mt-10 lg:self-end">
                  <Image
                    className="lg:rounded-te-none aspect-video w-full rounded-tl-lg rounded-tr-lg object-cover lg:rounded-tr-none"
                    width={300}
                    height={300}
                    src="https://images.unsplash.com/photo-1760346738721-235e811f573d?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="shadcn landing page"
                    unoptimized
                  />
                </figure>
                <figure className="relative lg:mt-10 lg:self-end">
                  <Image
                    className="lg:rounded-te-none aspect-video w-full rounded-tl-lg rounded-tr-lg object-cover lg:rounded-tr-none"
                    width={300}
                    height={300}
                    src="https://images.unsplash.com/photo-1760346738721-235e811f573d?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="shadcn landing page"
                    unoptimized
                  />
                </figure>
              </div>
              <p className="text-muted-foreground md:text-lg">
                ลูกค้าสามารถเดินทางเข้ามาเลือกขนสินค้า
                ตรวจสอบคุณภาพและรับสินค้าด้วยตนเองได้ทุกวัน
              </p>
            </div>
          </div>
          <div className="flex flex-col px-4 py-10 lg:px-10">
            <div className="mb-6">
              <h3 className="font-heading text-3xl md:text-4xl font-bold">
                ทางร้านรองรับลูกค้าทุกประเภท ไม่ว่าจะเป็น
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center gap-3 border border-border p-6 text-center transition hover:bg-muted/50"
                >
                  <div className="text-5xl text-[#43250c]">{item.icon}</div>

                  <p className="text-sm font-medium leading-6">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
