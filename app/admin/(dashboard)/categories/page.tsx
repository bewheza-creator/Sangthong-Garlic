"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Edit } from "lucide-react";

export default function AdminCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Edit States
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [editName, setEditName] = useState("");
  const [editSubtitle, setEditSubtitle] = useState("");
  const [editFile, setEditFile] = useState<File | null>(null);
  const [editLoading, setEditLoading] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState("");

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
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `categories/${fileName}`;
        
        const { error: uploadError } = await supabase.storage.from("images").upload(filePath, file);
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(filePath);
        imageUrl = publicUrlData.publicUrl;
      }

      const { error: insertError } = await supabase.from("categories").insert([{ name, subtitle, image_url: imageUrl }]);
      if (insertError) throw insertError;

      toast.success("เพิ่มหมวดหมู่สำเร็จ!");
      setName("");
      setSubtitle("");
      setFile(null);
      fetchCategories();
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const openEditDialog = (cat: any) => {
    setEditingId(cat.id);
    setEditName(cat.name);
    setEditSubtitle(cat.subtitle || "");
    setCurrentImageUrl(cat.image_url || "");
    setEditFile(null);
    setIsEditOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName) return toast.error("กรุณากรอกชื่อหมวดหมู่");
    
    setEditLoading(true);
    let imageUrl = currentImageUrl;

    try {
      if (editFile) {
        const fileExt = editFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `categories/${fileName}`;
        
        const { error: uploadError } = await supabase.storage.from("images").upload(filePath, editFile);
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(filePath);
        imageUrl = publicUrlData.publicUrl;
      }

      const { error: updateError } = await supabase
        .from("categories")
        .update({ name: editName, subtitle: editSubtitle, image_url: imageUrl })
        .eq("id", editingId);

      if (updateError) throw updateError;

      toast.success("แก้ไขหมวดหมู่สำเร็จ!");
      setIsEditOpen(false);
      fetchCategories();
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setEditLoading(false);
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
            <label className="block text-sm font-medium mb-1">คำโปรย (เช่น คุณภาพดี ราคาส่ง)</label>
            <Input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="คุณภาพดี ราคาส่ง"
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

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>แก้ไขหมวดหมู่</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">ชื่อหมวดหมู่</Label>
              <Input
                id="edit-name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-subtitle">คำโปรย</Label>
              <Input
                id="edit-subtitle"
                value={editSubtitle}
                onChange={(e) => setEditSubtitle(e.target.value)}
                placeholder="คุณภาพดี ราคาส่ง"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-file">รูปภาพปกใหม่ (เว้นว่างหากใช้รูปเดิม)</Label>
              {currentImageUrl && !editFile && (
                <div className="mb-2">
                  <img src={currentImageUrl} alt="Current" className="w-16 h-16 object-cover rounded shadow" />
                </div>
              )}
              <Input
                id="edit-file"
                type="file"
                accept="image/*"
                onChange={(e) => setEditFile(e.target.files?.[0] || null)}
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={editLoading} className="bg-[#3C2415] hover:bg-[#5a3620]">
                {editLoading ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

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
                    <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 mr-2" onClick={() => openEditDialog(cat)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(cat.id)}>
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

