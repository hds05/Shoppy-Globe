import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice'

// Redux store
export const store = configureStore({
    // combining all reducers inside store
    reducer: {
        search: searchReducer,
        cart: cartReducer,
        category: categoryReducer,
    }
})