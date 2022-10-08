import Image from "next/image";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useToast } from "@chakra-ui/toast";

function HeroSection() {
  const toast = useToast();

  return (
    <section className="relative">
      <div className="absolute top-0 left-0 w-full h-screen z-[-10]">
        <Image
          src="/images/hero-bg.png"
          layout="fill"
          alt="img"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-screen z-[-10] block md:hidden">
        <Image
          src="/images/features-bg.png"
          layout="fill"
          alt="img"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="container md:flex md:min-h-screen">
        {/*  */}
        <div className="text-center min-h-screen flex justify-center relative flex-col md:min-h-[auto] md:flex-1 md:text-left md:items-start ">
          <div>
            <div className="mb-9">
              <img
                src="images/logo.svg"
                className="w-[80%] max-w-[18rem] mx-auto mb-2 md:max-w-[12rem] lg:max-w-[auto] lg:min-w-[24vw]"
                alt=""
              />
              <h1 className="text-center text-white text-[30px] leading-[1] md:text-[20px] lg:text-[30px]">
                Redefining the NFT Experience
              </h1>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <button className="bg-[#4D89FB] w-[120px] h-[34px] rounded-[.4rem] text-base font-medium md:text-lg md:w-[140px] md:h-[40px] lg:text-xl lg:font-semibold lg:w-[170px] lg:h-[50px]">
                Join Waitlist
              </button>
              <button
                className="bg-[#4D89FB] w-[120px] h-[34px] rounded-[.4rem] flex items-center justify-center space-x-1 md:w-[140px] md:h-[40px] lg:w-[170px] lg:h-[50px]"
                onClick={() =>
                  toast({
                    title: `OpenSea Collection is not live yet, check back after public mint!`,
                    isClosable: true,
                    position: ["bottom"],
                    status: "info",
                    duration: 2000,
                  })
                }
              >
                <span className="block leading-[1.1] text-[10px] w-[7em] md:text-[12px] lg:text-[16px]">
                  View Collection On Opensea
                </span>
                <img
                  src="images/opensea-icons.png"
                  className="w-[1.2rem] md:w-[1.4rem] lg:w-[1.8rem]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="min-h-screen flex justify-center flex-col sm:max-w-[30rem] md:w-full sm:mx-auto md:min-h-[auto] md:flex-1 md:max-w-[36rem]">
          <div className="bg-[rgba(17,84,255,0.2)] p-[1rem] rounded-[.6rem] grid grid-cols-[1fr,1fr] gap-[1rem]">
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[30vw] flex items-center justify-center sm:h-[9rem] md:h-[14vw] lg:h-[10rem]">
              <img
                src="images/shoe-2.png"
                className="w-[80%] rotate-[-20deg] mb-[1rem] xl:w-[60%]"
                alt=""
              />
            </div>
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[30vw] flex items-center justify-center sm:h-[9rem] md:h-[14vw] lg:h-[10rem]">
              <img src="images/chart.png" className="w-[80%]" alt="" />
            </div>
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[30vw] flex items-center justify-center sm:h-[9rem] md:h-[14vw] lg:h-[10rem]">
              <img src="images/tokens.png" className="w-[80%]" alt="" />
            </div>
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[30vw] flex items-center justify-center sm:h-[9rem] md:h-[14vw] lg:h-[10rem]">
              <img src="images/doodles.png" className="w-[80%]" alt="" />
            </div>
          </div>

          <h1 className="text-[30px] font-Calibri xl:text-[28px] leading-[1.2] font-[700] mt-[1rem] ml-[1rem] flex flex-wrap">
            <span className="font-Calibri mr-[.3em]">Never miss out on</span>
            <Typewriter
              options={{
                loop: true,
                wrapperClassName: "text-pink inline font-Calibri",
              }}
              onInit={(typewriter) => {
                typewriter.typeString("Sneakers").pauseFor(2500).deleteAll();
                typewriter.typeString("NFTs").pauseFor(2500).deleteAll();
                typewriter
                  .typeString("Sports Cards")
                  .pauseFor(2500)
                  .deleteAll();
                typewriter.typeString("Releases").pauseFor(2500).deleteAll();
                typewriter
                  .typeString("Crypto")
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
            <span>with Dosei.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
