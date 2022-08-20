import RoadmapDetailedCard from "components/RoadmapDetailedCard";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import React from "react";
import {
  FaDiscord,
  FaRegHeart,
  FaPeopleCarry,
  FaMobileAlt,
  FaRobot,
  FaMedal,
} from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";
import { GiWrappedSweet } from "react-icons/gi";
import { SiRevealdotjs } from "react-icons/si";
import { BiDrink } from "react-icons/bi";
import Image from "next/image";

function Roadmap() {
  return (
    <div>
      <Navbar />

      <div className="py-[160px] realtive">
        <div className="absolute top-0 left-0 w-full h-full z-[-10] bg-fixed">
          <Image
            src="/images/features-bg.png"
            layout="fill"
            alt="img"
            loading="lazy"
            className="object-cover"
          />
        </div>

        <div className="container">
          <div className="min-h-screen grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <RoadmapDetailedCard
              title="Discord"
              desc="Focus on providing quality information on the discord"
              iconOptions={{
                link: "https://discord.com/invite/dosei",
                Icon: FaDiscord,
              }}
              status={{
                value: "Completed",
                bg: "#bee3f8",
                textColor: "#2a4365",
              }}
              arrowClassName="sm:rotate-[-90deg]"
            />
            <RoadmapDetailedCard
              title="Dashboard"
              desc="Complete construction of the dashboard for users to access DoseiAIO and more control over Dosei"
              status={{
                value: "In Progress",
                bg: "#FEFCBF",
                textColor: "#744210",
              }}
              iconOptions={{
                Icon: MdOutlineSpaceDashboard,
              }}
              arrowClassName="lg:rotate-[-90deg]"
            />
            <RoadmapDetailedCard
              title="Discord Closes"
              desc="Upon reaching 5,000 members the Discord server will be closed to the public"
              status={{
                value: "In Progress",
                bg: "#FEFCBF",
                textColor: "#744210",
              }}
              iconOptions={{
                Icon: BsDoorClosed,
              }}
              arrowClassName="lg:rotate-[-90deg]"
            />
            <RoadmapDetailedCard
              title="Social Media"
              desc="Daily Twitch Livestreams/Twitter Spaces/etc to fill up the initial 500 Dosei spots"
              iconOptions={{
                Icon: FaRegHeart,
              }}
              arrowClassName="sm:rotate-[90deg] lg:sm:rotate-[0deg]"
            />
            <RoadmapDetailedCard
              title="Private Mint"
              desc="The selected 500 will have a guaranteed mint to Dosei"
              iconOptions={{ Icon: GiWrappedSweet }}
              arrowClassName="sm:rotate-[-90deg] lg:rotate-0"
            />
            <RoadmapDetailedCard
              title="Public Mint"
              desc="The first initial stock of 250 will be released to the public for .25 ETH"
              iconOptions={{ Icon: GiWrappedSweet }}
              arrowClassName="lg:rotate-[90deg]"
            />
            <RoadmapDetailedCard
              title="Collaborations"
              desc="Dosei will collaborate to involve its members with other NFT projects"
              iconOptions={{ Icon: FaPeopleCarry }}
              arrowClassName="lg:rotate-[90deg]"
            />
            <RoadmapDetailedCard
              title="Pricewatch"
              desc="Dosei members will have free and special perks in the app Pricewatch"
              iconOptions={{ Icon: FaMobileAlt }}
              arrowClassName="sm:rotate-[90deg]"
            />
            <RoadmapDetailedCard
              title="DoseiAIO"
              desc="DoseiAIO will act as the ultimate computer software for purchasing limited goods"
              iconOptions={{ Icon: FaRobot }}
              arrowClassName="sm:rotate-[-90deg]"
            />
            <RoadmapDetailedCard
              title="Reveal NFT's"
              desc="Shortly after members are setup with the mobile app and software, the actual NFT art will be revealed"
              iconOptions={{ Icon: SiRevealdotjs }}
              arrowClassName="lg:rotate-[-90deg]"
            />
            <RoadmapDetailedCard
              title="Rewards /Groupbuys/Giveaways"
              desc="Top members will be rewarded, as well as groupbuys and giveaways for other NFT projects will commense"
              iconOptions={{ Icon: FaMedal }}
              arrowClassName="opacity-0 lg:rotate-[-90deg] lg:opacity-[1]"
            />
            <RoadmapDetailedCard
              title="Social Gatherings/Nightclubs"
              desc="Routine Social Gatherings will take place exclusively for Dosei members"
              iconOptions={{ Icon: BiDrink }}
              arrowClassName="sm:rotate-[90deg] lg:opacity-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Roadmap;
