import React from "react";

function HowItWorks() {
  return (
    <div className="section-card">
      <div className="flex-1 space-y-4 w-full">
        <div className="bg-[#3B9EFE] fs-20px text-white text-center font-normal py-2 px-8 rounded-md">
          Common (60% of NFTs)
        </div>
        <div className="bg-[#7000FF] fs-20px text-white text-center font-normal py-2 px-8 rounded-md">
          Rare (20% of NFTs)
        </div>
        <div className="bg-[#FF39D3] fs-20px text-white text-center font-normal py-2 px-8 rounded-md">
          Mythical(12% of NFTs)
        </div>
        <div className="bg-[#FA3A3A] fs-20px text-white text-center font-normal py-2 px-8 rounded-md">
          Legendary(6% of NFTs)
        </div>
        <div className="bg-[#FFC700] fs-20px text-white text-center font-normal py-2 px-8 rounded-md">
          Ancient(1.2% of NFTs)
        </div>
      </div>
      <div className="flex-1">
        <h1 className="heading fs-60px">How It Works</h1>

        <p className="fs-20px font-normal mb-6">
          The airdrop you receive{" "}
          <span className="underline">directly correlates</span> to the{" "}
          <span className="underline">rarity classification</span> of your Dosei
          NFT. There are 5 rarity classifications to Dosei NFTs: Common, Rare,
          Mythical, Legendary, and Ancient.
        </p>

        <p className="fs-20px font-normal mb-6">
          Each Dosei NFT has it’s rarity graded on the uniqueness of the NFTs
          traits.
        </p>

        <p className="fs-20px font-normal">
          In the initial mint of 2500, there are 1500 common NFTs, 500 Rare
          NFTs, 300 mythical NFTs, 150 Legendary NFTs, and 30 1/1 NFTs. (20
          Reserved For Staff, etc)
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
