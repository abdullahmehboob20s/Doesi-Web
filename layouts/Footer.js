import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#1E2644]">
      <div className="container flex items-center justify-between py-[1.2rem] space-x-4 xl:py-6">
        <img src="images/logo.svg" className="w-[5rem] md:w-[8rem]" alt="" />

        <p className="text-center text-white font-bold text-[.8rem] md:text-lg">
          Dosei. All Rights Reserved.
        </p>

        <div className="flex items-center space-x-3 md:space-x-6">
          <a href="#" className="text-white text-xl md:text-[1.8rem]">
            <FaDiscord />
          </a>
          <a href="#" className="text-white text-xl md:text-[1.6rem]">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
