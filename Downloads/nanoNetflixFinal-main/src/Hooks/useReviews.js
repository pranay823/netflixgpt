import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Api_Options } from "../utils/constants"
import { addMovieReviews } from "../utils/moviesSlice"


const useReviews = (id) => {

    const dispatch = useDispatch()
 
const getReviews=async()=>{

const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,Api_Options)
const json = await data.json()
dispatch(addMovieReviews(json?.results))
}

useEffect(()=>{
getReviews()
},[id])
}

export default useReviews