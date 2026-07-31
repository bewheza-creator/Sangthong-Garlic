"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBox, FaList, FaNewspaper, FaUsers, FaSignOutAlt, FaHome } from "react-icons/fa";
import { supabase } from "@/utils/supabase/client";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { toast } from "sonner";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("ออกจากระบบสำเร็จ");
    router.push("/admin/login");
    router.refresh();
  };

  const navItems = [
    { title: "เพิ่มรายการสินค้า", url: "/admin/products", icon: FaBox },
    { title: "จัดการหมวดหมู่", url: "/admin/categories", icon: FaList },
    { title: "สร้าง blog", url: "/admin/blogs", icon: FaNewspaper },
    { title: "จัดการผู้ใช้", url: "/admin/users", icon: FaUsers },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar className="border-r bg-white text-gray-900">
          <SidebarHeader className="p-6">
            <h2 className="text-xl font-bold text-[#3C2415]">Admin Panel</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>เมนูจัดการ</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton render={<Link href={item.url} className="flex items-center gap-3" />} isActive={pathname.startsWith(item.url)}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4 space-y-2 border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/" className="flex items-center gap-3" />}>
                  <FaHome />
                  <span>กลับหน้าหลักเว็บ</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <FaSignOutAlt />
                  <span>ออกจากระบบ</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col min-w-0">
          <header className="flex h-14 items-center gap-4 border-b bg-white px-6">
            <SidebarTrigger />
            <h1 className="font-semibold">จัดการระบบ</h1>
          </header>
          <div className="p-6 md:p-10 flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

