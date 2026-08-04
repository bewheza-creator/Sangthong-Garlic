import Link from "next/link";
import { Van, StarCheck, Star, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaLine } from "react-icons/fa";
import HeroHome from "@/images/home.png"

export default function HeroSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <header className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge className="bg-[#4a3219] hover:bg-[#4a3219]/90 text-white rounded-full px-5 py-1.5 text-base font-medium mb-4 shadow-none border-none">ร้านแสงทอง</Badge>
            <h1 className="font-sans font-bold my-4 text-5xl text-balance md:text-6xl lg:leading-tight text-[#4a3219]">
              หอมแดง กระเทียม
              <br />
              พริกแห้ง <span className="text-[#a51d21]">ราคาส่ง</span>
            </h1>
            <p className="text-[#333333] font-medium mb-8 text-balance text-lg lg:text-xl leading-relaxed">
              จากแหล่งผลิตโดยตรง คัดคุณภาพ มีหน้าร้านที่
              <br />
              ตลาดไท สด ใหม่ ได้มาตรฐาน
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button
                className="bg-[#4a3219] hover:bg-[#4a3219]/90 text-white text-lg px-6 h-14 rounded-md flex gap-2 items-center shadow-none border-none"
                render={<Link href="/product_all" />}
                nativeButton={false}
              >
                <ShoppingCart className="w-5 h-5" /> ดูสินค้า
              </Button>
              <Button
                className="bg-[#06C755] hover:bg-[#06C755]/90 text-white text-lg px-6 h-14 rounded-md flex gap-2 items-center shadow-none border-none"
                render={<Link href="https://line.me/ti/p/cVxHNqTGAg" target="_blank" />}
                nativeButton={false}
              >
                <FaLine className="w-6 h-6" /> ติดต่อ LINE
              </Button>
            </div>
            <div className="flex flex-row justify-center items-center gap-2.5 mt-10">
              {/* <div className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <Van />
                  <div>
                    <h1 className="font-bold">จัดส่งรวดเร็ว</h1>
                    <h1 className="font-sans">ทั่วประเทศ</h1>
                  </div>
                </div>
              </div> */}
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <Star  />
                  <div>
                    <h1 className="font-bold">สินค้าคุณภาพดี</h1>
                    {/* <h1 className="font-sans">คัดพิเศษทุกล็อค</h1> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <StarCheck />
                  <div>
                    <h1 className="font-bold">ราคาส่ง</h1>
                    {/* <h1 className="font-sans">คุ้มค่า กำไรดี</h1> */}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <img
            src={HeroHome.src}
            alt="Dashboard interface of the SaaS platform"
            className="aspect-square w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
