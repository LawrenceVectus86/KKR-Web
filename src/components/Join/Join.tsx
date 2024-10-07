import Abstract from "../../assets/icons/abstract.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

function Join() {
  return (
    <section id="join-now" className="bg-[#F7F7F8] container-app">
      <img src={Abstract} alt="icon" />
      <motion.div
        variants={fadeIn({ direction: "down", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="py-5 md:py-[80px] flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl md:text-3xl lg:text-[42px] font-semibold text-black pt-3 text-center">
          Saya Mau Merubah Hidup Sekarang
        </h1>
        <div className="flex flex-col items-center justify-center mt-5">
          <p className="text-sm md:text-base font-medium text-[#2F2F2F] text-center">
            Daftar Segera untuk Merubah hidup Anda dan bekerja secara WFH
            selamanya!
            <br />
            Dapatkan Materi Eksklusif dan Bimbingan Langsung dari Instruktur
            Berpengalaman.
          </p>
          <a
            href="https://wa.me/6282144234649"
            target="_blank"
            className="btn-primary mt-8 text-sm py-4 px-24"
          >
            Gabung Sekarang
          </a>
          <p className="mt-8 text-[#EF0000] text-xs text-center">
            *Segera daftar, hanya 25 orang peserta. Slot terbatas!
            <br /> Next cohort dibuka mungkin 2-3 bulan lagi.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Join;
