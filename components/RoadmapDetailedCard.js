import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

function RoadmapDetailedCard({
  title,
  desc,
  iconOptions = { link: "", Icon: null },
  status = { value: "" },
  arrowClassName,
}) {
  return (
    <div className="bg-[#1E2644] p-6 rounded-[6px] text-center flex flex-col items-center">
      <header className="flex flex-col items-center space-y-2 justify-center">
        {iconOptions.link && iconOptions.Icon ? (
          <Link href={iconOptions.link} passHref>
            <a target="_blank" className="text-[2rem]">
              <iconOptions.Icon />
            </a>
          </Link>
        ) : null}

        {iconOptions.Icon && !iconOptions.link ? (
          <div target="_blank" className="text-[2rem]">
            <iconOptions.Icon />
          </div>
        ) : null}

        <p className="text-2xl text-white font-bold">{title}</p>
        {status.value ? (
          <div
            className="py-[.2rem] px-[.8rem] rounded-[2rem] font-bold text-[.7rem]"
            style={{ background: status.bg, color: status.textColor }}
          >
            {status.value}
          </div>
        ) : null}
      </header>

      <main className="min-h-[6rem] flex flex-col justify-center py-6 flex-1">
        <p className="text-white text-lg leading-[1.4] max-w-[18rem]">{desc}</p>
      </main>

      <footer>
        <BiChevronDown
          color="white"
          className={`text-[2rem] ${arrowClassName}`}
        />
      </footer>
    </div>
  );
}

export default RoadmapDetailedCard;
