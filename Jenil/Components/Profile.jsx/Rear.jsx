import React from "react";
import { FaSearch } from "react-icons/fa";
const Rear = () => {
  return (
    <div className="w-1/3 h-screen flex flex-col justify-start py-5 px-10">
      <input type="text" className="hidden" />
      <div className="px-2 py-3 border-[1px] rounded-xl  text-[#A2A3BB] text-[10px] flex flex-row justify-between">
        Search <FaSearch className="self-center text-[12px]" />
      </div>
      <div className="bg-[#393B70] mt-2 h-40 rounded-2xl">
        <p className="px-6 py-3 text-[#fff] font-medium text-[14px]">Subscribe To Premium</p>
      </div>
    </div>
  );
};

export default Rear;
