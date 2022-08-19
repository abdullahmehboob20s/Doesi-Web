import React from "react";

function HeroSection() {
  return (
    <section className="">
      <div className="container md:flex md:min-h-screen">
        <div className="text-center min-h-screen flex justify-center flex-col md:min-h-[auto] md:flex-1 md:text-left md:items-start ">
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
              <button className="bg-[#4D89FB] w-[120px] h-[34px] rounded-[.4rem] flex items-center justify-center space-x-1 md:w-[140px] md:h-[40px] lg:w-[170px] lg:h-[50px]">
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
        <div className="min-h-screen flex justify-center flex-col sm:max-w-[30rem] md:w-full sm:mx-auto md:min-h-[auto] md:flex-1 md:max-w-[32rem]">
          <div className="bg-[rgba(17,84,255,0.2)] p-[1rem] rounded-[.6rem] grid grid-cols-[1fr,1fr] gap-[1rem]">
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[30vw] flex items-center justify-center sm:h-[9rem] md:h-[14vw] lg:h-[10rem]">
              <img
                src="images/shoe-2.png"
                className="w-[80%] rotate-[-20deg] mb-[1rem]"
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

          <h1 className="text-[30px] leading-[1.2] font-[700] mt-[1rem] ml-[1rem]">
            Never miss out on <span className="text-pink">Sneakers</span> with
            Dosei.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
