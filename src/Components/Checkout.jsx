import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../utils/cartSlice'

function Checkout({ setShowCheckout, totalPrice, totalItems }) {

    const [orderPlaced, setOrderPlaced] = useState(false)
    const dispatch = useDispatch()

    function handlePlaceOrder(e) {
        e.preventDefault()
        setOrderPlaced(true)

        setTimeout(() => {
            dispatch(emptyCart())
            setOrderPlaced(false)
        }, 2000)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-lg rounded-3xl p-6 relative shadow-xl">

                <button
                    onClick={() => setShowCheckout(false)}
                    className="absolute top-4 right-4 text-2xl cursor-pointer"
                >
                    ×
                </button>

                <h1 className="text-2xl font-bold mb-4">Checkout</h1>

                <div className="space-y-3">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <form onSubmit={handlePlaceOrder} className='space-y-3' action="">

                        <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full border p-2 rounded-xl"
                        />

                        <input
                            type="text"
                            required
                            placeholder="Enter your address"
                            className="w-full border p-2 rounded-xl"
                        />

                        <button type='submit' className="w-full bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
            {orderPlaced && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[50]">
                    <div className="bg-white rounded-3xl p-6 shadow-2xl text-center">
                        <h1 className="text-2xl font-bold text-green-600">
                            Order Placed!!
                        </h1>

                        <p className="text-gray-600 mt-2">
                            Your order has been placed successfully.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout