import React from "react";
import RoadCard from "./RoadCard";

function RoadmapRoad() {
  return (
    <div>
      <div className="pb-[12vw] w-fit relative z-[1]">
        <RoadCard title="Allowlist" />
        <div className="bg-[#334172] w-[2px] h-[100%] absolute top-0 left-[50%] translate-x-[-50%] z-[-10]"></div>

        <img
          src="images/logo.svg"
          className="absolute top-[-.5vw] left-[120%] min-w-[28vw]"
          alt=""
        />
      </div>
      <div className="pb-[12vw] z-[1]">
        <div className="flex items-center justify-between relative">
          <div className="bg-[#334172] w-[100%] h-[2px] absolute top-[50%] left-0 translate-y-[-50%] z-[-10]"></div>
          <RoadCard title="Build Discord" />
          <RoadCard
            title="Begin Whitelist Minting"
            fontSize="text-[2.6vw]"
            textClassName="w-[12vw]"
          />
          <div className="w-fit relative">
            <RoadCard title="Dosei Software" />
            <div className="bg-[#334172] w-[2px] h-[30vw] absolute top-0 left-[50%] translate-x-[-50%] z-[-10]"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between relative">
          <div className="bg-[#334172] w-[100%] h-[2px] absolute top-[50%] left-0 translate-y-[-50%] z-[-10]"></div>
          <RoadCard
            title="Dosei Mobile App"
            fontSize="text-[3vw]"
            textClassName="w-[16vw]"
          />
          <RoadCard
            title="Dosei Restock/Airdrop"
            fontSize="text-[2.6vw]"
            textClassName="w-[16vw]"
          />
          <RoadCard
            title="Reward Top Members"
            fontSize="text-[2.6vw]"
            textClassName="w-[16vw]"
          />
        </div>
      </div>
      <div className="w-fit relative z-[1] pt-[12vw]">
        <RoadCard title="Continuation" fontSize="text-[3vw]" />
        <div className="bg-[#334172] w-[2px] h-[100%] absolute bottom-0 left-[50%] translate-x-[-50%] z-[-10]"></div>

        <button className="bg-[#4D89FB] w-[30vw] h-[8vw] rounded-[.4rem] absolute bottom-[1vw] left-[120%] text-[3.6vw] font-semibold">
          View Roadmap
        </button>
      </div>
    </div>
  );
}

export default RoadmapRoad;
