import React from 'react'

const ThoughtOfDay = ({ text }) => {
  return (
    <div className="inline-block mx-1 my-1 p-1 text-[#F5F5F5] text-[10px] leading-tight bg-[#963885] rounded-t-xl rounded-l-xl">
      <p className="m-0 p-0">{text}</p>
    </div>
  );
};

export default ThoughtOfDay;
