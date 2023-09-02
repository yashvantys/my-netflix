import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gtpReducer from './gtpSlice'
import configReducer from './configSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gtp: gtpReducer,
        config: configReducer
    }
})

export default appStore