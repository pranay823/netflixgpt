import  { useEffect} from "react";
import { useDispatch} from "react-redux";
import { Api_Options } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieVideos = (movieId) => {

     // getting movie trailer and upating trailer to the store
   
    const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      Api_Options
    );
    const json = await data.json();
    const Trailer = json.results.filter((video) => video.type === "Trailer");
    dispatch(addMovieTrailer(Trailer[0]));
  };

  useEffect(() => {
    getMovieVideos();

  }, []);
}

export default useMovieVideos