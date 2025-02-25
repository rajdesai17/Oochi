import { motion } from 'framer-motion';
import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";

function landingPage() {

  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".3" className='h-screen w-full pt-1'>
        <div className='textstructure px-20 mt-52'>
            {["We Create" , "Eye-Opening" , "Presentations"].map((item , index)=>(
                // eslint-disable-next-line react/jsx-key
                <div className='masker'>
                    <div className='flex w-fit items-end'>
                        {index === 1 && (
                            <motion.div 
                                initial={{width : 0}} 
                                animate = {{width : "10vw"}} 
                                transition={"ease : [0.76, 0, 0.24, 1]"}
                                className='mr-[1vw] w-[8vw] h-[5.7vw] top-1 relative bg-green-800 rounded-md '>
                            </motion.div>
                                
                        )}
                        <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-["Founders Grotesk"] font-bold'>
                        {item}
                    </h1>
                    </div>
                </div>
                
            ))}
            

        </div>
        <div className='border-t-2 bg-zinc mt-32 flex items-center justify-between px-20 py-3'>
            {["For Public and Private Companies" , "From the First Pitch to IPO"].map((item,index)=>(
                <p className='font-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex gap-3 items-center'>
                <div className='px-3 py-2 border-2 border-black rounded-full'>
                    Start the Project
                </div>
                <div className='border-2 border-black py-2 px-2 rounded-full '>
                    <RiArrowRightUpLine/>
                </div>
            </div>
            
        </div>
        
      
    </div>
  )
}

export default landingPage
