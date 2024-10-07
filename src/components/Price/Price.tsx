import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import PriceTile from "../Ui/PriceTile";
function Price() {
  return (
    <section id="price">
      <div className="container-app py-[80px] flex flex-col items-center">
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="intermezzo flex flex-col items-center justify-center"
        >
          <h6 className="text-base font-bold text-cornflower-blue">
            INVESTASI TERBAIK
          </h6>
          <h2 className="section-title pt-5">
            Investasi Untuk Merubah Masa Depanmu Sekarang!
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-5 w-full lg:w-[80%] flex flex-col items-center justify-items-center"
        >
          <div className="bg-cornflower-blue rounded-t-[10px] p-3 w-full">
            <h6 className="text-lg md:text-xl lg:text-[28px] text-white font-bold text-center">
              Penawaran Terbatas
            </h6>
          </div>
          <div className="border-[10px] border-cornflower-blue w-full rounded-b-[10px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <div className="pl-4 md:pl-6 pr-4 md:pr-0 py-4 md:py-9 ">
                <div className="bg-[#F3F7FF] px-3 py-[9px] rounded-[5px]">
                  <h6 className=" text-cornflower-blue font-bold text-base md:text-lg lg:text-xl">
                    SLOT TERBATAS!
                  </h6>
                </div>
                <h5 className="text-xl md:text-2xl lg:text-[32px] text-[#333333] font-semibold mt-6">
                  Full Mentoring Cohort
                </h5>
                <h4 className="text-2xl md:text-3xl lg:text-[42px] text-[#333333] font-bold mt-6">
                  Rp 10.000.000
                </h4>
                <div className="flex">
                  <a
                    href="https://wa.me/6282144234649"
                    target="_blank"
                    className="btn-primary mt-6 w-full text-center"
                  >
                    Investasi Sekarang
                  </a>
                </div>
                <p className="text-xs md:text-sm lg:text-base text-[#EF0000] mt-6">
                  *Segera daftar, hanya 25 orang peserta. Slot terbatas! Next
                  cohort dibuka mungkin 2-3 bulan lagi.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center m-6 md:m-0 ">
                <h6 className="text-lg text-[#999999] ">What You’ll get</h6>
                <div className="mt-4">
                  <PriceTile
                    className="mb-5"
                    text="Hard Skill Proficiency Class"
                  />
                  <PriceTile
                    className="mb-5"
                    text="Soft Skill Expertise Class"
                  />
                  <PriceTile className="mb-5" text="Access to Community" />
                  <PriceTile
                    className="mb-0"
                    text="Full Mentoring With Our CEO"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Price;
