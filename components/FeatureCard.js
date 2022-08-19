import React from "react";

function FeatureCard({ title, desc, color = "white" }) {
  return (
    <div
      className={`bg-[rgba(17,84,255,0.2)] py-[28px] px-[2rem] rounded-[4px] border-l-[3px] xl:border-l-[4px]`}
      style={{ borderColor: color }}
    >
      <h1 className="hidden md:block text-xl lg:text-2xl xl:text-3xl font-bold mb-3">
        {title}
      </h1>
      <p className="text-base font-medium">{desc}</p>
    </div>
  );
}

export default FeatureCard;
