import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#1E2644]">
      <div className="container flex items-center justify-between py-[1.2rem] space-x-4">
        <img src="images/logo.svg" className="w-[5rem]" alt="" />

        <p className="text-center text-white font-bold text-[.8rem]">
          Dosei. All Rights Reserved.
        </p>

        <div className="flex items-center space-x-3">
          <a href="#" className="text-white text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-xl">
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
