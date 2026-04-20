import { createSlice } from "@reduxjs/toolkit"

// Slice for category related state and actions
const categorySlice = createSlice({
    // name of the slice
    name: 'category',
    // initial state of the category
    initialState: {
        value: ''
    },
    // reducer function related to category
    reducers: {
        setCategory: (state, action) => {
            state.value = action.payload
        }
    }
})

// export selector function to get category from redux store
export const selectedCategory = (state) => state.category.value
// export action creator
export const {setCategory} = categorySlice.actions
// export reducer to use in redux store
export default categorySlice.reducer