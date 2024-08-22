import React from 'react'
import MoviesCard from './MoviesCard'
import { Link } from 'react-router-dom'

const SearchSuggestion = ({title ,lang ,poster_path}) => {
  return (

   <Link to={"/movies/"+ title} > <div className='flex  justify-between  p-4 text-offwhite w-[400px] md:w-1/2  h-[100px]  bg-black  opacity-90 mx-auto  '>
     <h1 className='md:text-2xl text-lg my-auto md:my-2 '>{title} ({lang})</h1>
        <MoviesCard posterPath={poster_path} />
    </div></Link>

 
  )
}

export default SearchSuggestion