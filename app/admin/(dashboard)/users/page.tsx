"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { getAdminUsers, createAdminUser, deleteAdminUser, updateAdminUser } from "@/app/actions/admin-users";
import { supabase } from "@/utils/supabase/client";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
  // Dialog States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  // Form States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editingId, setEditingId] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUserId(user?.id || null);

      const data = await getAdminUsers();
      setUsers(data);
    } catch (err: any) {
      toast.error(err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
    
    setActionLoading(true);
    try {
      await createAdminUser(username, password);
      toast.success("เพิ่มผู้ใช้สำเร็จ!");
      setIsAddOpen(false);
      setUsername("");
      setPassword("");
      fetchUsers();
    } catch (err: any) {
      toast.error("Error: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      await updateAdminUser(editingId, password || undefined, username || undefined);
      toast.success("แก้ไขข้อมูลผู้ใช้สำเร็จ!");
      setIsEditOpen(false);
      setUsername("");
      setPassword("");
      fetchUsers();
    } catch (err: any) {
      toast.error("Error: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const openEditDialog = (user: any) => {
    setEditingId(user.id);
    setUsername(user.email.replace("@admin.com", ""));
    setPassword(""); // Keep password empty unless they want to change it
    setIsEditOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (id === currentUserId) {
      return toast.error("ไม่สามารถลบตัวเองที่กำลังล็อกอินอยู่ได้");
    }
    
    if (confirm("ยืนยันการลบผู้ใช้งานท่านนี้?")) {
      try {
        await deleteAdminUser(id);
        toast.success("ลบผู้ใช้เรียบร้อยแล้ว");
        fetchUsers();
      } catch (err: any) {
        toast.error("Error: " + err.message);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">จัดการผู้ใช้ (Users)</h1>
        
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger render={<Button className="bg-[#3C2415] hover:bg-[#5a3620]" />}>
            <FaPlus className="mr-2" /> เพิ่มผู้ใช้ใหม่
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>เพิ่มแอดมินใหม่</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">ชื่อผู้ใช้ (Username)</Label>
                <Input 
                  id="username" 
                  placeholder="เช่น john" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">รหัสผ่าน (Password)</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)}
                  required 
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={actionLoading} className="bg-[#3C2415] hover:bg-[#5a3620]">
                  {actionLoading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>แก้ไขข้อมูลผู้ใช้</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-username">ชื่อผู้ใช้ (Username)</Label>
              <Input 
                id="edit-username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-password">รหัสผ่านใหม่ (เว้นว่างไว้ถ้าไม่ต้องการเปลี่ยน)</Label>
              <Input 
                id="edit-password" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
            </div>
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
          <CardTitle>รายชื่อแอดมินระบบ</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username (Email)</TableHead>
                <TableHead>วันที่สมัคร</TableHead>
                <TableHead className="text-right">จัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-gray-500">กำลังโหลด...</TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-gray-500">ไม่พบผู้ใช้ (ถ้าเห็นข้อความนี้แปลว่าลืมใส่ SUPABASE_SERVICE_ROLE_KEY)</TableCell>
                </TableRow>
              ) : (
                users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">
                      {u.email.replace("@admin.com", "")} 
                      <span className="text-xs text-gray-400 ml-2">({u.email})</span>
                      {u.id === currentUserId && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">ฉัน</span>}
                    </TableCell>
                    <TableCell>{new Date(u.created_at).toLocaleDateString('th-TH')}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 mr-2" onClick={() => openEditDialog(u)}>
                        <FaEdit />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(u.id)}>
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

