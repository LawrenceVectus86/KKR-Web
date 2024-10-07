import { hardSkills, softSkills } from "../../data/data";
import { fadeIn } from "../../variant";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

function Live() {
  return (
    <section id="skills">
      <div className="container-app py-[80px]">
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="intermezzo"
        >
          <h2 className="section-title pt-5">Hard Skills Proficiency</h2>
        </motion.div>

        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center justify-center mt-10"
        >
          <div className="flex flex-col items-center justify-center w-full md:w-[80%] lg:w-[60%]">
            <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-center">
              Pilih Bidang yang Kamu Minati
            </h3>
            <p className="pt-3 md:pt-4 lg:pt-6 text-chicago text-xs md:text-base lg:text-xl font-bold text-center">
              Navigating the Tech Landscape: Roles, Skills, and Opportunities
              Outside of Programming
            </p>
          </div>
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.2 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6"
          >
            {hardSkills.map((item) => {
              return (
                <SkillCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <div className="container-app py-[80px]">
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="intermezzo"
        >
          <h2 className="section-title pt-5">Soft Skills Proficiency</h2>
        </motion.div>

        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center justify-center mt-10"
        >
          <div className="flex flex-col items-center justify-center w-full md:w-[80%] lg:w-[60%]">
            <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-center">
              Soft Skill Expertise
            </h3>
            <p className="pt-3 md:pt-4 lg:pt-6 text-chicago text-xs md:text-base lg:text-xl font-bold text-center">
              Cultivating Essential Interpersonal Skills for Career Success
            </p>
          </div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.2 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6"
          >
            {softSkills.map((item) => {
              return (
                <SkillCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Live;

SKILL