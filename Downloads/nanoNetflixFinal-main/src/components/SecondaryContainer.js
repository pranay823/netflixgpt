import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import ShimmerUI from './ShimmerUI'

const SecondaryContainer = () => {
 
  const movies = useSelector(store=>store.movies)
  if(!movies) return <ShimmerUI />

  return (
    <div className='bg-black'>
      <div className='md:-mt-52 mt-0  relative'>
     <MovieList title={"Now Playing"} nowPlaying={movies.nowPlayingMovies} />
     <MovieList title={"Top Rated"} nowPlaying={movies.topRatedMovies} />
     <MovieList title={"Popular"} nowPlaying={movies.popularMovies} />
     <MovieList title={"Upcoming"} nowPlaying={movies.upcomingMovies} />
     </div>
    </div>
  )
}

export default SecondaryContainer