import {
  FaLeaf,
  FaTruckFast,
  FaShieldHeart,
} from "react-icons/fa6";

const stats = [
  {
    id: 1,
    name: "คัดสรรวัตถุดิบคุณภาพ สดใหม่ ได้มาตรฐาน",
    value: "สินค้าคุณภาพดี",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    name: "แพ็คอย่างดี ส่งไว ทั่วประเทศ",
    value: "จัดส่งได้ทั่วไทย",
    icon: <FaTruckFast />,
  },
  {
    id: 3,
    name: "รับประกันตรงปก มั่นใจได้",
    value: "มีราคาส่ง",
    icon: <FaShieldHeart />,
  },
];

export default function StatSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-muted/50 hover:bg-muted rounded-lg p-8 text-center transition-all duration-300"
            >
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#43250c] text-3xl text-white">
                  {stat.icon}
                </div>
              </div>

              <h3 className="mb-2 text-2xl font-bold">
                {stat.value}
              </h3>

              {/* <p className="text-muted-foreground">
                {stat.name}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}