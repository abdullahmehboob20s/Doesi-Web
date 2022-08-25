import React, { useContext } from "react";
import DoseiCard from "./DoseiCard";
import NFTCard from "./NFTCard";
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
  FaDiscord,
} from "react-icons/fa";
import SecurityCard from "./SecurityCard";
import Subscription from "./Subscription";

function AccountDetails() {
  const { activeTab } = useContext(Tab_Context_Provider);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="grid grid-cols-[1fr] lg:grid-cols-[.5fr_1fr] gap-20">
      {/* LEFT */}
      <div className="min-w-full relative">
        <h2 className="text-xl text-white font-semibold uppercase mb-4">
          Your Dosei NFT’s
        </h2>

        <div className="relative max-w-[24rem] w-full mx-auto">
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
          <div className="flex items-center justify-center space-x-4 sm:space-x-0 mt-4 sm:mt-0">
            <button
              ref={navigationPrevRef}
              className="flex sm:absolute top-[50%] sm:translate-y-[-50%] right-[106%] cursor-pointer text-[1.5rem] sm:text-[2rem] z-[10]"
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              ref={navigationNextRef}
              className="flex sm:absolute top-[50%] sm:translate-y-[-50%] left-[106%] cursor-pointer text-[1.5rem] sm:text-[2rem] z-[10]"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-[unset] space-x-4 sm:space-x-0 sm:justify-between pb-2 border-b-[5px] border-[#101319] mb-[30px]">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Tab
              tabIndex={1}
              className="cursor-pointer w-fit text-lg sm:text-xl font-medium z-[20] text-white relative"
              activeClassName="text-[#1154FF]"
            >
              DOSEI
              {activeTab === 1 ? (
                <div className="absolute top-[130%] left-0 h-[5px] bg-[#1154FF] w-full"></div>
              ) : null}
            </Tab>
            <Tab
              tabIndex={2}
              className="cursor-pointer w-fit text-lg sm:text-xl font-medium z-[20] text-white relative"
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
            className="cursor-pointer w-fit text-lg sm:text-xl font-medium z-[20] text-white relative"
            activeClassName="text-[#1154FF]"
          >
            SECURITY
            {activeTab === 3 ? (
              <div className="absolute top-[130%] left-0 h-[5px] bg-[#1154FF] w-full"></div>
            ) : null}
          </Tab>
        </div>

        {/* BODY */}

        <div className="bg-[#10131A] p-4 px-6 sm:p-6 sm:px-8 rounded-[10px]">
          <Tab_Pan tabIndex={1}>
            <h1 className="text-2xl sm:text-3xl text-white font-medium mb-[22px]">
              Burnables
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            <h1 className="text-2xl sm:text-3xl text-white font-medium mb-[22px]">
              Subscription
            </h1>

            <Subscription />
          </Tab_Pan>

          <Tab_Pan tabIndex={3}>
            <h1 className="text-2xl sm:text-3xl text-white font-medium mb-[22px]">
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
                    className="w-[1rem] sm:w-[1.2rem]"
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
