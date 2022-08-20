import Link from "next/link";
import React from "react";
import RoadCard from "./RoadCard";

function RoadmapRoad() {
  return (
    <div>
      <div className="pb-[12vw] w-fit relative z-[1] sm:pb-14">
        <RoadCard title="Allowlist" />
        <div className="bg-[#334172] w-[2px] h-[100%] absolute top-0 left-[50%] translate-x-[-50%] z-[-10]"></div>

        <img
          src="images/logo.svg"
          className="absolute top-[-.5vw] left-[120%] min-w-[28vw] sm:min-w-[1rem] sm:top-0"
          alt=""
        />
      </div>
      <div className="pb-[12vw] z-[1] sm:pb-14">
        <div className="flex items-center justify-between relative">
          <div className="bg-[#334172] w-[100%] h-[2px] absolute top-[50%] left-0 translate-y-[-50%] z-[-10]"></div>
          <RoadCard title="Build Discord" />
          <RoadCard
            title="Begin Whitelist Minting"
            fontSize="text-[2.6vw] sm:text-[.8rem]"
            textClassName="w-[12vw] sm:w-[5rem]"
          />
          <div className="w-fit relative">
            <RoadCard title="Dosei Software" />
            <div className="bg-[#334172] w-[2px] h-[30vw] absolute top-0 left-[50%] translate-x-[-50%] z-[-10] sm:h-[9rem]"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between relative">
          <div className="bg-[#334172] w-[100%] h-[2px] absolute top-[50%] left-0 translate-y-[-50%] z-[-10]"></div>
          <RoadCard
            title="Dosei Mobile App"
            fontSize="text-[3vw] sm:text-[.8rem]"
            textClassName="w-[16vw] sm:w-auto"
          />
          <RoadCard
            title="Dosei Restock/Airdrop"
            fontSize="text-[2.6vw] sm:text-[.8rem]"
            textClassName="w-[16vw] sm:w-auto"
          />
          <RoadCard
            title="Reward Top Members"
            fontSize="text-[2.6vw] sm:text-[.8rem]"
            textClassName="w-[16vw] sm:w-auto"
          />
        </div>
      </div>
      <div className="w-fit relative z-[1] pt-[12vw] sm:pt-14">
        <RoadCard title="Continuation" fontSize="text-[3vw] sm:text-[1rem]" />

        <div className="bg-[#334172] w-[2px] h-[100%] absolute bottom-0 left-[50%] translate-x-[-50%] z-[-10]"></div>

        <Link href="/roadmap">
          <a className="bg-[#4D89FB] flex items-center justify-center w-[30vw] h-[8vw] rounded-[.4rem] absolute bottom-[1vw] left-[120%] text-[3.6vw] font-semibold sm:w-[8rem] sm:h-[2.6rem] sm:text-[1rem] sm:bottom-[.3rem]">
            View Roadmap
          </a>
        </Link>
      </div>
    </div>
  );
}

export default RoadmapRoad;
