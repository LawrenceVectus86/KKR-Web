import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { navbarData } from "../../data/data";
import NavLinkTo from "../Button/NavLinkTo";
import { Button, Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { ToggleMobileMenu } from "../../context/ToggleMobileMenu";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const { show, setShow } = useContext(ToggleMobileMenu);

  //   const { show, setShow } = useContext(ToggleMobileMenu);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <div>
      <div
        className={
          scroll
            ? " w-full fixed flex transition items-center ease-in-out duration-500 bg-white rounded-sm z-20"
            : "bg-transparent flex items-center w-full fixed transition ease-in-out duration-500 z-20"
        }
      >
        <nav className="w-full flex items-center justify-between px-5 md:px-[72px] py-6 md:py-3">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-[55px] md:h-[68px] w-[46px] md:w-[57px]"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            {navbarData.map((item) => {
              return (
                <div key={item.id}>
                  <NavLinkTo to={item.path} text={item.name} />
                </div>
              );
            })}
            <a
              href="https://wa.me/6282144234649"
              target="_blank"
              className="btn-primary"
            >
              Kontak Kami
            </a>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            <Button to="/" className="btn-primary">
              Kontak Kami
            </Button>
            <button
              onClick={() => {
                setShow(!show);
                console.log(show);
              }}
            >
              <IoMenu className="w-8 h-8" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
