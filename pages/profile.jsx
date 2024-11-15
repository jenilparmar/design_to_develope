import Middle from "@/Jenil/Components/Profile.jsx/Middle";

import React from "react";
import Below from "@/Jenil/Components/Profile.jsx/Below";

import Rear from "@/Jenil/Components/Profile.jsx/Rear";

const profile = () => {
  return (
    <div className=" bg-[#29274c] h-screen ml-20 flex flex-row">
      <Middle />
      <Rear />
    </div>
  );
};

export default profile;
