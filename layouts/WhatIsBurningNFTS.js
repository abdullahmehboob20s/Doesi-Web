import Link from "next/link";
import React from "react";

function WhatIsBurningNFTS() {
  return (
    <div className="container flex space-x-20 justify-between">
      <div className="w-[50%]">
        <h1 className="font-bold text-white fs-48px mb-8">
          What is “Burning NFTs”?
        </h1>

        <p className="fs-20px font-normal mb-6">
          Burning NFTs is the process of permanently removing an NFT from the
          blockchain.
        </p>

        <p className="fs-20px font-normal mb-6">
          As more users burn and redeem their CS:GO skins, a reduction in the
          supply of Airdrop 1 will increase the overall value of the collection.
        </p>

        <p className="fs-20px font-normal">
          You can read more about burning NFTs and NFT safety on our{" "}
          <Link href="/">
            <a className="text-ourBlue">support</a>
          </Link>
          .
        </p>
      </div>
      <div className="w-[30%]">
        <img src="images/buning-NFTS.png" className="w-full" alt="" />
      </div>
    </div>
  );
}

export default WhatIsBurningNFTS;
