"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function AdminSettings() {
  const [heroImage, setHeroImage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from("settings")
      .select("value")
      .eq("key", "product_hero_image")
      .single();
      
    if (data) {
      setHeroImage(data.value);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file && !heroImage) return toast.error("กรุณาเลือกรูปภาพ");
    
    setLoading(true);

    try {
      let imageUrl = heroImage;
      
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `hero_${Math.random()}.${fileExt}`;
        const filePath = `settings/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("images")
          .getPublicUrl(filePath);
        
        imageUrl = publicUrlData.publicUrl;
      }

      // Upsert the setting
      const { error: upsertError } = await supabase
        .from("settings")
        .upsert({ key: "product_hero_image", value: imageUrl });

      if (upsertError) throw upsertError;

      toast.success("บันทึกการตั้งค่าสำเร็จ!");
      setFile(null);
      fetchSettings();
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#3C2415]">ตั้งค่าหน้าเว็บ</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
        <h2 className="text-xl font-bold mb-4">รูปภาพปกหน้ารวมสินค้า (Hero Image)</h2>
        <p className="text-sm text-gray-500 mb-6">รูปภาพจะถูกนำไปแสดงเป็นวงกลมตรงกลางในหน้า `/product` แนะนำให้ใช้รูปภาพไฟล์ PNG ที่ไม่มีพื้นหลัง</p>
        
        <form onSubmit={handleSave} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 w-full space-y-2">
              <label className="block text-sm font-medium">อัปโหลดรูปภาพใหม่</label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>
            
            <div className="w-full md:w-48 flex flex-col items-center gap-2">
              <span className="text-sm font-medium text-gray-500">รูปภาพปัจจุบัน</span>
              <div className="w-48 h-48 rounded-full bg-[#EADDCE] flex items-center justify-center border-4 border-white shadow-md overflow-hidden relative">
                {file ? (
                  <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover" />
                ) : heroImage ? (
                  <img src={heroImage} alt="Current Hero" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-gray-400">ยังไม่มีรูปภาพ</span>
                )}
              </div>
            </div>
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto self-start bg-[#3C2415] hover:bg-[#2A1608]"
            size="lg"
          >
            {loading ? "กำลังบันทึก..." : "บันทึกการตั้งค่า"}
          </Button>
        </form>
      </div>
    </div>
  );
}
