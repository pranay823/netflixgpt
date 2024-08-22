import React from 'react'
import VideoTitle from '../components/VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import ShimmerUI from './ShimmerUI'

const MainContainer = () => {
  const movies = useSelector(store=> store.movies?.nowPlayingMovies)
 if(movies == null) return <ShimmerUI />

   const mainMovie = movies[4]
  const {overview , original_title ,id} = mainMovie 

  return (
    <div >
    <VideoTitle  title={original_title} overview={overview}/>
    <VideoBackground movieId={id}  />
    </div>
  )
}

export default MainContainer