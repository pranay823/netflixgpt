import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        movieDetails:null,
        showMovieDetail:false,
        individualMovieTrailer : null,
        movieActors : null,
        movieReviews : null
    } ,
    reducers: {
        addNowPlayingMovies : (state,action)=>{
        state.nowPlayingMovies = action.payload
        },
        addMovieTrailer : (state,action)=>{
            state.movieTrailer = action.payload
        },
        addPopularMovies :(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies :(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies :(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails = action.payload
        },
        toggleshowMovieDetailPage:(state,action)=>{
            state.showMovieDetail = !state.showMovieDetail
        },
        addindividualMovieTrailer:(state,action)=>{
            state.individualMovieTrailer= action.payload
        },
        addMovieActors : (state,action)=>{
        state.movieActors = action.payload
        },
        addMovieReviews : (state,action)=>{
        state.movieReviews = action.payload
        }
    }
})

export const  {addNowPlayingMovies , addMovieTrailer , addPopularMovies,addTopRatedMovies,addUpcomingMovies , addMovieDetails, toggleshowMovieDetailPage , addindividualMovieTrailer , addMovieActors , addMovieReviews } = moviesSlice.actions;

export default moviesSlice.reducer ;