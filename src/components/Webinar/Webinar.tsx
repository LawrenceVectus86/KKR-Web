import icon1 from "../../assets/icons/Icons - Live Webinar.png"
import icon2 from "../../assets/icons/12123.png"
import icon3 from "../../assets/icons/12112.png"
import icon4 from "../../assets/icons/121.png"

function Webinar() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="py-10">
        <h1 className="text-3xl text-center font-bold text-blue-600">Live Webinar</h1>
        <p className="text-xl text-center font-bold mt-2">Ikuti Webinar dengan Mentor Terbaik</p>
        <div className="flex overflow-x-auto mt-10 space-x-4 px-4">
            <div className="border border-blue-500 rounded-lg shadow-lg p-6 w-80 flex-shrink-0">
                <div className="flex items-start mb-4">
                    <img src={icon1} alt="Icon representing Newest Technology" className="w-16 h-16"/>
                </div>
                <h2 className="text-lg font-bold">Newest Technology</h2>
                <p className="text-gray-600 mt-2">Share teknologi terbaru untuk kerja remote yang bisa langsung kamu pakai.</p>
            </div>
            <div className="border border-blue-500 rounded-lg shadow-lg p-6 w-80 flex-shrink-0">
                <div className="flex items-start mb-4">
                    <img src={icon2} alt="Icon representing English Speaking Class" className="w-16 h-16"/>
                </div>
                <h2 className="text-lg font-bold">English Speaking Class</h2>
                <p className="text-gray-600 mt-2">Tips dan trik untuk lancar bahasa Inggris dengan klien atau atasan luar negeri.</p>
            </div>
            <div className="border border-blue-500 rounded-lg shadow-lg p-6 w-80 flex-shrink-0">
                <div className="flex items-start mb-4">
                    <img src={icon3} alt="Icon representing CV Review Session" className="w-16 h-16"/>
                </div>
                <h2 className="text-lg font-bold">CV Review Session</h2>
                <p className="text-gray-600 mt-2">CV yang bisa menarik recruiter dalam dan luar negeri. Bukan hanya sekedar CV!</p>
            </div>
            <div className="border border-blue-500 rounded-lg shadow-lg p-6 w-80 flex-shrink-0">
                <div className="flex items-start mb-4">
                    <img src={icon4} alt="Icon representing Lifelong Learning" className="w-16 h-16"/>
                </div>
                <h2 className="text-lg font-bold">Lifelong Learning</h2>
                <p className="text-gray-600 mt-2">Bergabung bersama untuk belajar sepanjang hayat.</p>
            </div>
        </div>
    </div>
</section>
  );
}

export default Webinar;
