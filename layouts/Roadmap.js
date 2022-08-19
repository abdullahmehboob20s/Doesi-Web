import RoadmapRoad from "components/RoadmapRoad";
import useMediaQuery from "hooks/useMediaQuery";
import Image from "next/image";
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
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");

  return (
    <div className="py-[4rem] pb-[6rem] relative" id="Roadmap">
      <div className="absolute top-0 left-0 w-full h-full z-[-10]">
        <Image
          src="/images/features-bg.png"
          layout="fill"
          alt="img"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="container">
        {isAbove1024px ? (
          <div className="flex space-x-16 items-center">
            <div className="flex-1">
              <h1 className="white font-semibold mb-4 text-5xl">Roadmap</h1>
              <h2 className="text-lg font-bold mb-6 opacity-[0.6] max-w-[20rem]">
                Dosei is no ordinary NFT project. Dosei has a roadmap filled
                with plans such as:
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

            <div className="flex-1 flex justify-end">
              <div className="sm:max-w-[28rem] sm:w-full">
                <RoadmapRoad />
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-4xl white font-semibold mb-[32px] sm:mb-16 sm:text-5xl">
              Roadmap
            </h1>

            <div className="mb-6 sm:max-w-[28rem] sm:w-full">
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
          </>
        )}
      </div>
    </div>
  );
}

export default Roadmap;
