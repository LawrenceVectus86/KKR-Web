import { motion } from "framer-motion";
import DonatedImg from "../../assets/images/donated.png";
import { fadeIn } from "../../variant";
function Donated() {
  return (
    <div className="flex flex-col lg:flex-row container-app py-5 md:py-[80px]">
      <div className="bg-cornflower-blue text-center h-[326px] flex items-center px-[15px] w-full lg:w-3/5">
        <motion.h1
          variants={fadeIn({ direction: "right", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-white text-xl lg:text-[32px] font-bold leading-tight"
        >
          “Sebagian dari pendapatan kami didonasikan ke panti asuhan dan orang
          tidak mampu.”
        </motion.h1>
      </div>
      <img
        src={DonatedImg}
        alt="donated"
        className="w-full lg:w-2/5 h-[226px] lg:h-[326px]"
      />
    </div>
  );
}

export default Donated;
