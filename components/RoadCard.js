import React from "react";

function RoadCard({ fontSize = "text-[4vw]", title, textClassName }) {
  return (
    <div
      className={`bg-[rgba(63,79,138,1)] w-[20vw] h-[10vw] flex items-center justify-center`}
    >
      <p className={`${fontSize} leading-[1] text-center ${textClassName}`}>
        {title}
      </p>
    </div>
  );
}

export default RoadCard;
