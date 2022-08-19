import React from "react";

function FeatureCard({ title, desc, color = "white" }) {
  return (
    <div
      className={`bg-[rgba(17,84,255,0.2)] py-[28px] px-[2rem] rounded-[4px] border-l-[3px]`}
      style={{ borderColor: color }}
    >
      <p className="text-base font-medium">{desc}</p>
    </div>
  );
}

export default FeatureCard;
