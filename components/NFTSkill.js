import React from "react";

function NFTSkill({ title, subtitle, ability, bg = "bg-[#3A7CFA]" }) {
  return (
    <div className={`rounded-[4px] py-1 px-[2px] sm:py-2 sm:px-2 ${bg}`}>
      <p className="text-xs sm:text-sm text-white font-normal text-center">
        {title}
      </p>
      <p className="text-xs sm:text-sm text-white font-bold text-center">
        {subtitle}
      </p>
      <p className="text-xs sm:text-sm text-white font-normal text-center">
        {ability}
      </p>
    </div>
  );
}

export default NFTSkill;
