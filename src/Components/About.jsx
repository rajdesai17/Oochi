import React from 'react'

export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full p-20 bg-yellow-400 rounded-tl-3xl rounded-tr-3xl'> 
      <h1 className='font-["Neue Montreal-Regular"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='w-full border-t-2 mt-20 border-yellow-500'></div>
      <div className='flex justify-between items-center'>
        {["What you can expect :", "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating." , "S : " ].map((item , index) => (
            <div key={index} className={`flex w-fit items-end ${index === 1 && "ml-80 , mr-40"}`}>
                {item}
            </div>
        ))}
      </div>
      <div className='w-full border-t-2 mt-20 border-yellow-500'></div>
      <div className='flex pt-20'>
        <div className='w-1/2 '>
        <h1 className='text-6xl'>Our Approach</h1>
        <button className='px-10 py-6 mt-10 rounded-full text-white bg-zinc-900 flex gap-5 items-center'>
            Read More
            <div className='h-2 w-2 bg-white rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-yellow-300 rounded-xl '></div>
      </div>
      
    </div>
  )
}
