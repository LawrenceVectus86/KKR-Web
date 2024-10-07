import IlustratorAbout from "../../assets/main2.png";
import { fadeIn } from "../../variant";
import AboutTile from "../Ui/AboutTile";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about-us">
      <div className="grid md:grid-flow-row lg:grid-cols-2  container-app py-[80px]">
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="order-2 lg:order-1"
        >
          <h2 className="section-title">Kamu fresh graduate atau ingin switch career?</h2>
          <p className="section-description">
          Di KitakerjaRemote kamu dapat melatih berbagai skill sesuai dengan kebutuhan  untuk bekerja secara remote.
          </p>
          <div className="mt-[42px] w-full lg:w-[80%]">
            <h3 className="text-lg md:text-2xl font-semibold text-black mb-3">
              Apa familiar dengan masalah ini?
            </h3>
            <AboutTile text="Kesulitan mendapatkan pekerjaan pertama setelah lulus" />
            <AboutTile text="Kesulitan mendapatkan pekerjaan yang 100% WFH" />
            <AboutTile text="Kurangnya keterampilan yang dicari oleh perusahaan" />
            <AboutTile text="Pengalaman terbatas dalam lingkungan kerja remote" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="order-1 lg:order-2"
        >
          <img src={IlustratorAbout} alt="hero-about" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
