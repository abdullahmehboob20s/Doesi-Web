import Link from "next/link";
import React, { useContext } from "react";
import DoseiCard from "./DoseiCard";
import Tab from "./Tab";
import Tab_Pan from "./TabPan";
import { Tab_Context_Provider } from "./Tabs";

function AccountDetails() {
  const { activeTab } = useContext(Tab_Context_Provider);

  return (
    <div className="grid grid-cols-[.5fr_1fr] gap-12">
      {/* LEFT */}
      <div className="">
        <h2 className="text-xl text-white font-semibold uppercase mb-4">
          Your Dosei NFT’s
        </h2>

        <div className="overflow-hidden rounded-[6px] bg-white">
          <img src="images/slider/test1.png" className="w-full" alt="" />

          <div className="p-3 px-5">
            <p className="text-xl text-black font-semibold mb-1">
              Dosei Genesis #777
            </p>

            <Link href="/">
              <a className="flex items-center space-x-3 w-fit">
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
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between pb-2 border-b-[5px] border-[#101319] mb-[30px]">
          <div className="flex items-center space-x-8">
            <Tab
              tabIndex={1}
              className="cursor-pointer w-fit text-xl font-medium text-white relative"
            >
              DOSEI
              {activeTab === 1 ? (
                <div className="absolute top-[130%] left-0 h-[5px] bg-[#1154FF] w-full"></div>
              ) : null}
            </Tab>
            <Tab
              tabIndex={2}
              className="cursor-pointer w-fit text-xl font-medium text-white relative"
            >
              DOSEIAIO
              {activeTab === 2 ? (
                <div className="absolute top-[130%] left-0 h-[5px] bg-[#1154FF] w-full"></div>
              ) : null}
            </Tab>
          </div>
          <Tab
            tabIndex={3}
            className="cursor-pointer w-fit text-xl font-medium text-white relative"
          >
            SECURITY
            {activeTab === 3 ? (
              <div className="absolute top-[130%] left-0 h-[5px] bg-[#1154FF] w-full"></div>
            ) : null}
          </Tab>
        </div>

        {/* BODY */}

        <div className="bg-[#10131A] p-6 px-8 rounded-[10px]">
          <Tab_Pan tabIndex={1}>
            <h1 className="text-3xl text-white font-medium mb-[22px]">
              Burnables
            </h1>
            <div className="grid grid-cols-2 gap-8">
              <DoseiCard
                color="#FA3A3A"
                title="Airdrop One"
                slogan="Legendary"
                subtitle="M9 Bayonet | Doppler"
                steamLink="/"
                img="images/knife.png"
              />
              <DoseiCard
                color="#FF39D4"
                title="Airdrop One"
                slogan="Mythical"
                subtitle="AWP | Asiimov"
                steamLink="/"
                img="images/sniper.png"
              />
            </div>
          </Tab_Pan>

          <Tab_Pan tabIndex={2}></Tab_Pan>
          <Tab_Pan tabIndex={3}></Tab_Pan>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
