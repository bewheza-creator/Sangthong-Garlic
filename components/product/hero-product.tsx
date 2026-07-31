import Image from "next/image";

export default function Hero_Product() {
  return (
    <section className="relative w-full bg-[#f8f1ea] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between min-h-[400px] py-12 md:py-0">
        
        {/* Text Content - Left Side */}
        <div className="flex flex-col gap-4 md:gap-6 z-10 w-full md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#3a2012] tracking-tight">
            กระเทียม
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a2e1b]">
            คุณภาพดี ราคาส่ง
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#5c3e29] mt-2">
            คัดสรรจากแหล่งผลิตโดยตรง
          </p>
          <div className="flex items-center gap-4 mt-2 max-w-[80%]">
            <div className="h-[1px] flex-1 bg-[#8c6d58]"></div>
            <p className="text-base md:text-lg font-bold text-[#5c3e29] whitespace-nowrap">
              สด ใหม่ สะอาด ได้มาตรฐาน
            </p>
            <div className="h-[1px] flex-1 bg-[#8c6d58]"></div>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-1/2 flex justify-end relative">
          {/* If garlic.png is just the basket, we can display it nicely on the right.
              The design shows a large image that blends into the background. */}
          <div className="relative w-full max-w-[600px] aspect-[4/3] md:aspect-square">
            <Image 
              src="/images/product/garlic.png" 
              alt="กระเทียมคุณภาพดี" 
              fill
              className="object-contain md:object-cover object-right mix-blend-multiply mask-l-from-50% mask-l-to-90%" 
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
