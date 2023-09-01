import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMoviewTrailer: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const { addNowPlayingMovies, addMoviewTrailer } = movieSlice.actions

export default movieSlice.reducer