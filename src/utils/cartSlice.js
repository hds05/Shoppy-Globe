import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((e) =>
                e.id === action.payload.id
            )
            if (existingItem) {
                existingItem.quantity += 1
            }
            else {
                state.items.unshift({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((e) => e.id !== action.payload)
        },

        increaseQty: (state, action) => {
            const item = state.items.find(
                (e) => e.id === action.payload
            )
            if (item) {
                item.quantity += 1
            }
        },
        decreaseQty: (state, action) => {
            const item = state.items.find(
                (e) => e.id === action.payload
            )
            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },
        emptyCart: (state, action) => {
            state.items = []
        },
    }
})

export const cartItems = (state)=> state.cart.items
export const { addToCart, removeFromCart, increaseQty, decreaseQty, emptyCart } = cartSlice.actions
export default cartSlice.reducer