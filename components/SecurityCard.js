import React from "react";

function SecurityCard({ title, subtitle, Icon, img, butttonTitle }) {
  return (
    <div>
      <h4 className="text-lg sm:text-xl text-white font-medium mb-1 sm:mb-2">
        {title}
      </h4>

      {subtitle ? (
        <p className="text-gray-400 text-sm sm:text-base max-w-[30rem] w-full mb-4">
          {subtitle}
        </p>
      ) : null}

      <button className="sm:max-w-[16rem] w-full py-1 px-3 bg-[#1557FF] rounded-lg flex items-center space-x-3 justify-center">
        <span className="text-base sm:text-xl text-white font-medium">
          {butttonTitle}
        </span>
        {Icon ? (
          <span className="text-[1.2rem] sm:text-[1.4rem] text-white">
            <Icon />
          </span>
        ) : null}

        {img ? img : null}
      </button>
    </div>
  );
}

export default SecurityCard;
