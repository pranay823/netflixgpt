import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Api_Options } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice"

const useUpcomingMovies = () => {
 const dispatch= useDispatch()

const UpcomingMovies = async()=>{
const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',Api_Options)
const json = await data.json()
dispatch(addUpcomingMovies(json.results))

}

useEffect(()=>{
UpcomingMovies()
},[])

}

export default useUpcomingMovies

