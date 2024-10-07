import { useContext } from "react";
import { ToggleMobileMenu } from "../../context/ToggleMobileMenu";
import { navbarData } from "../../data/data";

function NavbarMobile() {
  const { show } = useContext(ToggleMobileMenu);
  return show == true ? (
    <div
      id="cardContainer"
      className="fixed top-0 left-0 h-full w-80 mt-[68px] overflow-hidden bg-white shadow-lg transition-all duration-300 z-10 flex lg:hidden"
    >
      <div className="w-full h-full px-8 py-3 relative">
        <div className="w-full h-auto flex flex-col gap-y-1 mt-6">
          {navbarData.map((item) => {
            return (
              <div key={item.id}>
                <a href={item.path} className="nav-link">
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NavbarMobile;
