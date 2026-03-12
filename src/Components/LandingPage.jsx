import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightUpLine, RiArrowRightDownLine } from "react-icons/ri";

function LandingPage() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='h-screen w-full pt-16 md:pt-1'>
      <div className='textstructure px-4 md:px-20 mt-10 md:mt-52'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div key={index} className='masker overflow-hidden'>
            <div className='flex items-end'>
              {index === 1 && (
                <motion.div
                  className='mr-[1vw] w-[8vw] h-[5.7vw] hidden md:block bg-green-800 rounded-md'
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ duration: 0.8 }}
                />
              )}
              <h1 className='uppercase text-4xl md:text-6xl lg:text-8xl leading-[1.1] md:leading-[5.5vw] tracking-tighter font-bold'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className='border-t-2 mt-10 md:mt-32 flex flex-col md:flex-row gap-4 md:gap-0 px-4 md:px-20 py-3'>
        {["For Public and Private Companies", "From the First Pitch to IPO"].map((item, index) => (
          <p key={index} className='text-sm md:text-md font-light leading-none'>
            {item}
          </p>
        ))}
        
        <div className='start flex gap-3 items-center md:ml-auto'>
          <div 
            className={`cursor-hover px-3 py-2 border-2 border-black text-sm md:text-md transition-all duration-300 ease-out ${isButtonHovered ? 'rounded-none' : 'rounded-full'}`}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Start the Project
          </div>
          <div 
            className='cursor-hover border-2 border-black p-2 rounded-full'
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
          >
            <div className="relative w-4 h-4 md:w-6 md:h-6 overflow-hidden">
              <motion.div
                animate={{ y: isArrowHovered ? '-100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <RiArrowRightUpLine className='w-4 h-4 md:w-6 md:h-6'/>
              </motion.div>
              <motion.div
                animate={{ y: isArrowHovered ? '0%' : '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <RiArrowRightDownLine className='w-4 h-4 md:w-6 md:h-6'/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
