
import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";


const TableOfChats = ({codes  , setActiveCode}) => {
  


  return (
    <div className="w-2/12 h-screen ml-20 border-r-2 border-[#a2a3bb28] overflow-y-scroll flex flex-col px-3 py-6">
      <input type="text" className="hidden" />
      <div className="w-full border-2 border-[#a2a3bb6a] text-[#A2A3BB] px-2 py-2 rounded-xl text-xs">
        Search
      </div>
      <div className="h-8 w-full"></div>
      {codes &&
        codes.map((code, index) => (
          <ChatBox
            key={index}
            setActiveCode = {setActiveCode}
            url={
              "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={code}
          />
        ))}
    </div>
  );
};

export default TableOfChats;