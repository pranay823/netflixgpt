import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { login_background_img } from '../utils/constants'
import {  searchMovieTMDBSearch } from '../utils/functions'
import SearchSuggestion from './SearchSuggestion'

const Search = () => {
    const searchText = useRef(null)
    const [moviesResults, setmoviesResults] = useState(null)

    const searchClickHandler = async()=>{
 const results = await searchMovieTMDBSearch(searchText?.current?.value)
   setmoviesResults(results)
  
  

    }

  return (
    <div>
         <div className="absolute w-full h-full -z-10">
        <img  className="w-screen h-screen object-cover fixed "
          src={ login_background_img} alt="background" ></img>
          </div>
          <div className='flex justify-center md:pt-[10%] pt-[30%]  '>
      <form onSubmit={(e)=>e.preventDefault()} className=' bg-black w-1/2 md:grid md:grid-cols-12 min-w-[350px] flex flex-col '>
        <input onChange={searchClickHandler} ref={searchText} className='p-4 m-4 col-span-9' type="text" placeholder="Search a movie"></input>
        <button 
         className='py-2 px-4 bg-red-600 col-span-3 m-4'>Search</button>
      </form>
    </div >
    <div className='flex flex-col justify-center  mt-4 '>
    {moviesResults?.map((movie)=>{
    return <SearchSuggestion title={movie?.title} lang={movie?.original_language} poster_path={movie?.poster_path } />
    })}
    </div>
    </div>
  )
}

export default Search