import { FaPhoneAlt, FaLine, FaMapMarkerAlt } from "react-icons/fa";

export default function CardContact() {
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* ================= Contact (Left, smaller width) ================= */}
          <div className="lg:col-span-5 relative mt-6 flex flex-col h-full">
            {/* Tag */}
            <div className="absolute -top-5 left-6 rounded-xl bg-[#3c1c04] px-6 py-2 text-xl font-bold text-white shadow-md z-10">
              ติดต่อเรา
            </div>

            <div className="relative flex flex-col flex-1 justify-center rounded-[1.5rem] border-[2px] border-[#e1ccb7] bg-[#f0e4d8] px-6 py-8 shadow-lg h-full">
              <div className="flex flex-col gap-6 justify-center w-full">
                {/* Phone */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7a120d] text-2xl text-white shadow-md">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#5c5c5c] mb-0.5">
                      โทรศัพท์
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
                      081-9186348
                    </h2>
                  </div>
                </div>

                <hr className="border-[#d5be9e] border-t-2" />

                {/* LINE */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#06c755] text-2xl text-white shadow-md">
                    <FaLine />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#5c5c5c] mb-0.5">
                      LINE
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
                      @saengthong
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Map (Right, larger width) ================= */}
          <div className="lg:col-span-7 relative mt-6 flex flex-col h-full">
            {/* Tag */}
            <div className="absolute -top-5 left-6 rounded-xl bg-[#3c1c04] px-6 py-2 text-xl font-bold text-white shadow-md z-10">
              แผนที่ร้าน
            </div>

            <div className="relative flex flex-col flex-1 rounded-[1.5rem] border-[2px] border-[#e1ccb7] bg-[#f9f3eb] p-2 pt-10 shadow-lg h-full">
              
              {/* Map container */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#d5be9e] bg-gray-100 flex-1 min-h-[220px]">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=ตลาดไท&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Overlaid Button */}
                <a
                  href="https://maps.google.com/?q=ตลาดไท"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 rounded-xl bg-[#8b1d18] py-2 px-6 text-base lg:text-lg font-bold text-white transition-all duration-300 hover:bg-[#701510] hover:scale-[1.02] shadow-lg w-[85%] sm:w-[auto] whitespace-nowrap z-20"
                >
                  <FaMapMarkerAlt />
                  <span>คลิกเพื่อเปิดแผนที่ Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
