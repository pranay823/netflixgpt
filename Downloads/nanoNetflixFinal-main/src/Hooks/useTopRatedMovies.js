

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Api_Options } from "../utils/constants"
import { addTopRatedMovies } from "../utils/moviesSlice"

const useTopRatedMovies = () => {
 const dispatch= useDispatch()

const TopRatedMovies = async()=>{
const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',Api_Options)
const json = await data.json()
dispatch(addTopRatedMovies(json.results))

}

useEffect(()=>{
TopRatedMovies()
},[])

}

export default useTopRatedMovies