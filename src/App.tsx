import About from "./components/About/About";
import Donated from "./components/Donated/Donated";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Price from "./components/Price/Price";
import Skill from "./components/Skill/Skill";
import Story from "./components/Story/Story";
import Webinar from "./components/Webinar/Webinar";
import Card from "./components/Skill/Skill"


function App() {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Story />
        <Skill />
        <Webinar />
        <Card />
        <Price />
        <Faq />
        <Join />
        <Donated />
        <Footer />
      </div>
    </div>
  );
}

export default App;
