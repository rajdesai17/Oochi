import React from 'react'

function Feature() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] pb-16 border-zinc-700'>
        <h1 className='text-7xl font-semibold font-["Neue Montreal-Regular"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className="cards w-full flex gap-10 p-20">
          <div className="card-container rounded-lg h-full w-1/2 bg-red-600 overflow-hidden">
            <div className="card bg-green-400 w-full h-[80vh]"></div>
          </div>
          <div className="card-container rounded-lg h-full w-1/2 bg-red-600 overflow-hidden">
            <div className="card bg-green-400 w-full h-[80vh]"></div>
          </div>
          
        </div>
    </div>
  )
}

export default Feature
