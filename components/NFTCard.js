import Link from "next/link";
import React from "react";
import NFTSkill from "./NFTSkill";

function NFTCard() {
  return (
    <div className="overflow-hidden rounded-[6px] bg-white">
      <img src="images/slider/test1.png" className="w-full" alt="" />

      <div className="p-3 px-5">
        <p className="text-xl text-black font-semibold mb-1">
          Dosei Genesis #777
        </p>

        <Link href="/">
          <a className="flex items-center space-x-3 w-fit mb-3">
            <span className="text-ourBlue font-black text-xl flex">
              View on OpenSea
            </span>

            <img
              src="images/opensea-icon-blue.svg"
              className="block w-[1.2rem]"
              alt=""
            />
          </a>
        </Link>

        <div>
          <h2 className="text-xl text-gray-400 font-semibold mb-3">
            Properties
          </h2>

          <div className="grid grid-cols-3 gap-2">
            <NFTSkill
              title="Background"
              subtitle="Light Blue"
              ability="13% Have"
            />
            <NFTSkill title="Top" subtitle="Top Hat" ability="13% Have" />
            <NFTSkill title="Eyes" subtitle="Glow Glare" ability="13% Have" />

            <NFTSkill title="Face" subtitle="Bandit" ability="13% Have" />
            <NFTSkill title="Body" subtitle="Tuxedo" ability="13% Have" />
            <NFTSkill
              title="Classification"
              subtitle="Legendary"
              ability="13% Have"
              bg="bg-[#FA3A3A]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
