import React from "react";

function NFTSkill({ title, subtitle, ability, bg = "bg-[#3A7CFA]" }) {
  return (
    <div className={`rounded-[4px] p-2 ${bg}`}>
      <p className="text-sm text-white font-normal text-center">{title}</p>
      <p className="text-sm text-white font-bold text-center">{subtitle}</p>
      <p className="text-sm text-white font-normal text-center">{ability}</p>
    </div>
  );
}

export default NFTSkill;
