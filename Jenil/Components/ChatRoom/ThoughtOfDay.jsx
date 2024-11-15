import React from 'react'

const ThoughtOfDay = ({ text }) => {
  return (
    <div className=" pin  text-[#F5F5F5] text-[12px]   bg-gradient-to-t from-[#722d65] bg-[#963885]  rounded-t-xl rounded-l-xl">
      <p className="m-0 p-0">{text}</p>
    </div>
  );
};

export default ThoughtOfDay;
