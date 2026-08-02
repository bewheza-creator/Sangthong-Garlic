"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
import { FaChevronLeft, FaLeaf, FaShieldAlt, FaHandshake } from "react-icons/fa";

type Category = {
  id: string;
  name: string;
  subtitle?: string | null;
  image_url: string | null;
};

type Product = {
  id: string;
  name: string;
  image_url: string | null;
  category_id: string;
};

export default function CategoryProductsPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    
    // Fetch category info
    const { data: catData } = await supabase
      .from("categories")
      .select("*")
      .eq("id", categoryId)
      .single();
      
    if (catData) setCategory(catData);

    // Fetch products
    const { data: prodData } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId)
      .order("created_at", { ascending: false });
      
    if (prodData) setProducts(prodData);
    
    setLoading(false);
  }, [categoryId]);

  useEffect(() => {
    if (categoryId) {
      fetchData();
    }
  }, [categoryId, fetchData]);

  if (loading) {
    return <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">กำลังโหลดข้อมูล...</div>;
  }

  if (!category) {
    return <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">ไม่พบหมวดหมู่นี้</div>;
  }

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] min-h-screen font-sans">
      {/* Top Banner Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col text-center md:text-left space-y-3 md:w-1/2">
          <Link href="/product_all" className="flex items-center justify-center md:justify-start gap-2 text-[#A38671] hover:text-[#6D4527] transition mb-2">
            <FaChevronLeft /> กลับไปหน้าหมวดหมู่
          </Link>
          
          <h1 className="text-6xl md:text-[100px] font-black tracking-tight leading-none text-[#990000] drop-shadow-sm mb-2">
            {category.name}
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C2415]">
            {category.subtitle || "คุณภาพดี ราคาส่ง"}
          </h2>
          
          <p className="text-xl md:text-2xl font-bold text-[#cc0000]">
            คัดสรรจากแหล่งผลิตโดยตรง
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-6 py-4">
            <div className="h-[1px] w-12 md:w-16 bg-[#A38671]"></div>
            <span className="text-lg font-bold text-[#3C2415]">
              สด ใหม่ สะอาด ได้มาตรฐาน
            </span>
            <div className="h-[1px] w-12 md:w-16 bg-[#A38671]"></div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 mt-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#3C2415] flex items-center justify-center text-[#3C2415]">
                <FaLeaf className="text-xl" />
              </div>
              <h4 className="font-bold text-[#3C2415] mt-1 text-sm md:text-base">สดใหม่</h4>
              <p className="text-xs md:text-sm text-gray-600">คัดสรรทุกเม็ด</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 border-l border-gray-300 md:pl-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#3C2415] flex items-center justify-center text-[#3C2415]">
                <FaShieldAlt className="text-xl" />
              </div>
              <h4 className="font-bold text-[#3C2415] mt-1 text-sm md:text-base">ได้มาตรฐาน</h4>
              <p className="text-xs md:text-sm text-gray-600">สะอาด ปลอดภัย</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 border-l border-gray-300 md:pl-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#3C2415] flex items-center justify-center text-[#3C2415]">
                <FaHandshake className="text-xl" />
              </div>
              <h4 className="font-bold text-[#3C2415] mt-1 text-sm md:text-base">ราคาส่งคุ้มค่า</h4>
              <p className="text-xs md:text-sm text-gray-600">สำหรับผู้ประกอบการ</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[600px] aspect-[4/3] md:aspect-[4/3] rounded-3xl flex items-center justify-center relative overflow-hidden bg-transparent">
             {category.image_url ? (
               <img src={category.image_url} alt={category.name} className="w-full h-full object-contain" />
             ) : (
               <div className="w-full h-full bg-[#EADDCE] flex items-center justify-center rounded-3xl">
                 <span className="text-[#6D4527] font-semibold">ไม่มีรูปภาพปก</span>
               </div>
             )}
          </div>
        </div>
      </section>

      {/* Bottom Section: Product List */}
      <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[2px] w-16 md:w-32 bg-[#A38671]"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#4A2D16]">
            รายการสินค้า
          </h3>
          <div className="h-[2px] w-16 md:w-32 bg-[#A38671]"></div>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-[#6D4527] text-lg">ยังไม่มีสินค้าในหมวดหมู่นี้</div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center gap-5">
                <div className="w-full aspect-square bg-white rounded-[32px] overflow-hidden flex items-center justify-center relative transition-transform hover:scale-105 duration-300 shadow-sm hover:shadow-md">
                   {product.image_url ? (
                     <img src={product.image_url} alt={product.name} className="w-full h-full object-contain" />
                   ) : (
                     <span className="text-[#6D4527] font-medium text-lg">ไม่มีรูปภาพ</span>
                   )}
                </div>
                <p className="text-xl md:text-2xl font-bold text-[#4A2D16] text-center">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
