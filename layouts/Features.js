import Tab from "components/Tab";
import Tabs from "components/Tabs";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import FeatureCard from "components/FeatureCard";
import useMediaQuery from "hooks/useMediaQuery";
import Image from "next/image";

function Features() {
  const defaultIndex = 2;
  const [dataIndex, setDataIndex] = useState(defaultIndex);
  const isAbove768px = useMediaQuery("(min-width : 768px)");

  const data = [
    {
      cards: [
        {
          color: "#0094FF",
          title: "In-House Software",
          desc: "Dosei will provide professional software for members to download with plans of a Eth/Solano Minting Bot, Intensive Mobile App, and more.",
        },
        {
          color: "#7000FF",
          title: "Exclusive Groupbuys",
          desc: "Dosei is always searching for groupbuys to provide members witht the best software, proxies, memberships to other groups, and more.",
        },
        {
          color: "#C549FF",
          title: "Partnerships",
          desc: "Dosei currently has a planned partnership with Chivalry, an NFT game that will be funded by Dosei. Besides this Dosei is always searching for partnerships with other NFT projects and groups.",
        },
      ],
    },
    {
      cards: [
        {
          color: "#0094FF",
          title: "Crypto",
          desc: "Comprehensive guides on how to get started on Crypto investing aswell as calls on Bitcoin/Other Altcoins",
        },
        {
          color: "#7000FF",
          title: "Ethereum",
          desc: "Ethereum is what Dosei is based on. As a result Ethereum is prioritized with calls, giveaways, and a focus on a strong ROI for your investment into Dosei.",
        },
        {
          color: "#C549FF",
          title: "Solano",
          desc: "Comprehensive guides on Solano Botting/Minting, as well as calls on the coin itself.",
        },
        {
          color: "#3300FF",
          title: "NFT’s",
          desc: "While Dosei is an NFT project itself, Dosei also provides botting guides/minting information/and guides on investing into other projects.",
        },
      ],
    },
    {
      cards: [
        {
          color: "#0094FF",
          title: "Reselling",
          desc: "Jumpstart your reselling career with professional guidance and information in a variety of arenas.",
        },
        {
          color: "#7000FF",
          title: "Sneakers",
          desc: "Information, release-dates, site-lists, guides, and notifications regarding hyped and profitable sneakers.",
        },
        {
          color: "#C549FF",
          title: "Sports Cards",
          desc: "Dive into flipping sports cards with the help of Dosei. Dosei provides the best imformation from obtaining cards to selling on Ebay and elsewhere.",
        },
        {
          color: "#3300FF",
          title: "Fitted Hats, Consoles, and More!",
          desc: "Dosei provides information and notifications to help you purchase fitted hats, consoles, and much more!",
        },
      ],
    },
    {
      cards: [
        {
          color: "#0094FF",
          title: "Stocks",
          desc: "Dosei provides members with quality guides on trading stocks. As well as calls/sells, best brokers to use, and other information.",
        },
        {
          color: "#7000FF",
          title: "Options",
          desc: "Options are a major part of non-crypto related investments with Dosei. Dosei provides members with professional calls as well as guides for options trading.",
        },
      ],
    },
    {
      cards: [
        {
          color: "#0094FF",
          title: "Collection Limited to 2000 Owners",
          desc: "In order to keep information and opportunities Dosei provides exclusive, the initial collection will be limited to 2000.",
        },
        {
          color: "#7000FF",
          title: "Restocks/Airdrops",
          desc: "Future restocks will be done through new NFT collections, of which Dosei holders will have minting/airdrop opportunities.",
        },
        {
          color: "#C549FF",
          title: "A Dedicated Team",
          desc: "A dedicated support team offering 24/7 services such as investment help, software help, homework help, and more.",
        },
        {
          color: "#3300FF",
          title: "You!",
          desc: "As a NFT project, the community drives the value of Dosei. Therefore, YOU are Dosei’s most important asset! Top/Engaged members will be rewarded with Ethereum, other NFT’s, and more.",
        },
      ],
    },
  ];

  return (
    <div className="py-[4rem] relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-10]">
        <Image
          src="/images/features-bg.png"
          loading="lazy"
          layout="fill"
          alt="img"
          className="object-cover"
        />
      </div>

      <Tabs defaultTab={3}>
        <div className="container">
          <header>
            <h1 className="text-center text-white text-3xl font-bold mb-[22px] md:mb-10 lg:mb-16 xl:text-5xl">
              Unbeatable Features
            </h1>
          </header>

          <main>
            <div className="grid grid-cols-[1fr,1fr] gap-[2rem] mb-[4rem] sm:max-w-[30rem] sm:mx-auto md:flex items-center justify-between md:max-w-none">
              <div
                className={`tab bg-[rgba(17,84,255,0.2)] cursor-pointer flex items-center justify-center h-[40vw] sm:h-[12rem] md:h-auto md:aspect-square flex-1 ${
                  dataIndex === 0 ? "tab-active" : ""
                }`}
                onClick={() => setDataIndex(0)}
              >
                <img
                  src="images/kings.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div
                className={`tab bg-[rgba(17,84,255,0.2)] cursor-pointer flex items-center justify-center h-[40vw] sm:h-[12rem] md:h-auto md:aspect-square flex-1 ${
                  dataIndex === 1 ? "tab-active" : ""
                }`}
                onClick={() => setDataIndex(1)}
              >
                <img
                  src="images/tokens-doodles.png"
                  className="w-full h-full object-cover "
                  alt=""
                />
              </div>
              <div
                className={`tab bg-[rgba(17,84,255,0.2)] cursor-pointer flex items-center justify-center h-[40vw] sm:h-[12rem] md:h-auto md:aspect-square flex-1 ${
                  dataIndex === 2 ? "tab-active" : ""
                }`}
                onClick={() => setDataIndex(2)}
              >
                <img
                  src="images/cap-shoes.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div
                className={`tab bg-[rgba(17,84,255,0.2)] cursor-pointer flex items-center justify-center h-[40vw] sm:h-[12rem] md:h-auto md:aspect-square flex-1 ${
                  dataIndex === 3 ? "tab-active" : ""
                }`}
                onClick={() => setDataIndex(3)}
              >
                <img
                  src="images/detailed-chart.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="col-span-2 flex justify-center md:aspect-square md:flex-1">
                <div
                  className={`tab bg-[rgba(17,84,255,0.2)] cursor-pointer flex items-center justify-center h-[40vw] sm:h-[12rem] md:h-auto md:aspect-square ${
                    dataIndex === 4 ? "tab-active" : ""
                  }`}
                  onClick={() => setDataIndex(4)}
                >
                  <img
                    src="images/thefe.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div>
              {isAbove768px ? (
                <div className="grid grid-cols-2 gap-[2rem]">
                  {data[dataIndex].cards.map((item, index) => (
                    <FeatureCard key={index} {...item} />
                  ))}
                </div>
              ) : (
                <Swiper
                  spaceBetween={30}
                  pagination={true}
                  modules={[Pagination]}
                  className="features-slider"
                >
                  {data[dataIndex].cards.map((item, index) => (
                    <SwiperSlide key={index}>
                      <FeatureCard {...item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </main>
        </div>
      </Tabs>
    </div>
  );
}

export default Features;
