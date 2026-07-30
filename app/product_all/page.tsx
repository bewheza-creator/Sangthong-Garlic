"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";

export default function AllProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch all products
    const { data: prodData, error: prodError } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
      
    if (prodError) console.error("Error fetching products:", prodError);
    else setProducts(prodData || []);
    
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF7F2] min-h-screen font-sans">
      {/* Top Banner Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="flex flex-col text-center md:text-left text-[#4A2D16] space-y-3 md:w-1/2">
          <h1 className="text-5xl md:text-[80px] font-black tracking-tight leading-none drop-shadow-sm text-[#4A2D16]">
            สินค้าทั้งหมด
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C3A21] pt-4">
            คุณภาพดี ราคาส่ง
          </h2>
          <p className="text-xl md:text-2xl font-bold mt-2 text-[#6D4527]">
            คัดสรรจากแหล่งผลิตโดยตรง
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8 pt-4">
            <div className="h-[2px] w-16 bg-[#A38671]"></div>
            <span className="text-lg md:text-xl font-bold text-[#6D4527]">
              สด ใหม่ สะอาด ได้มาตรฐาน
            </span>
            <div className="h-[2px] w-16 bg-[#A38671]"></div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[500px] aspect-square rounded-full flex items-center justify-center relative">
             <div className="w-full h-full bg-[#EADDCE] rounded-full flex items-center justify-center opacity-90 overflow-hidden relative border-8 border-[#FAF7F2] shadow-xl">
                <img src="/hero.png" alt="Hero" className="w-full h-full object-cover" />
             </div>
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
                <div className="w-full aspect-square bg-[#EADDCE] rounded-[32px] flex items-center justify-center relative overflow-hidden transition-transform hover:scale-105 duration-300 shadow-sm hover:shadow-md">
                   {product.image_url ? (
                     <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
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
