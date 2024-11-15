import React from 'react';
import ChatText from './ChatText';

const HeaderChatRoom = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full h-fit px-5 py-2'>
          <p className='text-[15px] font-medium text-[#F5F5F5]'>Top of the week!</p>
          <p className='text-[#C0CAD7] text-[10px]'>Explore the most viewed...</p>
        </div>
        <div className='w-full h-fit py-2 grid-cols-4 grid   px-5'>
          <ChatText text={"Hi, I'm Jenil! We are doing this to win cool prizes!! Yeah, we know we won't be getting any prizes from college as expected, but still, the taste of winning will be good!!"}/>
          <ChatText text={"Hey, Jenil! You never know... we might just surprise ourselves!"}/>
          <ChatText text={"Hey, Jenil! You never know... we might just surprise ourselves!"}/>
          <ChatText text={"Honestly, I don't care about the prizes as much as just having fun with the whole group!"}/>
     
   
    
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#534fa076]'></div>
    </>
  );
};

export default HeaderChatRoom;
