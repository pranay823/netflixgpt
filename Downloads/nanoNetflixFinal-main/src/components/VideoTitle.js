import React from 'react'
import { FiAlertCircle } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";


const VideoTitle = ({title , overview}) => {

  return (
    <div className='bg-gradient-to-r  from-black  absolute w-screen aspect-video   '>
    <div className='md:mt-64 mt-[60%] mx-4 md:w-1/4  px-2  text-white'>
        <h1 className=' text-xl sm:text-2xl md:text-6xl font-bold my-2 pb-2 md:pb-0'>{title}</h1>
        <p className='mb-2 hidden md:inline-block'>{overview}</p>
        <div  className='flex flex-row  '>
            <button className='px-6 pt-3  text-sm md:text-xl  bg-white rounded-md font-semibold mr-4  text-black hidden md:flex '>
              <FaPlay className=' md:text-2xl text-xl  mr-2' />Play</button>
            <button className='px-4 py-3 bg-gray-500 rounded-md font-medium bg-opacity-80  hidden md:flex  '>
              <FiAlertCircle className='text-2xl mr-2' />More Info</button>
        </div>
    </div>
    </div>
  )
}
 
export default VideoTitle