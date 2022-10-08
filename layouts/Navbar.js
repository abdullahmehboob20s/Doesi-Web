import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

function Navbar({
  scrollTrigger = 200,
  showLinks = true,
  showProfile = false,
}) {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setisSidebarOpen(false));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > scrollTrigger) {
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
        <Link href="/">
          <img
            src="images/logo.svg"
            className="cursor-pointer lg:w-[8rem]"
            alt=""
          />
        </Link>

        {showLinks ? (
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
              <Link href="/team">
                <a className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg">
                  The Team
                </a>
              </Link>
              <ScrollLink
                to="Support"
                className="font-bold text-white text-lg cursor-pointer w-fit lg:text-lg"
                onClick={() => setisSidebarOpen(false)}
              >
                Support
              </ScrollLink>
            </div>

            <div
              className={`black-screen ${isSidebarOpen ? "show" : ""}`}
            ></div>

            <button className="button text-base font-bold lg:text-lg lg:w-[8rem] lg:h-[2.4rem]">
              Dashboard
            </button>

            <div className="hidden lg:flex items-center space-x-3 md:space-x-6">
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
              <Link
                href="https://twitter.com/DoseiNFT"
                target="_blank"
                passHref
              >
                <a
                  target="_blank"
                  className="text-white text-xl cursor-pointer md:text-[1.6rem]"
                >
                  <FaTwitter />
                </a>
              </Link>
            </div>

            <button
              className="text-[1.8rem] flex lg:hidden"
              onClick={() => setisSidebarOpen((val) => !val)}
            >
              <IoMenu />
            </button>
          </div>
        ) : null}

        {showProfile ? (
          <div className="flex-1 flex items-center justify-end space-x-6">
            <div className="w-[32px] h-[32px] sm:w-[50px] sm:h-[50px] rounded-full cursor-pointer">
              <img src="images/user.png" className="w-full h-full" alt="" />
            </div>

            <button className="bg-[#10131A] rounded-[4px] py-[.2rem] px-[.6rem] sm:py-[.4rem] sm:px-[.8rem] flex items-center space-x-4">
              <span className="text-base sm:text-xl font-normal flex text-white leading-[1]">
                Logout
              </span>
              <span className="text-sm sm:text-[1.2rem] flex">
                <FiLogOut />
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
