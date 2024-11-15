import React from 'react'

const ThoughtOfDay = ({ text }) => {
  return (
    <div className="inline-block min-h-fit max-h-fit min-w-1/4 mx-1 max-w-40  my-1 p-1 text-[#F5F5F5] text-[10px] leading-tight  bg-gradient-to-t from-[#722d65] bg-[#963885]  rounded-t-xl rounded-l-xl">
      <p className="m-0 p-0">{text}</p>
    </div>
  );
};

export default ThoughtOfDay;
