import Verified from "../../assets/icons/verified.svg";
import Deborah from "../../assets/images/deborah.png";

const StoryCard = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 items-center">
      <img src={Deborah} alt="ceo" className="w-[80%] lg:w-[20%]" />
      <div className="flex flex-col ml-0 lg:ml-8">
        <h5 className="text-black font-semibold text-lg lg:text-2xl mt-5 lg:mt-0">
          Deborah Huda
        </h5>
        <h6 className="text-black text-base mt-[10px]">
          Chief Executive Officer
        </h6>
        <div className="flex flex-row mt-5 items-start">
          <img
            src={Verified}
            alt="verified"
            className="w-6 md:w-8 lg:w-[42px] h-6 md:h-8 lg:h-[42px]"
          />
          <span className="ml-3 md:ml-5 text-chicago font-medium text-sm md:text-base lg:text-lg">
            CEO kami, yang dulunya adalah seorang sales promotion girl, dan
            belum pernah lulus kuliah kini menjadi CEO secara remote di
            perusahaan yang dimiliki oleh orang asing [Ukraina]. Beliau juga
            mempunyai perusahaan sendiri yang berhasil mendapatkan client dari
            Malaysia sampai Taiwan. Dia siap membagikan rahasia kesuksesan untuk
            bisa bekerja secara remote agar kamu juga bisa mencapai pekerjaan
            impianmu dan tidak perlu hassle terkena macet setiap hari! Lebih
            dekat dengan keluarga dan digaji dolar! <br /> <br /> Jika dia yang
            belum mempunyai gelar sarjana saja bisa, apalagi kamu!
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
