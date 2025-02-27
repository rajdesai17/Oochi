function Footer() {
  return (
    <div data-scroll data-scroll-speed=".2" className='flex flex-col md:flex-row gap-8 p-4 md:p-20'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl leading-[1.1]'>
          EYE-<br/>OPENING
        </h1>
        <svg 
          className='mt-8 md:mt-[50vh] w-16 md:w-24'
          viewBox="0 0 72 30" 
          fill="currentColor"
        >
          {/* Your original SVG path */}
        </svg>
      </div>

      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl leading-[1.1] mb-6 md:mb-10'>
          PRESENTATION
        </h1>
        <div className='flex flex-col gap-2 md:gap-4'>
          {['Instagram', 'Facebook', 'Twitter', 'Whatsapp'].map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className='text-lg md:text-xl hover:underline hover:underline-offset-4'
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;