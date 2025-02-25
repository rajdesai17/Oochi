import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-400 flex justify-center items-center gap-10 p-20 '>
      <div className='card-container relative w-1/2 h-[50vh] bg-[#004D43] rounded-xl flex justify-center items-center'>
        <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
        <button className='absolute ml-8 w-32 left-0 bottom-10 border-2 border-[#CDEA68] text-[#CDEA68] rounded-2xl text-sm px-2 py-1 font-semibold'>2019-2020</button>
      </div>
      <div className='card-container w-1/2 h-[50vh] flex gap-10'>
        <div className='relative h-full w-1/2 bg-[#212121] rounded-xl flex justify-center items-center'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
            <button className='absolute ml-8 left-0 bottom-10 border-2 border-[#dbdcd7] text-[#fbfcf7] rounded-2xl text-sm px-2 py-1 font-semibold'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='relative h-full w-1/2 bg-[#212121] rounded-xl flex justify-center items-center'>
            <img className='h-32 w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
            <button className='absolute ml-8 left-0 bottom-10 border-2 border-[#e3e4df] text-[#f9faf7] rounded-2xl text-sm px-2 py-1 font-semibold'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>
    </div>
  )
}

export default Cards
