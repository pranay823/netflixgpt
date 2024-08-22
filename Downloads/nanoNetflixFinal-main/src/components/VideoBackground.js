 
import { useSelector } from "react-redux";
import useMovieVideos from "../Hooks/useMovieVideos";


const VideoBackground = ({ movieId }) => {
    const movieTrailer = useSelector(store=> store.movies?.movieTrailer)

    useMovieVideos(movieId);

 
  return (
    <div className="w-screen md:pt-0 pt-[20%] bg-black md:bg-none ">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ movieTrailer?.key +"?si=V5gdkrMU5hVB6rtt&amp;start=3&autoplay=1&mute=1"}
    
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
