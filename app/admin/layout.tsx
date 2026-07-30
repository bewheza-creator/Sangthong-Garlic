import Link from "next/link";
import { FaList, FaBox, FaHome, FaCog } from "react-icons/fa";

export const metadata = {
  title: "Admin - Sangthong Garlic",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3C2415] text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-white/10">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/categories" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/10 transition">
            <FaList /> จัดการหมวดหมู่
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/10 transition">
            <FaBox /> จัดการสินค้า
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/10 transition">
            <FaCog /> ตั้งค่าหน้าเว็บ
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/10 transition">
            <FaHome /> กลับหน้าหลักเว็บ
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden bg-[#3C2415] text-white p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Admin Panel</div>
          <div className="flex gap-4">
            <Link href="/admin/categories" className="hover:text-gray-300"><FaList /></Link>
            <Link href="/admin/products" className="hover:text-gray-300"><FaBox /></Link>
            <Link href="/admin/settings" className="hover:text-gray-300"><FaCog /></Link>
            <Link href="/" className="hover:text-gray-300"><FaHome /></Link>
          </div>
        </header>

        <div className="p-6 md:p-10 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
