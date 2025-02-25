import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-800'>
      <div className=' border-2 text flex whitespace-nowrap overflow-hidden'>
        <motion.h1 
          initial= {{x : "0"}}
          animate= {{x : "-100%"}}
          transition={{repeat: Infinity ,ease: "linear",duration: "5"}}
          className='text-[14vw] leading-none tracking-tight font-["Founders Grotesk"] font-semibold pt-10 mb-10 pr-10'>
            WE ARE OOCHI
        </motion.h1>
        <motion.h1 
          initial= {{x : "0"}}
          animate= {{x : "-100%"}}
          transition={{repeat: Infinity ,ease: "linear",duration: "5"}} 
          className='text-[14vw] leading-none tracking-tight font-["Founders Grotesk"] font-semibold pt-10 mb-10 pr-10'>
            WE ARE OOCHI
          </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
