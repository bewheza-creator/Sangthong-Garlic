import Image from "next/image";
import Link from "next/link";
import herocontact from "../../public/images/about/me3.png";


export default function Hero_contact() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-[#faf0e6] pt-0 pb-16 overflow-hidden">
      
      {/* Top Background Image with Gradient Fade */}
      <div className="relative w-full h-[400px] md:h-[550px]">
        <Image 
          src="/images/about/me4.png"
          alt="ร้านแสงทอง" 
          fill 
          className="object-cover object-top"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf0e6]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#faf0e6] to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-32 md:-mt-48 z-10 flex flex-col lg:flex-row items-end justify-between">
        
        {/* Left Side: Garlic + Text */}
        <div className="flex flex-col lg:flex-row items-end gap-6 relative w-full lg:w-2/3">
          
          {/* Garlic Image */}
          <div className="hidden lg:block w-[280px] h-[280px] relative shrink-0 -ml-10 z-20">
            <Image src="/images/home/home1.png" alt="กระเทียม" fill className="object-contain drop-shadow-xl" unoptimized />
          </div>

          {/* Text Section (Left Aligned) */}
          <div className="flex flex-col items-start text-left w-full pb-8 z-30">
            <h2 className="text-xl md:text-3xl font-extrabold text-[#3C2415] mb-2 md:mb-3 tracking-wide">
              จัดจำหน่าย
            </h2>
            <h1 className="text-4xl md:text-[52px] lg:text-[60px] font-black mb-4 font-heading leading-[1.15] tracking-tight w-full max-w-none">
              <span className="text-[#990000]">กระเทียม</span> <span className="text-[#3C2415] whitespace-nowrap">และพริกแห้ง</span>
              <br />
              <span className="text-[#3C2415]">ราคาส่ง</span> <span className="text-[#990000] whitespace-nowrap">มากกว่า 20 ปี</span>
            </h1>
            <p className="text-base md:text-lg font-bold text-[#4a3628] mb-8 leading-relaxed max-w-xl text-pretty">
              ร้านแสงทองดำเนินธุรกิจจำหน่าย หอมแดง กระเทียม พริกแห้ง และวัตถุดิบเครื่องเทศ มายาวนานกว่า 20 ปี โดยมุ่งเน้นการคัดสรรสินค้าคุณภาพจากแหล่งผลิตโดยตรง เพื่อให้ลูกค้าได้รับสินค้าได้มาตรฐาน ในราคาส่งที่คุ้มค่า
            </p>

          </div>
        </div>

        {/* Right Side: Onions/Chilies */}
        <div className="hidden lg:block w-[380px] h-[380px] relative shrink-0 -mr-12 mb-4 z-20">
          <Image src="/images/home/home2.png" alt="หอมแดง พริกแห้ง" fill className="object-contain drop-shadow-xl" unoptimized />
        </div>

      </div>
    </div>
  );
}
