import React from "react";

function AirDrop() {
  return (
    <div className="lg:h-screen lg:max-h-[50em] flex items-center relative">
      <img
        src="images/features-bg.png"
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        alt=""
      />
      <div className="section-card py-[120px] lg:py-0">
        <div className="flex-1">
          <h1 className="heading fs-60px">Airdrop One</h1>

          <p className="fs-20px font-normal mb-6">
            To provide Dosei members with a valuable first airdrop, each of the
            NFT airdrops will be able to be burned and redeemed for a skin from
            Counter Strike: Global Offensive.
          </p>

          <p className="fs-20px font-normal">
            Users will have the choice whether to hold their airdrop for future
            rewards within Dosei, sell the NFT on OpenSea, or redeem it for a
            CS:GO skin.
          </p>
        </div>
        <div className="flex-1 ">
          <img src="images/airdrop.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AirDrop;
