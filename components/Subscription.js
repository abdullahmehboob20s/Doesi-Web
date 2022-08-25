import React from "react";
import {
  FaCloudDownloadAlt,
  FaShoppingCart,
  FaUnlockAlt,
} from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { CgRedo } from "react-icons/cg";
import { IoGitNetworkOutline } from "react-icons/io5";

function Subscription() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_.5fr] gap-y-8 gap-x-2">
      <div>
        <div className="mb-8">
          <div className="mb-3">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Membership Type:{" "}
            </h4>
            <p className="text-base sm:text-lg text-ourBlue font-normal">
              Dosei - Monthly - No Unbind{" "}
            </p>
          </div>
          <div className="mb-3">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Key:
            </h4>{" "}
            <p className="text-base sm:text-lg text-ourBlue font-normal">
              JD4SI-RMFK2-93LFP
            </p>
          </div>
          <div className="mb-3">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Expires ON:
            </h4>{" "}
            <p className="text-base sm:text-lg text-ourBlue font-normal">
              9/22/2022
            </p>
          </div>
          <div className="mb-3">
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Instances:
            </h4>{" "}
            <p className="text-base sm:text-lg text-ourBlue font-normal">1</p>
          </div>
        </div>

        <button className="flex items-center space-x-4 bg-[#1D1F26] py-2 px-4 rounded-lg">
          <p className="text-sm text-white leading-[1.3]">
            102.23.291.293 <br />
            <span className="text-gray-400">Last Connected:</span>
          </p>
          <span className="text-[1.4rem] text-white">
            <RiShutDownLine />
          </span>
        </button>
      </div>

      <div className="space-y-3">
        <button className="w-full py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
          <span className="text-base sm:text-xl text-white font-medium">
            Download
          </span>
          <span className="text-[1rem] sm:text-[1.2rem] text-white">
            <FaCloudDownloadAlt />
          </span>
        </button>{" "}
        <button className="w-full py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
          <span className="text-base sm:text-xl text-white font-medium">
            Unbind
          </span>
          <span className="text-[.8rem] sm:text-[1rem] text-white">
            <FaUnlockAlt />
          </span>
        </button>{" "}
        <button className="w-full py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
          <span className="text-base sm:text-xl text-white font-medium">
            Scramble Key
          </span>
          <span className="text-[1rem] sm:text-[1.2rem] text-white">
            <IoGitNetworkOutline />
          </span>
        </button>
      </div>

      <div className="flex space-x-6 sm:col-span-2">
        <button className="flex-1 py-1 px-3 bg-[#1557FF] rounded-lg flex items-center space-x-3 justify-center">
          <span className="text-base sm:text-xl text-white font-medium">
            Renew
          </span>
          <span className="text-[1.4rem] text-white">
            <CgRedo />
          </span>
        </button>
        <button className="flex-1 py-1 px-3 bg-[#1D1F26] rounded-lg flex items-center space-x-3 justify-center">
          <span className="leading-[1.2] text-base sm:text-xl text-white font-medium">
            Purchase Instances
          </span>
          <span className="text-[1.2rem] text-white">
            <FaShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Subscription;
