"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export default function AdminCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching categories:", error);
      toast.error("ดึงข้อมูลหมวดหมู่ล้มเหลว");
    }
    else setCategories(data || []);
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return toast.error("กรุณากรอกชื่อหมวดหมู่");
    
    setLoading(true);
    let imageUrl = "";

    try {
      // 1. Upload Image
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `categories/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("images")
          .getPublicUrl(filePath);
        
        imageUrl = publicUrlData.publicUrl;
      }

      // 2. Insert Category
      const { error: insertError } = await supabase
        .from("categories")
        .insert([{ name, image_url: imageUrl }]);

      if (insertError) throw insertError;

      toast.success("เพิ่มหมวดหมู่สำเร็จ!");
      setName("");
      setFile(null);
      fetchCategories();
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("ยืนยันการลบหมวดหมู่นี้?")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) {
      toast.error("ลบข้อมูลล้มเหลว: " + error.message);
    } else {
      toast.success("ลบหมวดหมู่สำเร็จ");
      fetchCategories();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#3C2415]">จัดการหมวดหมู่</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
        <h2 className="text-xl font-bold mb-4">เพิ่มหมวดหมู่ใหม่</h2>
        <form onSubmit={handleAddCategory} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">ชื่อหมวดหมู่</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="เช่น กระเทียม"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">รูปภาพปก</label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-[#3C2415] hover:bg-[#2A1608]"
          >
            {loading ? "กำลังบันทึก..." : "เพิ่มหมวดหมู่"}
          </Button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold mb-4">รายการหมวดหมู่</h2>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">รูปภาพ</TableHead>
                <TableHead>ชื่อหมวดหมู่</TableHead>
                <TableHead className="text-right">จัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    ยังไม่มีข้อมูล
                  </TableCell>
                </TableRow>
              )}
              {categories.map((cat) => (
                <TableRow key={cat.id}>
                  <TableCell>
                    {cat.image_url ? (
                      <img src={cat.image_url} alt={cat.name} className="w-12 h-12 object-cover rounded shadow-sm" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-[10px] text-gray-400">ไม่มีรูป</div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{cat.name}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(cat.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
