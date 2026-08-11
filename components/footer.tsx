import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLine,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const social = [
  {
    id: 1,
    icon: <FaLine />,
    href: "https://line.me/ti/p/cVxHNqTGAg",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    href: "tel:0819186348",
  },
];

const menu = [
  { id: 1, name: "หน้าแรก", href: "/" },
  { id: 2, name: "สินค้า", href: "/product" },
  { id: 3, name: "เกี่ยวกับเรา", href: "/about-me" },
  { id: 4, name: "บทความ", href: "/blog" },
  { id: 5, name: "ติดต่อเรา", href: "/contact" },
];

const product = [
  { id: 1, name: "กระเทียม", href: "/product/547bd4f5-a4b9-45a7-849c-9829d975502e" },
  { id: 2, name: "หอมแดง", href: "/product/a1cee72b-9503-491f-aaa3-3164de5b57a8" },
  { id: 3, name: "พริกแห้ง", href: "/product/8e4ef776-ae25-4933-94f5-b70f34d07de1" },
  { id: 4, name: "อื่นๆ", href: "/product/18fe19a0-fd84-4fd8-8d4c-b53fe202259f" },
];

export default function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-5 rounded-3xl bg-[#2B1B12] p-6 shadow-xl md:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              สนใจสั่งซื้อสินค้าราคาส่ง
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              สอบถามข้อมูลสินค้า หรือขอใบเสนอราคาได้เลย
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="https://line.me/ti/p/cVxHNqTGAg" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col w-full items-center justify-center gap-3 rounded-2xl bg-[#00B900] px-6 py-4 transition hover:bg-[#009900]">
              <FaLine className="text-3xl text-white" />
              <span className="text-xl font-bold tracking-wide text-white">
                ทัก LINE
              </span>
              <span className="text-xl font-bold tracking-wide text-white">
                sangthong09
              </span>
            </div>
            </a>

            <div className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#D4A373] px-6 py-4 text-[#2B1B12] transition hover:bg-[#C39363]">
              <FaPhoneAlt className="text-3xl" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-sm font-semibold">ติดต่อเรา</span>
                <span className="text-xl font-bold tracking-wide">
                  <a href="tel:0819186348">081-9186348</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#3C2415] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <Image
                src="/images/brand/logo-no-bg.png"
                alt="logo"
                width={170}
                height={170}
                className="mx-auto lg:mx-0"
              />

              <p className="mt-4 text-gray-300 leading-7">
                จัดจำหน่าย กระเทียม และพริกแห้ง
                <br />
                ราคาส่ง
              </p>

              <div className="flex justify-center lg:justify-start gap-3 mt-6">
                {social.map((item) => (
                  
                    <a key={item.id}
                    href={item.href}
                    className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3C2415] transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div className="text-center lg:text-left lg:border-l lg:border-white/20 lg:pl-8">
              <h2 className="text-xl font-bold mb-5">เมนู</h2>

              <ul className="space-y-3 text-gray-300">
                {menu.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div className="text-center lg:text-left lg:border-l lg:border-white/20 lg:pl-8">
              <h2 className="text-xl font-bold mb-5">สินค้า</h2>

              <ul className="space-y-3 text-gray-300">
                {product.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center lg:text-left lg:border-l lg:border-white/20 lg:pl-8">
              <h2 className="text-xl font-bold mb-5">ติดต่อเรา</h2>

              <div className="space-y-5 text-gray-300">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <FaPhoneAlt />
                  <span>081-9186348</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <FaLine />
                  <span>sangthong09</span>
                </div>

                <div className="flex items-start justify-center lg:justify-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0" />
                  <a href="https://maps.app.goo.gl/WKev4Dy9KFEbcSqz6">
                    <span>
                      ที่อยู่ 89/70 ตำบลคลองสอง
                      <br />
                      อำเภอคลองหลวง จังหวัดปทุมธานี 12120
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} ร้านแสงทอง. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
