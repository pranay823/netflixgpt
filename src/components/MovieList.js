import React from 'react'
import MoviesCard from './MoviesCard';
import { Link } from 'react-router-dom';

const MovieList = ({title , nowPlaying}) => {

  return (

    <div className='p-2 text-white '>
        <h1 className='md:text-2xl text-lg mb-2 font-medium pl-4'>{title}</h1>
        <div className="flex overflow-x-scroll ">
        <div className="flex  pl-2 ">
       { nowPlaying?.map((movie)=>(
        <Link to={"/movies/"+ movie.title} key={movie.id}><MoviesCard posterPath={movie.poster_path} /></Link>))}
        </div>
        </div>
    </div>
  )
}

export default MovieList