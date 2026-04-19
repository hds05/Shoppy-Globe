import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartItems, emptyCart } from '../utils/cartSlice'
import { useNavigate } from 'react-router-dom'

function Checkout({ setShowCheckout, totalPrice, totalItems }) {

    const [orderPlaced, setOrderPlaced] = useState(false)
    const dispatch = useDispatch()
    const selectItems = useSelector(cartItems)
    console.log(selectItems, 'selected items from checkoyt');
    const navigate = useNavigate()

    function handlePlaceOrder(e) {
        e.preventDefault()
        setOrderPlaced(true)

        setTimeout(() => {
            dispatch(emptyCart())
            setOrderPlaced(false)
            navigate('/')
        }, 2000)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-lg rounded-3xl p-2 m-2 md:p-6 relative shadow-xl">

                <button
                    onClick={() => setShowCheckout(false)}
                    className="absolute top-4 right-4 text-2xl cursor-pointer bg-red-600 hover:bg-red-800 rounded-4xl text-white p-2"
                >
                    ×
                </button>

                <h1 className="text-2xl text-center font-bold mb-4">Checkout</h1>

                <div className="flex flex-col gap-2">
                    <p className='border-b border-gray-400'>Total Items: {totalItems}</p>
                    <div className=' overflow-auto h-[100px] md:h-[200px] border p-1 rounded-2xl'>
                        {
                            selectItems.map((e) => {
                                return (
                                    <div className='text-sm flex justify-between'>
                                        <p>{e.title}</p>
                                        <p>{e.price} per item</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className='text-right'>Total Price: ${totalPrice}</p>
                    <form onSubmit={handlePlaceOrder} className='space-y-3' action="">

                        <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                        />

                        <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            maxLength={10}
                            placeholder="Enter your Number"
                            className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                        <input
                            type="text"
                            required
                            placeholder="Enter your address"
                            className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        <img src="/tick.gif" alt="" />
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