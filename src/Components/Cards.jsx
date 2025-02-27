function Cards() {
  return (
    <div className='w-full bg-zinc-400 flex flex-col md:flex-row gap-4 p-4 md:p-20'>
      {/* Main Card */}
      <div className='w-full md:w-1/2 h-[30vh] md:h-[50vh] bg-[#004D43] rounded-xl relative flex items-center justify-center'>
        <img 
          src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' 
          className='w-20 md:w-32'
          alt='OCHI Logo'
        />
        <button className='absolute bottom-4 left-4 text-xs md:text-sm px-3 py-1 border-2 border-[#CDEA68] text-[#CDEA68] rounded-2xl'>
          2019-2020
        </button>
      </div>

      {/* Side Cards */}
      <div className='w-full md:w-1/2 flex flex-col gap-4'>
        <div className='w-full h-[30vh] md:h-[24vh] bg-zinc-900 rounded-xl relative flex items-center justify-center'>
          <img 
            src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' 
            className='w-20 md:w-24'
            alt='Clutch Logo'
          />
          <button className='absolute bottom-4 left-4 text-xs md:text-sm px-3 py-1 border-2 border-zinc-200 text-zinc-200 rounded-2xl'>
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        <div className='w-full h-[30vh] md:h-[24vh] bg-zinc-900 rounded-xl relative flex items-center justify-center'>
          <img 
            src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' 
            className='w-20 md:w-24'
            alt='Business Bootcamp'
          />
          <button className='absolute bottom-4 left-4 text-xs md:text-sm px-3 py-1 border-2 border-zinc-200 text-zinc-200 rounded-2xl'>
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;