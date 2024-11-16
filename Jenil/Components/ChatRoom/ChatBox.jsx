import React from "react";

const ChatBox = ({ url, name, setActiveCode }) => {
  return (
    <>
      <div
        className="w-full h-fit flex flex-row my-2 hover:bg-[#534fa081] py-2 rounded-xl"
        onClick={() => {
          setActiveCode(name);
        }}>
        <div
          className="h-10 w-10 rounded-full self-center "
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
        <p className="self-center text-[#ffffffa4] ml-2 text-[10px]">{name}</p>
      </div>
      <div className="w-full h-[1px] bg-[#534fa0]"></div>
    </>
  );
};

export default ChatBox;