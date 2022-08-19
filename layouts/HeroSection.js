import React from "react";

function HeroSection() {
  return (
    <section className="">
      <div className="container">
        <div className="text-center min-h-screen flex justify-center flex-col">
          <div className="mb-9">
            <img
              src="images/logo.svg"
              className="w-[80%] mx-auto mb-2"
              alt=""
            />
            <h1 className="text-center text-white text-[30px] leading-[1]">
              Redefining the NFT Experience
            </h1>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <button className="button text-base font-medium">
              Join Waitlist
            </button>
            <button className="button flex items-center justify-center space-x-1">
              <span className="block leading-[1.1] text-[10px] w-[7em]">
                View Collection On Opensea
              </span>
              <img
                src="images/opensea-icons.png"
                className="w-[1.2rem]"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="min-h-screen flex justify-center flex-col">
          <div className="bg-[rgba(17,84,255,0.2)] p-[1rem] rounded-[.6rem] grid grid-cols-[1fr,1fr] gap-[1rem]">
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[93.67px] flex items-center justify-center">
              <img
                src="images/shoe-2.png"
                className="w-[80%] rotate-[-20deg] mb-[1rem]"
                alt=""
              />
            </div>
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[93.67px] flex items-center justify-center">
              <img src="images/chart.png" className="w-[80%]" alt="" />
            </div>
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[93.67px] flex items-center justify-center">
              <img src="images/tokens.png" className="w-[80%]" alt="" />
            </div>
            <div className="bg-[rgba(17,84,255,0.2)] rounded-[.6rem] h-[93.67px] flex items-center justify-center">
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
