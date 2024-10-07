// import React from 'react';
import { motion } from "framer-motion";
import SkillCard from "../Skill/SkillCard";
import gambar from "../../assets/card/Card - Hardskill.png";
import gambar1 from "../../assets/card/Graphic Design  - Image.png"
import gambar2 from "../../assets/card/Social Media Specialist - Image.png"
import gambar3 from "../../assets/card/Web CMS - Image.png"
import gambar4 from "../../assets/card/E-Commerce - Image.png"
import gambar5 from "../../assets/card/UX Research - Image.png"

// Assuming this is the structure of your data
const hardSkills = [
  {
    id: 1,
    name: "Product Design",
    description: "Fundamental UI Design, wireframing, prototyping hingga usability testing.",
    image: gambar
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "Dasar desain grafis dengan Adobe, tipografi, dan teknik visual kreatif.",
    image: gambar1
  },
  {
    id: 3,
    name: "Social Media Specialist",
    description: "Kelola konten, interaksi user, dan analisis kinerja untuk tujuan bisnis.",
    image: gambar2
  },
  {
    id: 4,
    name: "Web CMS",
    description: "Buat website interaktif tanpa coding, menggunakan Web Builder.",
    image: gambar3
  },
  {
    id: 5,
    name: "E-Commerce",
    description: "Kelola produk dan strategi marketing untuk tingkatkan penjualan.",
    image: gambar4
  },
  {
    id: 6,
    name: "UX Research",
    description: "Metode riset pengguna, analisis data, dan pembuatan user persona.",
    image: gambar5
  }
];

function Skill() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 pt-5">Hard Skills Proficiency</h2>
        
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">
            Pilih Bidang yang Kamu Minati
          </h3>
          <p className="text-gray-600">
            Jelajahi Dunia Teknologi: Peran, Skill, dan Peluang di Luar Pemrograman
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {hardSkills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkillCard
                name={skill.name}
                description={skill.description}
                image={skill.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;