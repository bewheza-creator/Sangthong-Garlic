import Link from "next/link";
import { Van, StarCheck,Star  } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <header className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">จำหน่าย</Badge>
            <h1 className="font-heading my-4 text-4xl text-balance md:text-5xl lg:leading-14">
              หอมแดง กระเทียม
              <br />
              พริกปห้ง ราคาส่ง
            </h1>
            <p className="text-muted-foreground mb-8 text-balance lg:text-lg">
              จากแหล่งผลิตโดยตรง คัดคุณภาพทุกล็อต
              <br />
              สด ใหม่ ได้มาตรฐาน
            </p>
            <div className="flex justify-center gap-2">
              <Button
                render={<Link href="https://app.yoursaas.com/signup" />}
                nativeButton={false}
              >
                ดูสินค้า
              </Button>
              <Button
                variant="outline"
                render={<Link href="https://app.yoursaas.com/demo" />}
                nativeButton={false}
              >
                ติดต่อ LINE
              </Button>
            </div>
            <div className="flex flex-row justify-center items-center gap-2.5 mt-10">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <Van />
                  <div>
                    <h1 className="font-bold">จัดส่งรวดเร็ว</h1>
                    <h1 className="font-sans">ทั่วประเทศ</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <Star  />
                  <div>
                    <h1 className="font-bold">สินค้าคุณภาพดี</h1>
                    <h1 className="font-sans">คัดพิเศษทุกล็อค</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <StarCheck />
                  <div>
                    <h1 className="font-bold">ราคาส่ง</h1>
                    <h1 className="font-sans">คุ้มค่า กำไรดี</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <img
            src="/hero.avif"
            alt="Dashboard interface of the SaaS platform"
            className="aspect-square w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
