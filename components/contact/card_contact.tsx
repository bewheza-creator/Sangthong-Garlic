import { FaPhoneAlt, FaLine, FaMapMarkerAlt } from "react-icons/fa";

export default function CardContact() {
  return (
    <section className="w-full py-6 bg-transparent">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* ================= Contact (Left, smaller width) ================= */}
          <div className="lg:col-span-5 relative mt-6 flex flex-col">
            {/* Tag */}
            <div className="absolute -top-5 left-6 rounded-xl bg-[#3c1c04] px-6 py-2 text-lg font-bold text-white shadow-md z-10">
              ติดต่อเรา
            </div>

            <div className="relative flex flex-col rounded-[1.5rem] border border-[#e1ccb7] bg-[#fdf7f1] px-6 py-6 shadow-sm">
              <div className="flex flex-col gap-5 w-full mt-2">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7a120d] text-xl text-white shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#5c5c5c] mb-0.5">
                      โทรศัพท์
                    </p>
                    <h2 className="text-xl lg:text-2xl font-extrabold text-black tracking-tight">
                      <a href="tel:0819186348">081-9186348</a>
                    </h2>
                  </div>
                </div>

                <hr className="border-[#e1ccb7] border-t" />

                {/* LINE */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#06c755] text-2xl text-white shadow-sm">
                    <FaLine />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#5c5c5c] mb-0.5">
                      LINE
                    </p>
                    <a href="https://line.me/ti/p/cVxHNqTGAg" target="_blank" rel="noopener noreferrer">
                      <h2 className="text-xl lg:text-2xl font-extrabold text-black tracking-tight">
                        sangthong09
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Map (Right, larger width) ================= */}
          <div className="lg:col-span-7 relative mt-6 flex flex-col">
            {/* Tag */}
            <div className="absolute -top-5 left-6 rounded-xl bg-[#3c1c04] px-6 py-2 text-lg font-bold text-white shadow-md z-10">
              แผนที่ร้าน
            </div>

            <div className="relative flex flex-col rounded-[1.5rem] border border-[#e1ccb7] bg-[#fdf7f1] p-2 pt-8 shadow-sm">
              {/* Map container */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#e1ccb7] bg-gray-100 h-[180px]">
                \
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.9349243473807!2d100.6338197!3d14.081018799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8105ddcf0af5%3A0xfe4b446a6a7ed54c!2z4Lij4LmJ4Liy4LiZ4LmB4Liq4LiH4LiX4Lit4LiHICjguJXguKXguLLguJTguYTguJcp!5e0!3m2!1sth!2sth!4v1785689276131!5m2!1sth!2sth"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                {/* Overlaid Button */}
                <a
                  href="https://maps.app.goo.gl/Cm9vovEGSFmaQU4c6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 rounded-xl bg-[#8b1d18] py-2 px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#701510] shadow-md whitespace-nowrap z-20"
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
