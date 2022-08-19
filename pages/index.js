import Features from "layouts/Features";
import Footer from "layouts/Footer";
import HeroSection from "layouts/HeroSection";
import Navbar from "layouts/Navbar";
import Roadmap from "layouts/Roadmap";

function index() {
  return (
    <div id="Home">
      <Navbar />
      <HeroSection />
      <div id="Features">
        <Features />
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}

export default index;
