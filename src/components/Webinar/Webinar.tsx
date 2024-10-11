import { useState, useEffect } from 'react';

// Assume these imports are correct
import icon1 from "../../assets/icons/Icons - Live Webinar.png"
import icon2 from "../../assets/icons/12123.png"
import icon3 from "../../assets/icons/12112.png"
import icon4 from "../../assets/icons/121.png"

function Webinar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { icon: icon1, title: "Newest Technology", description: "Share teknologi terbaru untuk kerja remote yang bisa langsung kamu pakai." },
    { icon: icon2, title: "English Speaking Class", description: "Tips dan trik untuk lancar bahasa Inggris dengan klien atau atasan luar negeri." },
    { icon: icon3, title: "CV Review Session", description: "CV yang bisa menarik recruiter dalam dan luar negeri. Bukan hanya sekedar CV!" },
    { icon: icon4, title: "Lifelong Learning", description: "Bergabung bersama untuk belajar sepanjang hayat." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto bg-white overflow-hidden">
      <div className="py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-blue-600">Live Webinar</h1>
        <p className="text-lg sm:text-xl text-center font-bold mt-2">Ikuti Webinar dengan Mentor Terbaik</p>
        <div className="relative mt-6 sm:mt-10 h-80 sm:h-96 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out absolute left-0 right-0"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {[...cards, ...cards].map((card, index) => (
              <div 
                key={index} 
                className={`w-full sm:w-1/4 flex-shrink-0 px-2 transition-all duration-500 ${
                  index % cards.length === activeIndex ? 'scale-105 z-10' : 'scale-100 z-0'
                }`}
              >
                <div className="border border-blue-500 rounded-lg shadow-lg p-4 sm:p-6 h-full">
                  <div className="flex items-start mb-3 sm:mb-4">
                    <img src={card.icon} alt={`Icon representing ${card.title}`} className="w-12 h-12 sm:w-16 sm:h-16"/>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold">{card.title}</h2>
                  <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Webinar;