import React from 'react'

function Catagory({item}) {
  return (
    <div className='flex flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
        <img src={item.src} alt ={'catgory img'} className='w-[100%]'/>
        <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
            
            <h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
            <button className='btn'>See More</button>
        </div>
        
    </div>
  )
}

export default Catagory;