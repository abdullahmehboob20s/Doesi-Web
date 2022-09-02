import AirDrop from "layouts/AirDrop";
import Footer from "layouts/Footer";
import HowItWorks from "layouts/HowItWorks";
import Navbar from "layouts/Navbar";
import SkinsLocated from "layouts/SkinsLocated";
import WhatIsBurningNFTS from "layouts/WhatIsBurningNFTS";

function Tutorial() {
  return (
    <div id="tutorial-page">
      <Navbar />
      <div className="md:mb-100px">
        <AirDrop />
      </div>
      <div className="mb-200px">
        <HowItWorks />
      </div>
      <div className="mb-200px">
        <WhatIsBurningNFTS />
      </div>
      <div className="mb-200px">
        <SkinsLocated />
      </div>
      <Footer />
    </div>
  );
}

export default Tutorial;
