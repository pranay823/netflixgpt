import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from '../components/MoviesCard'

const GptMoviesSuggestion = () => {
  const {moviesNames , moviesResults} = useSelector((store) => store.gpt)
  if(!moviesResults) return ;


 
  return (
    <div className='bg-black p-8 flex justify-between w-5/6 m-auto text-white mt-8 font-semibold opacity-90 flex-wrap '>
 
{
      moviesResults.map((movies,index)=>{
     
       return(
        <div>
        <h1 className='m-2'>{moviesNames[index]}</h1>
        < MoviesCard posterPath={movies?.poster_path} />
        </div>
       )
       
      })
}
    </div>
  )
}

export default GptMoviesSuggestion