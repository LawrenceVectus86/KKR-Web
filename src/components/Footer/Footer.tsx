import { BsInstagram, BsLinkedin, BsTiktok, BsYoutube } from "react-icons/bs";
import LogoMain from "../../assets/images/logo-main.png";

function Footer() {
  return (
    <section className="container-app py-5 md:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-8">
        <div className="md:col-span-2 w-full md:w-[80%]">
          <img src={LogoMain} alt="logo" className="w-20 md:w-32" />
          <p className="text-sm md:text-base text-black mt-4">
            Masukkan data kamu untuk tau update terbaru tetang bagaimana cara
            kerja remote!
          </p>
          <div className="mt-6">
            <div className="flex flex-col">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScCLs-9OcrLTDAFZiogyIzRAOrB0wJ4KxiXHQ-E4DE4V-epdQ/viewform?usp=sf_link"
                target="_blank"
                className="border border-black  py-4 px-6 rounded text-sm md:text-base text-center"
              >
                Saya Mau Info Terbaru Di Email Saya
              </a>
              <p className="mt-4 text-xs">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-base font-semibold  pb-2 border-b border-black">
            Location
          </h5>
          <div className="flex flex-col mt-4">
            <h6 className="text-base font-bold">United Kingdom</h6>
            <p className="text-sm pt-1">
              71-75 Shelton Street, London, England Great Britain
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <h6 className="text-base font-bold">Indonesia</h6>
            <p className="text-sm pt-1">
              SOHO Collins Boulevard Collins Boulevard - F.O.R (SOHO) A 0206 Jl.
              MH. Thamrin, Kota Tangerang
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-base font-semibold  pb-2 border-b border-black">
            Contact
          </h5>
          <div className="flex flex-col mt-4">
            <h6 className="text-base font-bold">Email</h6>
            <p className="text-sm pt-1">
              <a href="mailto:tatia@deborah-tech.com">tatia@deborah-tech.com</a>
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <h6 className="text-base font-bold">Phone</h6>
            <p className="text-sm pt-1">
              <a href="https://wa.me/6282144234649" target="_blank">
                +62 821 4423 4649
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-base font-semibold  pb-2 border-b border-black">
            Follow Us
          </h5>
          <ul className="mt-4">
            <li className="py-2">
              <a
                href="https://www.instagram.com/kitakerjaremote/"
                target="_blank"
                className="footer-link flex items-center"
              >
                <BsInstagram className="w-5 h-5 mr-3" />
                Instagram
              </a>
            </li>
            <li className="py-2">
              <a
                href="https://www.linkedin.com/company/kita-kerja-remote/"
                target="_blank"
                className="footer-link flex items-center"
              >
                <BsLinkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </a>
            </li>
            <li className="py-2">
              <a
                href="https://www.youtube.com/@kitakerjaremote"
                target="_blank"
                className="footer-link flex items-center"
              >
                <BsYoutube className="w-5 h-5 mr-3" />
                Youtube
              </a>
            </li>
            <li className="py-2">
              <a
                href="https://www.tiktok.com/@kitakerjaremote8?_t=8pROqdEdp1s&_r=1"
                target="_blank"
                className="footer-link flex items-center"
              >
                <BsTiktok className="w-5 h-5 mr-3" />
                Tiktok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#000000] mt-[60px]">
        <div className="flex mt-8">
          <p className="text-sm">
            KitaKerjaRemote is a part of PT Deborah Teknologi berjaya and
            Deborah Design LTD
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <p className="text-sm">
            © 2024 Created by KitaKerjaRemote. All rights reserved.
          </p>
          <div className="flex mt-3 md:mt-0">
            <a
              href="https://docs.google.com/document/d/1y4KhQq3W2qZgublQyyQfZMOGeahHzvU_YBiyP_XAQbg/edit?usp=sharing"
              target="_blank"
              className="text-sm cursor-pointer underline underline-offset-4 mr-6"
            >
              Privacy Policy
            </a>
            <a
              href="https://docs.google.com/document/d/1M_DkN__yVmQqQ6LI6x7lqx3NM3rpb7D79UkNzOn6kxc/edit?usp=sharing"
              target="_blank"
              className="text-sm cursor-pointer underline underline-offset-4 mr-6"
            >
              Terms of Service
            </a>
            <a
              href=" https://docs.google.com/document/d/1a_1Md-TymuITgOgHAou9SB9iR9YVQIZuX0Mfq53yhmo/edit?usp=sharing"
              target="_blank"
              className="text-sm cursor-pointer underline underline-offset-4"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs mt-6 md:mt-[60px]">
        Disclaimer: kami tidak menjamin 100% kamu akan mendapatkan pekerjaan
        remote/ freelance tapi kami akan berusaha yang terbaik yang bisa kami
        lakukan untuk membantu kamu mendapatkan pekerjaan remote pertama kamu.
      </p>
    </section>
  );
}

export default Footer;
