import Link from "next/link";
import React, { useContext } from "react";
import DoseiCard from "./DoseiCard";
import NFTCard from "./NFTCard";
import NFTSkill from "./NFTSkill";
import Tab from "./Tab";
import Tab_Pan from "./TabPan";
import { Tab_Context_Provider } from "./Tabs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCloudDownloadAlt,
  FaDiscord,
  FaShoppingCart,
  FaUnlockAlt,
} from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { CgRedo } from "react-icons/cg";
import { IoGitNetworkOutline } from "react-icons/io5";
import SecurityCard from "./SecurityCard";

function AccountDetails() {
  const { activeTab } = useContext(Tab_Context_Provider);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="grid grid-cols-[.5fr_1fr] gap-20">
      {/* LEFT */}
      <div className="min-w-full relative">
        <h2 className="text-xl text-white font-semibold uppercase mb-4">
          Your Dosei NFT’s
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation]}
          className="nft-slider"
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper && swiper.params) {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
        >
          <SwiperSlide>
            <NFTCard img="images/slider/test1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <NFTCard img="images/slider/test2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <NFTCard img="images/slider/test3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <NFTCard img="images/slider/test4.png" />
          </SwiperSlide>
        </Swiper>

        <button
          ref={navigationPrevRef}
          className="flex absolute top-[50%] translate-y-[-50%] right-[106%] cursor-pointer text-[2rem] z-[10]"
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          ref={navigationNextRef}
          className="flex absolute top-[50%] translate-y-[-50%] left-[106%] cursor-pointer text-[2rem] z-[10]"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* RIGHT */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between pb-2 border-b-[5px] border-[#101319] mb-[30px]">
          <div className="flex items-center space-x-8">
            <Tab
              tabIndex={1}
              className="cursor-pointer w-fit text-xl font-medium text-white relative"
              activeClassName="text-[#1154FF]"
            >
              DOSEI
              {activeTab === 1 ? (
                <div className="absolute top-[130%] left-0 h-[5px] bg-[#1154FF] w-full"></div>
              ) : null}
            </Tab>
            <Tab
              tabIndex={2}
              className="cursor-pointer w-fit text-xl font-medium text-white relative"
              activeClassName="text-[#1154FF]"
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
            activeClassName="text-[#1154FF]"
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

          <Tab_Pan tabIndex={2}>
            <h1 className="text-3xl text-white font-medium mb-[22px]">
              Subscription
            </h1>

            <div className="grid grid-cols-[1fr_.5fr] gap-y-8 gap-x-2">
              <div>
                <div className="mb-8">
                  <div className="mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      Membership Type:{" "}
                    </h4>
                    <p className="text-lg text-ourBlue font-normal">
                      Dosei - Monthly - No Unbind{" "}
                    </p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xl font-semibold text-white">Key:</h4>{" "}
                    <p className="text-lg text-ourBlue font-normal">
                      JD4SI-RMFK2-93LFP
                    </p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      Expires ON:
                    </h4>{" "}
                    <p className="text-lg text-ourBlue font-normal">
                      9/22/2022
                    </p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      Instances:
                    </h4>{" "}
                    <p className="text-lg text-ourBlue font-normal">1</p>
                  </div>
                </div>

                <button className="flex items-center space-x-4 bg-[#1D1F26] py-2 px-4 rounded-lg">
                  <p className="text-sm text-white leading-[1.3]">
                    102.23.291.293 <br />
                    <span className="text-gray-400">Last Connected:</span>
                  </p>
                  <span className="text-[1.4rem] text-white">
                    <RiShutDownLine />
                  </span>
                </button>
              </div>

              <div className="space-y-3">
                <button className="w-full py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
                  <span className="text-xl text-white font-medium">
                    Download
                  </span>
                  <span className="text-[1.2rem] text-white">
                    <FaCloudDownloadAlt />
                  </span>
                </button>{" "}
                <button className="w-full py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
                  <span className="text-xl text-white font-medium">Unbind</span>
                  <span className="text-[1rem] text-white">
                    <FaUnlockAlt />
                  </span>
                </button>{" "}
                <button className="w-full py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
                  <span className="text-xl text-white font-medium">
                    Scramble Key
                  </span>
                  <span className="text-[1.2rem] text-white">
                    <IoGitNetworkOutline />
                  </span>
                </button>
              </div>

              <div className="flex space-x-6 col-span-2">
                <button className="flex-1 py-1 px-3 bg-[#1557FF] rounded-lg flex items-center space-x-3 justify-center">
                  <span className="text-xl text-white font-medium">Renew</span>
                  <span className="text-[1.4rem] text-white">
                    <CgRedo />
                  </span>
                </button>
                <button className="flex-1 py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
                  <span className="text-xl text-white font-medium">
                    Purchase Instances
                  </span>
                  <span className="text-[1.2rem] text-white">
                    <FaShoppingCart />
                  </span>
                </button>
              </div>
            </div>
          </Tab_Pan>

          <Tab_Pan tabIndex={3}>
            <h1 className="text-3xl text-white font-medium mb-[22px]">
              Multi-Factor Authentication
            </h1>

            <div className="space-y-6">
              <SecurityCard
                title="Two-Factor Authentication(2FA)"
                subtitle="Two-Factor Authentication is a great way to secure your Dosei account and ensure no one has access to your Airdrops or DoseiAIO."
                butttonTitle="Enable 2FA"
              />
              <SecurityCard
                title="SMS Backup Authentication"
                subtitle="SMS Backup Authentication uses your phone number as a backup method incase you lose access to your Authentication Codes, or Discord."
                butttonTitle="Enable SMS"
              />
              <SecurityCard
                title="Discord"
                Icon={() => <FaDiscord />}
                butttonTitle="Connect Discord"
              />
              <SecurityCard
                title="Metamask"
                subtitle=""
                butttonTitle="Connect Metamask"
                img={
                  <img
                    src="images/metamaskicon.svg"
                    className="w-[1.2rem]"
                    alt=""
                  />
                }
              />
            </div>
          </Tab_Pan>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
