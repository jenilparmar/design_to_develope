import React from 'react';

import UploadBox from './UploadBox';

const ThoughtRoomList = ({ codes  , setactiveRoom , setPresentCode}) => {
  return (
    <div className="w-full bg-transparent flex flex-col justify-start">
      <h1 className="self-center py-2 text-xl text-[#fff] font-medium">
        Your Thought Rooms Are
      </h1>
      <div className="h-[1px] w-full bg-[#ffffff48] mb-4"></div>
      {codes && codes.length > 0 ? (
        codes.map((code, index) => (
          <UploadBox setActiveCode={setactiveRoom} code={code}  key={index} presentCode={setPresentCode}/>
        ))
      ) : (
        <p className="text-center text-[#ffffffb3]">No thought rooms available.</p>
      )}
    </div>
  );
};

export default ThoughtRoomList;
