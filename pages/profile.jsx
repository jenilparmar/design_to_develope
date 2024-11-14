import Below from "@/Jenil/Components/Profile.jsx/Below";
import Middle from "@/Jenil/Components/Profile.jsx/Middle";
import Rear from "@/Jenil/Components/Profile.jsx/Rear";
import React from "react";

const profile = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col">
      <div className=" bg-[#29274c] h-fit ml-20 flex flex-row">
        <Middle />
        <Rear />
      </div>
      <Below />
      </div>
    </>
  );
};

export default profile;
