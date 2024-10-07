import { faqs } from "../../data/data";
import FaqCollapse from "./FaqCollapse";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

function Faq() {
  return (
    <section id="faq" className="container-app py-5 md:py-16 lg:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        <motion.div
          variants={fadeIn({ direction: "left", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold">FAQ</h3>
          <p className="mt-2 text-sm md:text-base text-[#333333]">
            Punya pertanyaan lain? Kami siap membantu di{" "}
            <a href="mailto:tatia@deborah-tech.com!">tatia@deborah-tech.com!</a>
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="col-span-2"
        >
          {faqs.map((item) => {
            return (
              <FaqCollapse
                key={item.id}
                name={item.name}
                desc={item.description}
                open={item.id == 1 ? true : false}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
