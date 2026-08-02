"use client";
import Image from "next/image";
/* eslint-disable react-hooks/set-state-in-effect */

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";

type Product = {
  id: string;
  name: string;
  image_url: string | null;
  created_at?: string;
};

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    // Fetch all products
    const { data: prodData, error: prodError } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
      
    if (prodError) console.error("Error fetching products:", prodError);
    else setProducts(prodData || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] min-h-screen font-sans">
      {/* Top Banner Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="flex flex-col text-center md:text-left text-[#4a3219] space-y-3 md:w-1/2">
          <h1 className="text-5xl md:text-[80px] font-black tracking-tight leading-none text-[#4a3219]">
            สินค้าอื่นๆ
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a3219] pt-4">
            คุณภาพดี ราคาส่ง
          </h2>
          <p className="text-xl md:text-2xl font-bold mt-2 text-[#4a3219]">
            คัดสรรจากแหล่งผลิตโดยตรง
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8 pt-4">
            <div className="h-[2px] w-16 bg-[#A38671]"></div>
            <span className="text-lg md:text-xl font-bold text-[#4a3219]">
              สด ใหม่ สะอาด ได้มาตรฐาน
            </span>
            <div className="h-[2px] w-16 bg-[#A38671]"></div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[600px] aspect-[4/3] rounded-3xl flex items-center justify-center relative overflow-hidden bg-transparent">
             <Image src="/images/home/home4.png" alt="Hero" width="500" height="500" className="object-contain" />
          </div>
        </div>
      </section>

      {/* Bottom Section: All Products List */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[2px] w-16 md:w-32 bg-[#A38671]"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#4A2D16]">
            รายการสินค้า
          </h3>
          <div className="h-[2px] w-16 md:w-32 bg-[#A38671]"></div>
        </div>

        {loading ? (
          <div className="text-center text-[#6D4527] text-lg">กำลังโหลดข้อมูล...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-[#6D4527] text-lg">ยังไม่มีสินค้าในระบบ</div>
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
