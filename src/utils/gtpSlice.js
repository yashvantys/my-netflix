import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: "gtp",
    initialState: {
        showGtpSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGtpSearch = !state.showGtpSearch
        },
        addGtpMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload
            state.movieResults = movieResults
            state.movieNames = movieNames
        }
    }
})

export const { toggleGptSearchView, addGtpMovieResult } = gtpSlice.actions
export default gtpSlice.reducer