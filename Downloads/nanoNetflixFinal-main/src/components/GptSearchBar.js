import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Api_Options } from '../utils/constants'
import { gptMovies } from '../utils/gptSlice'
import { lang } from '../utils/languageConstants'
import { openai } from '../utils/openai'


const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang )
  const searchText = useRef(null);
  const dispatch = useDispatch();



  const searchMovieTMDB= async (movie)=>{

    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+ "&include_adult=false&language=en-US&page=1",Api_Options)

    const json = await data.json();
    const filtered_results = json.results.filter((movie_title)=>(movie_title.title === movie.trim()))
   return  filtered_results[0]
  }
 

  const gptSearchClickHandler = async()=>{

    const gptQuery = " Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value +".only give me names of 5 movies , comma separated  like the example given ahead. Example resilt: gadar,sholay,don,shaitaan ,golmaal" 

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices) return 

    const movieList = gptResults.choices[0]?.message?.content.split(",");

    const promiseArray = movieList.map((movie)=> searchMovieTMDB(movie)) 
    // [promise , promise , promise , promise , promise  .... ]
    //  ['Andaz Apna Apna', ' Chupke Chupke', ' Padosan', ' Chalti Ka Naam Gaadi', ' Half Ticket', ' Baap Re Baap', ' Biwi No. 1', ' Aankhen', ' Parivar', ' Bombay to Goa']
   const tmdbResults = await Promise.all(promiseArray)
   dispatch(gptMovies({moviesNames :movieList , moviesResults: tmdbResults}))
  }

  return (
    <div className='flex justify-center md:pt-[10%] pt-[30%]  '>
      <form onSubmit={(e)=>e.preventDefault()} className=' bg-black w-1/2 md:grid md:grid-cols-12 min-w-[350px] flex flex-col '>
        <input ref={searchText} className='p-4 m-4 col-span-9' type="text" placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button onClick={gptSearchClickHandler}
         className='py-2 px-4 bg-red-600 col-span-3 m-4'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar