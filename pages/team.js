import TeamCard from "components/TeamCard";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Image from "next/image";
import React from "react";

function Team() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-full z-[-10] bg-fixed">
        <Image
          src="/images/features-bg.png"
          layout="fill"
          alt="img"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <Navbar scrollTrigger={50} />

      <div className="flex-1 pt-[160px] pb-[100px] flex justify-center flex-col">
        <div className="container">
          <TeamCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
