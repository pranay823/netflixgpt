
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Api_Options } from '../utils/constants'
import {addMovieActors} from '../utils/moviesSlice'

const useCreditsDetails = (id) => {
 
    const dispatch = useDispatch()

   const getCreditsDetails = async()=>{
    
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,Api_Options)
        const json = await data.json()
       dispatch(addMovieActors(json?.cast))
       
    }


    useEffect(()=>{
        getCreditsDetails()
      },[id])

}




export default useCreditsDetails