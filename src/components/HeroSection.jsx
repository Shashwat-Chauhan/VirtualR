import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 '>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide p-10'>VirtualR build tools 
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text '>{" "}for developers</span>
      </h1>
      <p className=' text-lg text-center text-neutral-500 max-w-4xl'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality</p>
      <div className=' mt-3 flex space-x-3 justify-center items-center'>
        <a href="#" className='border rounded-md px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800'>Start for free</a>
        <a href="#" className='border rounded-md px-3 py-2'>Documentation</a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4' >
            <source src={video1} type='video/mp4'/>
            Your browser does not support the video tag
        </video>
        <video autoPlay loop muted className='rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4' >
            <source src={video2} type='video/mp4'/>
            Your browser does not support the video tag
        </video>
      </div>
    </div>


  )
}

export default HeroSection
