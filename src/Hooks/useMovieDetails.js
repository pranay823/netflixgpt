import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovieTMDB } from '../utils/functions'
import { addMovieDetails } from '../utils/moviesSlice'


const useMovieDetails =(movie) => {
 
 const dispatch = useDispatch()   

const getMovieDetails=async()=>{
const movieInfo = await searchMovieTMDB(movie)
dispatch(addMovieDetails(movieInfo))
}

useEffect(()=>{
getMovieDetails()
},[])
}

export default useMovieDetails