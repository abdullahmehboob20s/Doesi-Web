import React from "react";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100]">
      <div className="container py-[1.6rem] flex items-center space-x-[1rem]">
        <img src="images/logo.svg" className="cursor-pointer" alt="" />

        <div className="flex items-center justify-between flex-1">
          <button className="button text-base font-bold">Dashboard</button>

          <button className="text-[1.8rem] flex">
            <IoMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
