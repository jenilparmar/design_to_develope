import { getCodesFromCookie } from '@/Jenil/Components/addCodeToCookies'
import ThoughtRoomList from '@/Jenil/Components/UploadFolder/ThoughtRoomList'
import UploadThought from '@/Jenil/Components/UploadFolder/UploadThought'
import React, { useEffect, useState } from 'react'

const Upload = () => {
  const [codes  , setCodes] = useState([])
  const [activeCode, setActiveCode] = useState(null);

  useEffect(() => {
    const arr = getCodesFromCookie();
    setCodes(arr);
  }, []);
  return (
    <div className='w-full h-screen bg-[#29274c] flex flex-col justify-center'>
        <div className='flex flex-row text-xl text-[#fff] self-center gap-10  rounded-2xl border-2 border-white py-2 px-2 justify-center' >
            <p className= 'hover:bg-[#963885] px-4 py-1 rounded-2xl transition-all duration-300 '>Thought</p>
            <p className='hover:bg-[#963885] px-4 py-1 rounded-2xl transition-all duration-300 '>Image</p>
        </div>
      <div className='flex my-4 flex-row w-7/12 h-96 self-center bg-[#373567]'>
      <div className='w-1/2 bg-[#373567]'>
      <UploadThought room={activeCode}/>
      </div>
      <div className='w-[2px] h-full  self-center  bg-[#53519f]'></div>
      <div className='w-1/2 h-full overflow-y-scroll py-2'>
    <ThoughtRoomList setActiveCode={setActiveCode} codes={codes}/>
      </div>
      </div>
    </div>
  )
}

export default Upload
