import Features from "layouts/Features";
import HeroSection from "layouts/HeroSection";
import Navbar from "layouts/Navbar";
import Roadmap from "layouts/Roadmap";

function index() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Roadmap />
    </div>
  );
}

export default index;
