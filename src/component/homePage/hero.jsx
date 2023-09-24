import React from 'react'

function Hero() {
  return (
    <div className='bg-sky-100 h-screen flex px-8 justify-between text-black'>
      <div className='flex flex-col py-64 xl:px-8 px-2'>
      <div className='text-8xl font-semibold font-sans xl:py-4 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient'>
        The Gateway<br>
        </br> to Knowledge
        </div>
        <div className='text-3xl font-light'>
          Read your favourite books<br></br>
          <span className='text-orange-600 font-normal'>Explore</span>, &nbsp;
          <span className='text-purple-600 font-normal'>Discover</span> and &nbsp;
          <span className='text-blue-600 font-normal'>Learn</span>!
          
        </div>
        </div>

      <div className=''>
        <img className="w-80" src="/asseta.png" alt="hero_image"></img>
      </div>
      </div>
  )
}

export default Hero