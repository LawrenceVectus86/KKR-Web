import { useState, useEffect } from 'react';

// Assume these imports are correct
import icon1 from "../../assets/icons/Icons - Live Webinar.png"
import icon2 from "../../assets/icons/12123.png"
import icon3 from "../../assets/icons/12112.png"
import icon4 from "../../assets/icons/121.png"

function Webinar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cards = [
    { icon: icon1, title: "Newest Technology", description: "Share teknologi terbaru untuk kerja remote yang bisa langsung kamu pakai." },
    { icon: icon2, title: "English Speaking Class", description: "Tips dan trik untuk lancar bahasa Inggris dengan klien atau atasan luar negeri." },
    { icon: icon3, title: "CV Review Session", description: "CV yang bisa menarik recruiter dalam dan luar negeri. Bukan hanya sekedar CV!" },
    { icon: icon4, title: "Lifelong Learning", description: "Bergabung bersama untuk belajar sepanjang hayat." },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const isMobile = windowWidth < 640;

  return (
    <section className="py-10 sm:py-8 px-4 sm:px-6 max-w-7xl mx-auto bg-white overflow-hidden relative">
      {/* Tombol Panah Kiri */}
      <button 
        onClick={handlePrev} 
        className="hidden sm:flex bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 absolute top-1/2 transform -translate-y-1/2 left-[-0px] z-20"
        style={{ fontSize: '24px', width: '40px', height: '40px', justifyContent: 'center', alignItems: 'center' }}
      >
        {"<"}
      </button>
      
      <div className="py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-blue-600">Live Webinar</h1>
        <p className="text-lg sm:text-xl text-center font-bold mt-2">Ikuti Webinar dengan Mentor Terbaik</p>
        <div className="relative mt-6 sm:mt-10 h-[309px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full max-w-4xl mx-auto"
            style={{
              transform: isMobile 
                ? `translateX(-${activeIndex * 100}%)`  // For mobile, use full width (100%)
                : `translateX(-${activeIndex * 360}px)`  // For desktop, move by card width (360px)
            }}
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={`w-full sm:w-[360px] flex-shrink-0 px-5 border-box ${  
                  index === activeIndex ? 'scale-104 z-10 border-blue-500' : 'scale-100 z-0'
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
      
      {/* Tombol Panah Kanan */}
      <button 
        onClick={handleNext} 
        className="hidden sm:flex bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 absolute top-1/2 transform -translate-y-1/2 right-[-0px] z-20"
        style={{ fontSize: '24px', width: '40px', height: '40px', justifyContent: 'center', alignItems: 'center' }}
      >
        {">"}
      </button>
      
      {/* Tombol di Mobile (ditampilkan di bawah carousel) */}
      <div className="sm:hidden flex justify-center space-x-4 mt-4">
        <button 
          onClick={handlePrev} 
          className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 flex justify-center items-center"
          style={{ fontSize: '24px', width: '50px', height: '50px' }}  // Konsistensi lebar dan tinggi
        >
          {"<"}
        </button>
        <button 
          onClick={handleNext} 
          className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 flex justify-center items-center"
          style={{ fontSize: '24px', width: '50px', height: '50px' }}  // Konsistensi lebar dan tinggi
        >
          {">"}
      </button>
    </div>

    </section>
  );
}

export default Webinar;
