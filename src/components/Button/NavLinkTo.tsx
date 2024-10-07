import { Link } from "react-scroll";

function NavLinkTo({ to, text }: { to: string; text: string }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      offset={-140}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      activeClass="active"
      className="nav-link"
    >
      {text}
    </Link>
  );
}

export default NavLinkTo;
