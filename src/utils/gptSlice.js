import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState : {
        showGptSearch:false,
        moviesNames : null,
        moviesResults : null
    },
    reducers :{
        toggleGptsearchView :(state,action)=>{
           state.showGptSearch = !state.showGptSearch  
        },
        gptMovies :(state,action)=>{
        const {moviesNames,moviesResults} = action.payload
        state.moviesNames = moviesNames 
        state.moviesResults = moviesResults
        }
    }

})

export const {toggleGptsearchView , gptMovies} =gptSlice.actions
export default gptSlice.reducer