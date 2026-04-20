import { createSlice } from "@reduxjs/toolkit";

// Slice for search related action and state
const searchSlice = createSlice({
    // name of the slice
    name: 'search',
    // initial state of the search
    initialState: {
        text: ''
    },
    // reducer function related to search
    reducers: {
        setSearchText: (state, action) =>{
            state.text = action.payload
        },
        setInputEmpty: (state, action) =>{
            state.text = ""
        }
    }
})

// exporting selector function to get the searched text from store
export const selectSearchText = (state) => state.search.text
// exporting actions creator
export const {setSearchText, setInputEmpty} = searchSlice.actions
// exporting reducer to import and use in redux store
export default searchSlice.reducer 