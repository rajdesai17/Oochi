import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate , setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove" , (e) => {
            let mouseX = e.clientX ;
            let mouseY = e.clientY ;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaX,deltaY)*(180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'>
        <div className='absolute flex justify-between items-center gap-5 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='h-[15vw] w-[15vw] rounded-full bg-white flex justify-center items-center'>
                <div className='relative bg-black h-2/3 w-2/3 rounded-full '>
                    <div style={{transform : `translate(-50% , -50%) rotate(${rotate}deg)`}} className='line h-6 w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
                        <div className='bg-zinc-200 h-6 w-6 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='h-[15vw] w-[15vw] rounded-full bg-white flex justify-center items-center'>
                <div className='relative bg-black h-2/3 w-2/3 rounded-full '>
                    <div style={{transform : `translate(-50% , -50%) rotate(${rotate}deg)`}} className='line h-6 w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='bg-zinc-200 h-6 w-6 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
