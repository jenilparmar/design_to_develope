import React from "react";
import { FaSearch } from "react-icons/fa";
const Rear = () => {
  return (
    <div className="w-1/3 h-fit flex flex-col justify-start py-5 px-10">
      <input type="text" className="hidden" />
      <div className="px-2 py-3 border-[1px] rounded-xl  text-[#A2A3BB] text-[10px] flex flex-row justify-between">
        Search <FaSearch className="self-center text-[12px]" />
      </div>

      <div className="bg-[#393B70]  h-80  mt-4 rounded-2xl"></div>
      <div className="bg-[#393B70] mt-4 h-fit py-2 rounded-2xl flex flex-col">
        <p className="px-6 py-1 text-[#fff] font-medium text-[14px]">
          Subscribe To Premium
        </p>
        <p className="text-[#A2A3BB] px-6">
          Subscribe to unlock new features, access exclusive tools, and, if
          eligible, receive a fair share of ongoing revenue.
        </p>
        <button className="bg-gradient-to-t from-[#bab153] to-[#ad8a1f] px-4 py-2 rounded-2xl active:scale-95 transition-all duration-150  self-end  mr-6 mb-2 font-medium text-white">
          Premium
        </button>
      </div>
    </div>
  );
};

export default Rear;
