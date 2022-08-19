import Features from "layouts/Features";
import HeroSection from "layouts/HeroSection";
import Navbar from "layouts/Navbar";

function index() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
}

export default index;
