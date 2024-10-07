// import { fadeIn } from "../../variant";
// import StoryCard from "./StoryCard";
// import { motion } from "framer-motion";
import deborah from "../../assets/images/deborah.png"
// import icon2 from "../../assets/th.png"
import { Award, Trophy } from "lucide-react";

function Story() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
    <h1 className="text-2xl font-bold mb-4">
      Founder <span className="text-blue-500">KitaKerjaRemote</span>
    </h1>
    
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <img src={deborah} alt="Deborah Huda" className="rounded-lg w-30 h-30 object-cover mb-2" />
        <h2 className="text-xl font-semibold">Deborah Huda</h2>
        <p className="text-sm text-gray-600 mt-2">
          CEO remote di perusahaan milik asing (Ukraina) dan punya bisnis sendiri dengan klien dari Malaysia hingga Taiwan. Dia siap membagikan rahasia sukses kerja remote agar kamu bisa meraih pekerjaan impian, bebas dari macet, lebih dekat dengan keluarga, dan digaji dollar!
        </p>
        <p className="text-sm italic mt-2">
          Jika dia bisa, Kamu juga pasti bisa!
        </p>
      </div>
      
      <div className="md:w-2/3">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Current Positions</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <img src="/api/placeholder/20/20" alt="" className="mr-2" />
                <span>CEO of KitaKerjaRemote</span>
              </li>
              <li className="flex items-center">
                <img src="/api/placeholder/20/20" alt="" className="mr-2" />
                <span>CEO of Deborah Tech</span>
              </li>
              <li className="flex items-center">
                <img src="/api/placeholder/20/20" alt="" className="mr-2" />
                <span>CEO of Deborah Design LTD</span>
              </li>
              <li className="flex items-center">
                <img src="/api/placeholder/20/20" alt="" className="mr-2" />
                <span>Former CEO of PT Hydromarket Indonesia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Awards</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Finalist Merry Riana Entrepreneur Award 2023</span>
              </li>
              <li className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Top 20 Upward Startup Competition 2023 by Bandung Techno Park</span>
              </li>
              <li className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Best 115 Startup4industry Program by Kementerian Industry</span>
              </li>
              <li className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Best 120 Hackathon Program by East Ventures</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Certifications</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-500" />
                <span>BNSP Certified Digital Marketer</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-500" />
                <span>Google Certified UX Designer</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-500" />
                <span>Glints Certified Front End Developer</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-500" />
                <span>Freecodecamp Certified Front End Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Story;
