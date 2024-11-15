'use server'
import HeaderChatRoom from '@/Jenil/Components/ChatRoom/HeaderChatRoom';
import TableOfChats from '@/Jenil/Components/ChatRoom/TableOfChats';
import Thoughts from '@/Jenil/Components/ChatRoom/Thoughts';
import { getCodesFromCookie } from '@/Jenil/Components/addCodeToCookies';
import React, { useState, useEffect } from 'react';

const ChatRoom = () => {
  const [codes, setCodes] = useState([]); // Codes from cookies
  const [activeCode, setActiveCode] = useState(null); // Current active code

  // Load codes from cookies on component mount
  useEffect(() => {
    const arr = getCodesFromCookie();
    setCodes(arr);
  }, []);

  // Set the initial activeCode when codes are populated
  useEffect(() => {
    if (codes.length > 0) {
      setActiveCode(codes[0]);
    }
  }, [codes]);

  return (
    <div className="w-full h-screen bg-[#29274c] flex flex-row justify-between">
      <TableOfChats codes={codes} setActiveCode={setActiveCode} />
      <div className="w-10/12 flex flex-col">
        <HeaderChatRoom activeCode={activeCode} />
        <Thoughts />
      </div>
    </div>
  );
};

export default ChatRoom;
