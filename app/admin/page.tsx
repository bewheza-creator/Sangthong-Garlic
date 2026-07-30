import Link from "next/link";
import { FaList, FaBox, FaCog } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#3C2415]">ยินดีต้อนรับสู่ระบบจัดการ (Admin Panel)</h1>
      
      <p className="text-gray-600 mb-8 text-lg">
        คุณสามารถจัดการข้อมูลหมวดหมู่และสินค้าที่จะแสดงบนหน้าเว็บได้จากที่นี่
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/categories" className="group">
          <Card className="hover:shadow-md hover:border-[#3C2415] transition-all h-full">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2 text-[#3C2415]">
                <FaList className="text-4xl group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl font-bold">จัดการหมวดหมู่</CardTitle>
              </div>
              <CardDescription className="text-gray-600 text-base">
                เพิ่ม ลบ หรือแก้ไขชื่อหมวดหมู่ และอัปโหลดรูปภาพปกสำหรับแต่ละหมวดหมู่
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/admin/products" className="group">
          <Card className="hover:shadow-md hover:border-[#3C2415] transition-all h-full">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2 text-[#3C2415]">
                <FaBox className="text-4xl group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl font-bold">จัดการสินค้า</CardTitle>
              </div>
              <CardDescription className="text-gray-600 text-base">
                เพิ่ม ลบ รายการสินค้า และกำหนดว่าสินค้านั้นๆ อยู่ในหมวดหมู่ไหน พร้อมอัปโหลดรูปภาพ
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/admin/settings" className="group md:col-span-2">
          <Card className="hover:shadow-md hover:border-[#3C2415] transition-all h-full">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2 text-[#3C2415]">
                <FaCog className="text-4xl group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl font-bold">ตั้งค่าหน้าเว็บ</CardTitle>
              </div>
              <CardDescription className="text-gray-600 text-base">
                ตั้งค่ารูปภาพตกแต่งหน้าเว็บ เช่น รูปภาพปก (Hero Image) ของหน้ารวมสินค้า
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
