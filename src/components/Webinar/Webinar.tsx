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
    }, 10000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto bg-white overflow-hidden">
      <div className="py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-blue-600">Live Webinar</h1>
        <p className="text-lg sm:text-xl text-center font-bold mt-2">Ikuti Webinar dengan Mentor Terbaik</p>
        <div className="relative mt-6 sm:mt-10 h-[309px] overflow-hidden">
          <div 
            className="flex transition-transform duration-10000 ease-linear"
            style={{ transform: `translateX(-${activeIndex * (100 / cards.length)}%)` }}
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={`w-[360px] flex-shrink-0 px-5 transition-all duration-500 border-box ${
                  index === activeIndex ? 'scale-102 z-10 border-blue-500' : 'scale-100 z-0'
                }`}
              >
                <div className="border border-blue-500 rounded-lg shadow-lg p-4 h-full bg-white">
                  <div className="flex items-start mb-3">
                    <img src={card.icon} alt={`Icon representing ${card.title}`} className="w-16 h-16"/>
                  </div>
                  <h2 className="text-lg font-bold">{card.title}</h2>
                  <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
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
