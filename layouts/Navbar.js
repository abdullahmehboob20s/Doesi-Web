import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setisSidebarOpen(false));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => document.removeEventListener("scroll", handler);
  });

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-[.2s] ease-in-out ${
        isScrolled ? "bg-[#040811]" : ""
      }`}
    >
      <div className="container py-[1.6rem] flex items-center space-x-[1rem]">
        <img
          src="images/logo.svg"
          className="cursor-pointer lg:w-[8rem]"
          alt=""
        />

        <div className="flex items-center justify-between flex-1 sm:justify-end sm:space-x-6 lg:space-x-12">
          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 w-[280px] h-full bg-[#4D89FB] flex flex-col p-10 space-y-4 transition-all duration-[.3s] ease-in-out z-[120] ${
              isSidebarOpen ? "translate-x-[0px]" : "translate-x-[280px]"
            } lg:static lg:bg-transparent lg:flex-row lg:items-center lg:w-auto lg:p-0 lg:space-y-0 lg:translate-x-0 lg:space-x-10`}
          >
            <button
              className="text-2xl ml-[-.3rem] mb-4 cursor-pointer lg:hidden"
              onClick={() => setisSidebarOpen((val) => !val)}
            >
              <IoClose />
            </button>
            <ScrollLink
              to="Home"
              className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg"
              onClick={() => setisSidebarOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="Features"
              className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg"
              onClick={() => setisSidebarOpen(false)}
              offset={-100}
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="Roadmap"
              className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg"
              onClick={() => setisSidebarOpen(false)}
              offset={-100}
            >
              Roadmap
            </ScrollLink>
            <ScrollLink
              to="Team"
              className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg"
              onClick={() => setisSidebarOpen(false)}
            >
              The Team
            </ScrollLink>
            <ScrollLink
              to="Support"
              className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg"
              onClick={() => setisSidebarOpen(false)}
            >
              Support
            </ScrollLink>
          </div>

          <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>

          <button className="button text-base font-bold lg:text-lg lg:w-[8rem] lg:h-[2.4rem]">
            Dashboard
          </button>

          <div className="hidden lg:flex items-center space-x-3 md:space-x-6">
            <a className="text-white text-xl md:text-[1.8rem]">
              <FaDiscord />
            </a>
            <a className="text-white text-xl md:text-[1.6rem]">
              <FaTwitter />
            </a>
          </div>

          <button
            className="text-[1.8rem] flex lg:hidden"
            onClick={() => setisSidebarOpen((val) => !val)}
          >
            <IoMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
