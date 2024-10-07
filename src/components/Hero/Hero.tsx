import { Button } from "react-scroll";
import IlustrationHeader from "../../assets/main.png";
import Line1 from "../../assets/icons/line.svg";
import Line2 from "../../assets/icons/line_2.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
function Hero() {
  return (
    <div>
      <div className="py-6"></div>
      <div
        id="home"
        className="bg-gradient-to-b  from-[#6495ED00] to-[#6495ED80] container-app py-24"
      >
        <div className="grid grid-flow-row lg:grid-cols-[60%_40%] items-center">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.2 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="pr-8"
          >
            <h1 className="font-bold text-black text-2xl md:text-4xl lg:text-5xl flex-col lg:leading-tight text-left">
              Siap{" "}
              <span className="absolute pl-2">
                Kerja dengan Skill
                <img
                  src={Line2}
                  alt="line-1-svg"
                  className="absolute -top-4 md:-top-8 -right-4 lg:-right-8 w-8 md:w-14"
                />
                <img src={Line1} alt="line-1-svg" className="w-28 lg:w-60" />
              </span>
              <br />
              Remote untuk Fresh Grads
            </h1>
            <h1 className="font-bold text-black text-2xl md:text-4xl lg:text-5xl flex-col lg:leading-tight text-left">
              di <span>KitaKerjaRemote!</span>
            </h1>
            <p className="text-base md:text-slg lg:text-xl text-chicago leading-8  pt-5">
            Baru Lulus & Belum Punya Pengalaman? Gak Masalah! Pelajari Skill untuk Mulai Karir Remote Kamu.
            </p>
            <Button
              to="price"
              className="btn-primary mt-9 drop-shadow-cornflower"
            >
              Daftar Sekarang
            </Button>
          </motion.div>
          <div>
            <motion.img
              variants={fadeIn({ direction: "left", delay: 0.2 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="hidden lg:block"
              src={IlustrationHeader}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
