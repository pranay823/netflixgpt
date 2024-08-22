import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addindividualMovieTrailer } from '../utils/moviesSlice';
import {Api_Options} from '../utils/constants'

const useIndividualTrailerVideos = () => {
  
    const dispatch = useDispatch()
    const movieId = useSelector((store)=>store.movies?.movieDetails)
  

 const   getTrailer= async()=>{
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId?.id}/videos?language=en-US`,
            Api_Options
          );
          const json = await data.json();
          const Trailer = json.results?.filter((video) => video.type === "Trailer")[0];
          dispatch( addindividualMovieTrailer(Trailer));
    }

    useEffect(()=>{
      getTrailer()
    },[movieId])
    
}

export default useIndividualTrailerVideos