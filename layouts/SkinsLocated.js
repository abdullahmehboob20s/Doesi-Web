import Link from "next/link";
import React from "react";

function SkinsLocated() {
  return (
    <div className="section-card">
      <div className="flex-1 space-y-4">
        <img src="images/skins-located.png" className="w-full" alt="" />
      </div>
      <div className="flex-1">
        <h1 className="heading fs-48px">
          Where are my skins located and how will I receive them?
        </h1>

        <p className="fs-20px font-normal mb-6">
          Your CS:GO skins are located on a series of 5 official Dosei Steam
          accounts.
        </p>

        <p className="fs-20px font-normal mb-6">
          Upon burning the NFT, you will automatically recieve a trade offer
          from one of our accounts containing your CS:GO skin.
        </p>

        <p className="fs-20px font-normal">
          You can read more about our trading process and ensuring you will
          receieve your items on our{" "}
          <Link href="/">
            <a className="text-ourBlue">support</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default SkinsLocated;
