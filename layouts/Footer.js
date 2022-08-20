import Link from "next/link";
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
          <Link
            href="https://discord.com/invite/dosei"
            target="_blank"
            passHref
          >
            <a
              target="_blank"
              className="text-white text-xl cursor-pointer md:text-[1.8rem]"
            >
              <FaDiscord />
            </a>
          </Link>
          <Link href="https://twitter.com/DoseiNFT" target="_blank" passHref>
            <a
              target="_blank"
              className="text-white text-xl cursor-pointer md:text-[1.6rem]"
            >
              <FaTwitter />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
