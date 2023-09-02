import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: "gtp",
    initialState: {
        showGtpSearch: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGtpSearch = !state.showGtpSearch
        }
    }
})

export const { toggleGptSearchView } = gtpSlice.actions
export default gtpSlice.reducer