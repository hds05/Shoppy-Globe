import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../utils/cartSlice';

function ProductItem(props) {

  // dispatch function to send actions to redux store
  const dispatch = useDispatch();
  return (
    <>
      {/* whole product card is clickable and redirects to product detail page */}
      <Link to={`/product/${props.data.id}`}>

        {/* product card container */}
        <div id={props.data.id} className='flex flex-col min-h-[450px] bg-white justify-between hover:scale-105 transition shadow-[0px_0px_2px_black] md:hover:shadow-[0px_4px_8px_gray] p-2 px-4 md:rounded-2xl text-center'>
          {/* product title */}
          <h1 className='md:text-2xl font-semibold'>{props.data.title}</h1>
          {/* product image */}
          <div className='flex justify-center my-4'>
            <img src={props.data.thumbnail} width={'150px'} loading='lazy' alt="product-img" />
          </div>
          {/* product Category */}
          <h1>{props.data.category}</h1>
          {/* product description */}
          <p className='text-sm md:text-md text-gray-500 line-clamp-3'>{props.data.description}</p>

          {/* Button for add to cart */}
          <div className='text-center my-4'>
            <button
              onClick={(e) => {

                // prevent Link from opening when button is clicked
                e.preventDefault();
                // dispatch action to add selected product to cart
                dispatch(addToCart(props.data));
              }}
              className='bg-black text-white w-full rounded-4xl p-0 text-[12px] hover:scale-105 hover:bg-blue-500  transition  md:text-md px-2 md:px-4 py-2 cursor-pointer'
            >
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductItem