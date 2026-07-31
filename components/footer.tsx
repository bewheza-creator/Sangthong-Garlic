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
    href: "https://line.me",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    href: "https://facebook.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    href: "tel:0812345678",
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
  { id: 1, name: "กระเทียม", href: "#" },
  { id: 2, name: "หอมแดง", href: "#" },
  { id: 3, name: "พริกแห้ง", href: "#" },
  { id: 4, name: "สินค้าร้านฯ", href: "#" },
];


export default function Footer() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="bg-[#2B1B12] max-w-7xl mx-auto w-full p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 my-6 shadow-xl">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-white">สนใจสั่งซื้อหอมราคาส่ง</h1>
          <p className="text-lg md:text-xl text-gray-200">สอบถามข้อมูลสินค้า หรือขอใบเสนอราคาได้เลย</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Link href="https://line.me" target="_blank" className="flex-1 sm:flex-none flex flex-row gap-3 bg-[#00B900] hover:bg-[#009900] transition rounded-xl px-8 py-4 items-center justify-center">
            <FaLine className="text-3xl text-white" />
            <span className="text-xl font-bold text-white tracking-wide">ทัก LINE</span>
          </Link>
          
          <a href="tel:0819186348" className="flex-1 sm:flex-none flex flex-row gap-3 bg-[#D4A373] hover:bg-[#C39363] transition rounded-xl px-8 py-4 items-center justify-center text-[#2B1B12]">
            <FaPhoneAlt className="text-3xl" />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-sm font-semibold">ติดต่อเรา</span>
              <span className="text-xl font-bold tracking-wide">081-9186348</span>
            </div>
          </a>
        </div>
      </div>
      <footer className="bg-[#3C2415] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <Image
                src="/logo-no-bg.png"
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
                  <Link
                    key={item.id}
                    href={item.href}
                    className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3C2415] transition"
                  >
                    {item.icon}
                  </Link>
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
                  <span>08x-xxx-xxxx</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <FaLine />
                  <span>@yourline</span>
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
