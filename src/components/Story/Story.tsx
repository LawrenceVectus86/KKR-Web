// import React from 'react';
import deborah from '../../assets/images/deborah.png'
import { Trophy, Award } from 'lucide-react';

const FounderProfile = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
        Founder <span className="text-blue-500">KitaKerjaRemote</span>
      </h1>
      
      <div className="flex gap-6">
        <div className="w-1/4">
          <img src={deborah} alt="Deborah Huda" className="rounded-lg w-full h-auto object-cover mb-2" />
        </div>
        
        <div className="w-3/4">
          <h2 className="text-xl font-semibold">Deborah Huda</h2>
          
          <p className="text-sm text-gray-600 mt-2">
            CEO remote di perusahaan milik asing [Ukraine] dan punya bisnis sendiri dengan klien dari 
            Malaysia hingga Taiwan. Dia siap membagikan rahasia sukses kerja remote agar kamu bisa 
            meraih pekerjaan impian, bebas dari macet, lebih dekat dengan keluarga, dan digaji dollar!
          </p>
          
          <p className="text-sm italic mt-2">
            Jika dia bisa, Kamu juga pasti bisa!
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { name: 'CEO of KitaKerjaRemote', icon: '/api/placeholder/20/20' },
              { name: 'CEO of Deborah Tech', icon: '/api/placeholder/20/20' },
              { name: 'CEO of Deborah Design LTD', icon: '/api/placeholder/20/20' },
              { name: 'Former CEO of PT Hydromarket Indonesia', icon: '/api/placeholder/20/20' }
            ].map((role, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                <img src={role.icon} alt="" className="w-4 h-4 mr-1 rounded-full" />
                {role.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex gap-4">
        <div className="w-1/2">
          <h3 className="font-semibold mb-2">Awards</h3>
          <ul className="space-y-2">
            {[
              'Finalist Merry Riana Entrepreneur Award 2023',
              'Top 20 Upward Startup Competition 2023 by Bandung Techno Park',
              'Best 115 Startup/Industry Program by Kementerian Industry',
              'Best 120 Hackathon Program by East Ventures'
            ].map((award, index) => (
              <li key={index} className="flex items-center text-sm">
                <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                {award}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="font-semibold mb-2">Certifications</h3>
          <ul className="space-y-2">
            {[
              'BNSP Certified Digital Marketer',
              'Google Certified UX Designer',
              'Glints Certified Front End Developer',
              'Freecodecamp Certified Front End Developer'
            ].map((cert, index) => (
              <li key={index} className="flex items-center text-sm">
                <Award className="w-4 h-4 mr-2 text-green-500" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;