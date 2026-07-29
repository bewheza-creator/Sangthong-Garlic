import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="flex flex-col">
          <Badge variant="outline" className="w-fit">
            จำหน่าย
          </Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            หอมแดง กระเทียม
            <br />
            พริกแห้ง ราคาส่ง
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            จากแหล่งผลิตโดยตรง คดคุณภาพทุกล็อต
            <br />
            สด ใหม่ ได้มาตรฐาน
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button>ดูสินค้า</Button>
            <Button>ติดต่อ</Button>
          </div>
        </div>
        <div className="relative">
            <Image src="/hero.png" width={1000} height={1000} alt="Hero-img" />
        </div>
      </div>
    </section>
  );
}
