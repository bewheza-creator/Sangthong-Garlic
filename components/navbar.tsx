"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaLine, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { supabase } from "@/utils/supabase/client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("*").order("created_at", { ascending: false });
      if (data) setCategories(data);
    };
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setMobileCatOpen(false); // Reset submenu state when closing
  };

  return (
    <nav className="bg-[#3C2415] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo-no-bg.png"
            alt="ร้านแสงทอง"
            width={150}
            height={50}
            className=""
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm md:text-base font-medium h-full">
          <Link href="/" className="hover:text-gray-300 transition">หน้าแรก</Link>
          
          <div className="relative group h-full flex items-center">
            <Link href="/product_all" className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition h-full px-2">
              สินค้า
              <FaChevronDown className="text-[10px] mt-1" />
            </Link>
            
            {/* Dropdown Menu Desktop */}
            {categories.length > 0 && (
              <div className="absolute top-[72px] left-0 mt-0 w-48 bg-white text-[#3C2415] shadow-lg rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-[#D4A373]">
                {categories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    href={`/product/${cat.id}`} 
                    className="block px-4 py-3 hover:bg-gray-100 hover:text-[#D4A373] transition border-b border-gray-100 last:border-0"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/about-me" className="hover:text-gray-300 transition">เกี่ยวกับเรา</Link>
          <Link href="/blog" className="hover:text-gray-300 transition">บทความ</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">ติดต่อเรา</Link>
        </div>

        {/* Contact Info & Button */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:0819186348" className="flex items-center gap-2 font-medium hover:text-gray-300 transition">
            <FaPhoneAlt className="text-lg md:text-xl" />
            <span className="text-sm md:text-base">081-918-6348</span>
          </a>
          <Link
            href="https://line.me"
            target="_blank"
            className="flex items-center gap-2 bg-[#00B900] hover:bg-[#009900] transition px-4 py-2 rounded-lg font-bold"
          >
            <FaLine className="text-2xl" />
            <span className="text-sm md:text-base tracking-wide">ทัก LINE</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 text-white hover:text-gray-300 transition focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#2B1B12] px-4 pt-2 pb-6 flex flex-col gap-0 shadow-inner border-t border-[#3C2415]">
          <Link href="/" onClick={toggleMenu} className="hover:text-gray-300 transition py-3 border-b border-white/10 font-medium">หน้าแรก</Link>
          
          <div className="flex flex-col border-b border-white/10">
            <div className="flex items-center justify-between py-3 font-medium">
              <Link href="/product_all" onClick={toggleMenu} className="flex-1 hover:text-gray-300 transition">สินค้า</Link>
              {categories.length > 0 && (
                <button onClick={() => setMobileCatOpen(!mobileCatOpen)} className="p-2 -mr-2">
                  <FaChevronDown className={`text-xs transition-transform ${mobileCatOpen ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
            {mobileCatOpen && categories.length > 0 && (
              <div className="flex flex-col bg-[#1A0F09] -mx-4 px-4 py-2">
                {categories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    href={`/product/${cat.id}`} 
                    onClick={toggleMenu}
                    className="py-2 pl-4 text-sm text-gray-300 hover:text-white transition"
                  >
                    - {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/about-me" onClick={toggleMenu} className="hover:text-gray-300 transition py-3 border-b border-white/10 font-medium">เกี่ยวกับเรา</Link>
          <Link href="/blog" onClick={toggleMenu} className="hover:text-gray-300 transition py-3 border-b border-white/10 font-medium">บทความ</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-gray-300 transition py-3 border-b border-white/10 font-medium">ติดต่อเรา</Link>
          
          <div className="flex flex-col gap-3 mt-4">
            <a href="tel:0819186348" className="flex items-center justify-center gap-2 font-medium hover:text-white text-gray-200 transition py-3 border border-white/20 rounded-lg">
              <FaPhoneAlt className="text-lg" />
              <span>081-918-6348</span>
            </a>
            <Link
              href="https://line.me"
              target="_blank"
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 bg-[#00B900] hover:bg-[#009900] transition px-4 py-3 rounded-lg font-bold text-white"
            >
              <FaLine className="text-2xl" />
              <span className="tracking-wide">ทัก LINE</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
