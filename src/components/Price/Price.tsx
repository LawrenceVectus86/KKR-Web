import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import PriceTile from "../Ui/PriceTile";

function Price() {
  return (
    <section id="price">
      <div className="container-app py-[80px] flex flex-col items-center">
        {/* Section Title */}
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
          <h2 className="section-title pt-5 text-center">
            Investasi Untuk Merubah Masa Depanmu Sekarang!
          </h2>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-5 w-full lg:w-[80%] flex flex-col items-center justify-items-center"
        >
          {/* Header with Custom Gradient */}
          <div
            className="rounded-t-[10px] p-3 w-full"
            style={{
              background: 'linear-gradient(91.03deg, #0E3CBF 1.97%, #37D2F4 98.46%)',
            }}
          >
            <h6 className="text-lg md:text-xl lg:text-[28px] text-white font-bold text-center">
              Penawaran Terbatas!
            </h6>
          </div>

          {/* Pricing Box with Border */}
          <div className="border-[10px] border-blue-600 w-full rounded-b-[10px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              {/* Left Section (Price and Info) */}
              <div className="pl-4 md:pl-6 pr-4 md:pr-0 py-4 md:py-9">
                {/* Slot Terbatas Banner */}
                <div className="bg-blue-50 px-3 py-[9px] rounded-[5px]">
                  <h6 className="text-blue-600 font-bold text-base md:text-lg lg:text-xl">
                    SLOT TERBATAS!
                  </h6>
                </div>

                {/* Mentoring Class Info */}
                <h5 className="text-xl md:text-2xl lg:text-[32px] text-[#333333] font-semibold mt-6">
                  Full Mentoring Class
                </h5>

                {/* Old and New Price */}
                <div className="mt-4">
                  <p className="text-gray-500 text-base md:text-lg line-through">
                    Rp 14.500.000
                  </p>
                  <span className="text-blue-600 font-semibold ml-2">
                    Save 32%
                  </span>
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-[42px] text-[#333333] font-bold mt-2">
                  Rp 10.000.000
                </h4>

                {/* Button */}
                <div className="flex">
                  <a
                    href="https://wa.me/6282144234649"
                    target="_blank"
                    className="btn-primary mt-6 w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>

              {/* Right Section (What You'll Get) */}
              <div className="flex flex-col items-start justify-center m-6 md:m-0">
                <h6 className="text-lg text-gray-600 mb-4">What You’ll Get:</h6>
                <ul className="list-none space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✔️</span>
                    <span className="text-gray-700">Hard Skill Proficiency Class</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✔️</span>
                    <span className="text-gray-700">Soft Skill Expertise Class</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✔️</span>
                    <span className="text-gray-700">Access to Community</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✔️</span>
                    <span className="text-gray-700">Full Mentoring with Our CEO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✔️</span>
                    <span className="text-gray-700">1-on-1 Consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Price;
