import { createSlice } from "@reduxjs/toolkit";

// Slice for cart related state and actions
const cartSlice = createSlice({
    // name of this slice
    name: 'cart',

    // initial state of cart
    initialState: {
        items: []
    },

    // all reducer functions related to cart
    reducers: {
        // adds product to cart
        addToCart: (state, action) => {

            // check if product already exists in cart
            const existingItem = state.items.find((e) =>
                e.id === action.payload.id
            )

            // if product already exists, increase only its quantity
            if (existingItem) {
                existingItem.quantity += 1
            }

            // otherwise add new product with minimum quantity 1
            else {
                state.items.unshift({
                    ...action.payload,
                    quantity: 1
                })
            }
        },

        // removes product completely from cart
        removeFromCart: (state, action) => {
            // keep only those items whose id does not match
            state.items = state.items.filter((e) => e.id !== action.payload)
        },

        // increase quantity of a particular product
        increaseQty: (state, action) => {
            const item = state.items.find(
                (e) => e.id === action.payload
            )
            if (item) {
                item.quantity += 1
            }
        },

        // decrease quantity of a particular product
        decreaseQty: (state, action) => {
            const item = state.items.find(
                (e) => e.id === action.payload
            )
            // decrease quantity only if it is greater than 1 so quantity never becomes 0 or negative
            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },

        // remove all products and reset cart items to empty array
        emptyCart: (state, action) => {
            state.items = []
        },
    }
})

// selector function to get all cart items from redux store
export const cartItems = (state)=> state.cart.items
// exporting all action creators
export const { addToCart, removeFromCart, increaseQty, decreaseQty, emptyCart } = cartSlice.actions
// exporting reducer to use in store
export default cartSlice.reducer