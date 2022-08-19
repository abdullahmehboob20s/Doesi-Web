import RoadmapRoad from "components/RoadmapRoad";
import React from "react";
import { MdDone } from "react-icons/md";

const Point = ({ text }) => {
  return (
    <div className="flex text-[1rem]">
      <div>
        <MdDone
          className="mr-2 text-[1.2rem] fill-[#25DDC8] mt-[.14em]"
          color="#25DDC8"
        />
      </div>
      <p style={{ fontSize: "inherit" }} className="font-bold">
        {text}
      </p>
    </div>
  );
};

function Roadmap() {
  return (
    <div className="py-[4rem] pb-[6rem]">
      <div className="container">
        <h1 className="text-4xl white font-semibold mb-[32px]">Roadmap</h1>

        <div className="mb-6">
          <RoadmapRoad />
        </div>

        <h2 className="text-lg font-bold mb-6">
          Dosei is no ordinary NFT project. Dosei has a roadmap filled with
          plans such as:
        </h2>

        <div className="space-y-2">
          <Point text="Dosei Software" />
          <Point text="Dosei mobile app" />
          <Point text="Reward Top Members with Ethereum/Other NFT’s" />
          <Point text="Quality Airdrops" />
          <Point text="Routine social gatherings, nightclubs, and events for holders" />
          <Point text="Budget Eth to make an entrance into the Space Flight Arena" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
