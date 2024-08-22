import React from 'react'
import { ImgCDN_URL } from '../utils/constants'

const ActorsCard = ({profile_path ,name}) => {

    
  return (
    <div>
        <div className='md:w-44 mx-4 w-28 '>
            <img className='rounded-full'
              src={ImgCDN_URL+profile_path} alt="no img"></img>
            <h1 className='text-center text-offwhite mt-2 font-medium'>{name}</h1>
        </div>   
    </div>
  )
}

export default ActorsCard