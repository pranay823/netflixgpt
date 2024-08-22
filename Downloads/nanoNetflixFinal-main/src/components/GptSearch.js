import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { login_background_img } from '../utils/constants'




const GptSearch = () => {
  return (
    <div className=''>
        <div className="absolute w-full h-full -z-10">
        <img  className="w-screen h-screen object-cover fixed "
          src={ login_background_img} alt="background" ></img>
       </div>
        <GptSearchBar />
        <GptMoviesSuggestion />
        </div>
  )
}




export default GptSearch