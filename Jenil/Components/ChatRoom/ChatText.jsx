import React from "react";

const ChatText = ({ text }) => {
  return (
    <div className="w-fit max-w-60 text-[#F5F5F5] mx-1 max-h-24 min-h-20 justify-center flex flex-col min-w-60 p-1 text-[10px] indent-2 bg-gradient-to-t from-[#722d65] bg-[#963885] rounded-t-xl rounded-l-xl text-wrap">
      <p>{text}</p>{" "}
    </div>
  );
};

export default ChatText;
