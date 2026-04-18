import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice'

export const store = configureStore({
    reducer:{
        search: searchReducer,
        cart: cartReducer,
        category: categoryReducer,
    }
})