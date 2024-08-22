import { useSelector } from "react-redux";
import { Api_Options } from "./constants";



export const searchMovieTMDB= async (movie)=>{
 
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+ "&include_adult=false&language=en-US&page=1",Api_Options)
    
    const json = await data.json();
    const filtered_results = json.results.filter((movie_title)=>(movie_title.title === movie.trim()))
    return  filtered_results[0]

  }

  export const searchMovieTMDBSearch= async (movie)=>{
 
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+ "&include_adult=false&language=en-US&page=1",Api_Options)
    
    const json = await data.json();
   return json.results 
  }