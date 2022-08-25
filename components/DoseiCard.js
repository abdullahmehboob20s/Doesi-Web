import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function DoseiCard({ slogan, title, subtitle, img, color, steamLink = "/" }) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl text-white font-medium mb-4">
        <span style={{ color }}>{slogan}</span> {title}
      </h2>

      <div className="bg-[#1D1F26] p-[22px] rounded-[10px]">
        <div className="w-full h-[140px] sm:h-[160px] p-6">
          <img src={img} className="w-full h-full object-contain" alt="" />
        </div>

        <div className="mb-6">
          <p className="text-lg sm:text-xl text-white font-medium text-center mb-2">
            {subtitle}
          </p>
          <Link href={steamLink}>
            <a className="w-[100%] mx-auto bg-[#6F6F6F] rounded-[6px] py-[.3rem] px-[.8rem] flex justify-center items-center space-x-2">
              <span className="text-sm sm:text-base">
                View On Steam Market{" "}
              </span>
              <img
                src="images/steamicon.png"
                className="w-[1rem] sm:w-[1.1rem]"
                alt=""
              />
            </a>
          </Link>
        </div>

        <div className="h-[6.2rem] sm:h-[8rem]">
          <p className="text-base sm:text-lg text-gray-400 font-medium">
            Exterior: FN
          </p>
          <p className="text-base sm:text-lg text-gray-400 font-medium">
            Float: 0.05562873
          </p>
          <Link href="/">
            <a className="text-base sm:text-lg flex items-center space-x-2 w-fit">
              <span className="text-gray-400 font-medium">Inspect</span>
              <span className="text-[.7rem] sm:text-[.8rem]">
                <FaExternalLinkAlt />
              </span>
            </a>
          </Link>
        </div>

        <button
          className="w-full py-1 px-4 text-white font-bold text-center text-xs sm:text-sm rounded-[6px]"
          style={{ backgroundColor: color }}
        >
          Burn Airdrop One and Recieve Trade Offer
        </button>
      </div>
    </div>
  );
}

export default DoseiCard;
