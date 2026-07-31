"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Dialog States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  // Form States
  const [editingId, setEditingId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error(error.message);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setExcerpt("");
    setContent("");
    setReadTime("");
    setFile(null);
    setCurrentImageUrl("");
    setEditingId("");
  };

  const uploadImage = async (imgFile: File) => {
    const fileExt = imgFile.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `blogs/${fileName}`;
    
    const { error: uploadError } = await supabase.storage.from("images").upload(filePath, imgFile);
    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(filePath);
    return publicUrlData.publicUrl;
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) return toast.error("กรุณากรอกหัวข้อและหมวดหมู่");
    
    setActionLoading(true);
    let imageUrl = "";

    try {
      if (file) {
        imageUrl = await uploadImage(file);
      }

      const { error } = await supabase.from("blogs").insert([
        { title, category, excerpt, content, read_time: readTime, image_url: imageUrl }
      ]);
      if (error) throw error;

      toast.success("เพิ่มบทความสำเร็จ!");
      setIsAddOpen(false);
      resetForm();
      fetchBlogs();
    } catch (err: any) {
      toast.error("Error: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const openEditDialog = (blog: any) => {
    setEditingId(blog.id);
    setTitle(blog.title || "");
    setCategory(blog.category || "");
    setExcerpt(blog.excerpt || "");
    setContent(blog.content || "");
    setReadTime(blog.read_time || "");
    setCurrentImageUrl(blog.image_url || "");
    setFile(null);
    setIsEditOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) return toast.error("กรุณากรอกหัวข้อและหมวดหมู่");
    
    setActionLoading(true);
    let imageUrl = currentImageUrl;

    try {
      if (file) {
        imageUrl = await uploadImage(file);
      }

      const { error } = await supabase.from("blogs").update(
        { title, category, excerpt, content, read_time: readTime, image_url: imageUrl }
      ).eq("id", editingId);
      
      if (error) throw error;

      toast.success("แก้ไขบทความสำเร็จ!");
      setIsEditOpen(false);
      resetForm();
      fetchBlogs();
    } catch (err: any) {
      toast.error("Error: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("ยืนยันการลบบทความนี้?")) {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) {
        toast.error("ลบข้อมูลล้มเหลว: " + error.message);
      } else {
        toast.success("ลบบทความเรียบร้อยแล้ว");
        fetchBlogs();
      }
    }
  };

  const BlogFormFields = () => (
    <>
      <div className="space-y-2">
        <Label>หัวข้อบทความ</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>หมวดหมู่</Label>
          <Input value={category} onChange={e => setCategory(e.target.value)} required placeholder="เช่น เคล็ดลับ" />
        </div>
        <div className="space-y-2">
          <Label>เวลาในการอ่าน</Label>
          <Input value={readTime} onChange={e => setReadTime(e.target.value)} placeholder="เช่น อ่าน 3 นาที" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>คำโปรย (Excerpt)</Label>
        <Input value={excerpt} onChange={e => setExcerpt(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label>เนื้อหาบทความ</Label>
        <textarea 
          className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>รูปภาพปก</Label>
        {currentImageUrl && (
          <div className="mb-2">
            <img src={currentImageUrl} alt="Current" className="w-24 h-16 object-cover rounded shadow" />
          </div>
        )}
        <Input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} />
      </div>
    </>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">จัดการบทความ (Blogs)</h1>
        <Dialog open={isAddOpen} onOpenChange={(val) => { setIsAddOpen(val); if(!val) resetForm(); }}>
          <DialogTrigger render={<Button className="bg-[#3C2415] hover:bg-[#5a3620]" />}>
            <FaPlus className="mr-2" /> สร้างบทความใหม่
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>สร้างบทความใหม่</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <BlogFormFields />
              <DialogFooter>
                <Button type="submit" disabled={actionLoading} className="bg-[#3C2415] hover:bg-[#5a3620]">
                  {actionLoading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Dialog open={isEditOpen} onOpenChange={(val) => { setIsEditOpen(val); if(!val) resetForm(); }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>แก้ไขบทความ</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <BlogFormFields />
            <DialogFooter>
              <Button type="submit" disabled={actionLoading} className="bg-[#3C2415] hover:bg-[#5a3620]">
                {actionLoading ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle>รายการบทความทั้งหมด</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">รูปภาพ</TableHead>
                <TableHead>หัวข้อ</TableHead>
                <TableHead>หมวดหมู่</TableHead>
                <TableHead>วันที่</TableHead>
                <TableHead className="text-right">จัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">กำลังโหลด...</TableCell>
                </TableRow>
              ) : blogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">ไม่มีข้อมูลบทความ</TableCell>
                </TableRow>
              ) : (
                blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell>
                      {blog.image_url ? (
                        <img src={blog.image_url} alt={blog.title} className="w-16 h-16 object-cover rounded" />
                      ) : (
                        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">ไม่มีรูป</div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell>{blog.category}</TableCell>
                    <TableCell>{new Date(blog.created_at).toLocaleDateString('th-TH')}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 mr-2" onClick={() => openEditDialog(blog)}>
                        <FaEdit />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(blog.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                        <FaTrash />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}


