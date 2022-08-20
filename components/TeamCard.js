import React from "react";
import Link from "next/link";
import { FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

function TeamCard() {
  return (
    <div className="bg-[#1E2644] p-8 sm:p-10 rounded-[6px] space-y-5 sm:space-y-10 max-w-[40rem] mx-auto">
      <header className="flex flex-col items-center space-y-4 sm:space-y-6">
        <img
          src="images/team-member-1.png"
          className="max-w-[6rem] sm:max-w-[10rem] w-full"
          alt=""
        />
        <h1 className="text-base sm:text-2xl text-white font-bold text-center">
          /MICHELANGELO GARCES/@MIKEYGARCESS
        </h1>
      </header>
      <main className="flex items-center justify-center space-x-4">
        <Link href="/">
          <a target="_blank" className="text-xl sm:text-4xl cursor-pointer">
            <FaTwitter />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-xl sm:text-4xl cursor-pointer">
            <FaInstagram />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-xl sm:text-4xl cursor-pointer">
            <FaTiktok />
          </a>
        </Link>
      </main>
      <footer className="max-w-[26rem] w-full mx-auto">
        <h2 className="text-center text-base sm:text-2xl text-white font-bold mb-2">
          CEO, Lead Developer
        </h2>

        <p className="text-center text-sm sm:text-lg text-white font-medium">
          A current computer science student, Michelangelo started Dosei in
          January 2022 as a project with the goal of revolutionizing how current
          {" NFT's"} are thought of.
        </p>
      </footer>
    </div>
  );
}

export default TeamCard;
