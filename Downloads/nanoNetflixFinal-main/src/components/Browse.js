import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Search from './Search';



const Browse = () => {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  const showSearch = useSelector((store)=> store.search.showSearch)
   useNowPlayingMovies()
   usePopularMovies()
   useTopRatedMovies()
   useUpcomingMovies()

  return (
    <div>
        <Header /> 
     {  showSearch ? <Search /> :
        showGptSearch ? <GptSearch /> : 
       <>
        <MainContainer />
        <SecondaryContainer />
       </>
      }
    </div>
  )
}

export default Browse; 