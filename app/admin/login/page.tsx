"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const trimmedUsername = username.trim();
    
    // แปลง Username ธรรมดาให้เป็นรูปแบบ Email สำหรับ Supabase Auth
    const emailToLogin = (trimmedUsername.includes("@") ? trimmedUsername : `${trimmedUsername}@admin.com`).toLowerCase();

    const { error } = await supabase.auth.signInWithPassword({
      email: emailToLogin,
      password: password,
    });

    if (error) {
      toast.error(error.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      setLoading(false);
    } else {
      toast.success("เข้าสู่ระบบสำเร็จ!");
      router.push("/admin/products");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>เข้าสู่ระบบสำหรับผู้ดูแลเว็บไซต์แสงทอง</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">ชื่อผู้ใช้</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="เช่น admin หรือ email@example.com" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">รหัสผ่าน (Password)</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#3C2415] hover:bg-[#5a3620]" disabled={loading}>
              {loading ? "กำลังเข้าระบบ..." : "เข้าสู่ระบบ"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

