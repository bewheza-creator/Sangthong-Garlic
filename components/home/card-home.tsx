import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "กระเทียม",
    details: "กระเทียมราคาส่ง คุณภาพคัดเกรด | ร้านแสงทอง ตลาดไท",
    img: "/images/home/home1.png",
    link: "/product/547bd4f5-a4b9-45a7-849c-9829d975502e",
    accent: {
      card: "bg-[#ede0f4]",
      title: "text-[#6f28a7]",
      button: "bg-[#7a32b4] hover:bg-[#68259b]",
    },
  },
  {
    id: 2,
    name: "หอมแดง",
    details: "หอมแดงราคาส่ง สดใหม่ทุกล็อต | ร้านแสงทอง ตลาดไท",
    img: "/images/home/home2.png",
    link: "/product/a1cee72b-9503-491f-aaa3-3164de5b57a8",
    accent: {
      card: "bg-[#f7e3cb]",
      title: "text-[#b45d12]",
      button: "bg-[#c06216] hover:bg-[#a94f10]",
    },
  },
  {
    id: 3,
    name: "พริกแห้ง",
    details: "พริกแห้งราคาส่ง เม็ดสวย คัดพิเศษ | ร้านแสงทอง ตลาดไท",
    img: "/images/home/home3.webp",
    link: "/product/8e4ef776-ae25-4933-94f5-b70f34d07de1",
    accent: {
      card: "bg-[#f6d8d8]",
      title: "text-[#bd2329]",
      button: "bg-[#bf262b] hover:bg-[#a61f24]",
    },
  },
  {
    id: 4,
    name: "อื่นๆ",
    details: "หอมเจียวราคาส่ง พริกไทราคาส่ง | ร้านแสงทอง ตลาดไท",
    img: "/images/home/home4.png",
    link: "/product/18fe19a0-fd84-4fd8-8d4c-b53fe2022597",
    accent: {
      card: "bg-[#d6e5ed]",
      title: "text-[#1676a0]",
      button: "bg-[#1e7ea7] hover:bg-[#176482]",
    },
  },
];

export default function Card_home() {
  return (
    <div className="mx-auto grid w-full max-w-[1860px] gap-4 px-3 py-3 sm:px-4 xl:grid-cols-4">
      {data.map((dataall) => (
        <div
          key={dataall.id}
          className={`flex min-h-[500px] flex-col overflow-hidden rounded-[18px] border border-white/50 px-4 pb-4 pt-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)] ${dataall.accent.card}`}
        >
          <div className="flex h-full flex-col">
            <h1 className={`text-[1.55rem] font-extrabold leading-none tracking-tight ${dataall.accent.title}`}>
              {dataall.name}
            </h1>
            <p className="mt-3 max-w-[16ch] text-[0.93rem] leading-6 text-slate-900/90">
              {dataall.details}
            </p>
            <div className="mt-auto flex min-h-[280px] items-end justify-center">
              <Image
                src={dataall.img}
                alt={dataall.name}
                width={340}
                height={260}
                className="h-[250px] w-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.08)]"
                priority={dataall.id === 1}
              />
            </div>
            <Link
              href={dataall.link}
              className={`mt-4 inline-flex w-fit items-center justify-center rounded-[9px] px-4 py-2.5 text-[0.95rem] font-semibold text-white transition-colors ${dataall.accent.button}`}
            >
              ดูสินค้า &gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
