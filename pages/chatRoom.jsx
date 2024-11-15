import HeaderChatRoom from '@/Jenil/Components/ChatRoom/HeaderChatRoom'
import TableOfChats from '@/Jenil/Components/ChatRoom/TableOfChats'
import Thoughts from '@/Jenil/Components/ChatRoom/Thoughts'
import React from 'react'

const chatRoom = () => {
  return (
    <div className='w-full h-screen bg-[#29274c] flex flex-row justify-between'>
      <TableOfChats/>
      <div className='w-10/12 flex flex-col'>
      <HeaderChatRoom/>
      <Thoughts/>
      </div>
    </div>
  )
}

export default chatRoom
