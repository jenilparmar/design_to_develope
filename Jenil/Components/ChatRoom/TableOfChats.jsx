import React from 'react'
import {chatroom} from './chatRoom'
const TableOfChats = () => {
  return (
    <div className='w-60 h-screen ml-20 border-r-2 border-[#a2a3bb28]   flex flex-col px-3 py-6'>
     <input type="text" className='hidden' />
     <div className='w-full border-2 border-[#a2a3bb6a]  text-[#A2A3BB] px-2 py-2 rounded-xl text-xs'>Search</div>
        <charroom  url={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} name={"Chutur Butur Vele"}/>
   
    </div>
  )
}

export default TableOfChats
