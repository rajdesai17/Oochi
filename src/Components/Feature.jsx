function Feature() {
  return (
    <div className='w-full py-10 md:py-20'>
      <div className='w-full px-4 md:px-20 pb-8 md:pb-16 border-b border-zinc-700'>
        <h1 className='text-3xl md:text-6xl lg:text-7xl font-semibold'>
          Featured Projects
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-4 p-4 md:p-20'>
        {[1, 2].map((item) => (
          <div key={item} className='w-full md:w-1/2 h-[40vh] md:h-[80vh] rounded-lg overflow-hidden'>
            <div className='w-full h-full bg-green-400 hover:scale-105 transition-transform duration-300' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;