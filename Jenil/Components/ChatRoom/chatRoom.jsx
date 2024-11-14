import React from 'react'

const chatRoom = ({url , name}) => {
  return (
    <div className='w-full h-10 flex flex-row'>
      
      <div className='h-10 w-10 rounded-full self-center' style={{
        backgroundImage:`url(${url})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}></div>
    <p className='self-center text-[#ffffffa4]'>{name}</p>
    </div>
  )
}

export default chatRoom
