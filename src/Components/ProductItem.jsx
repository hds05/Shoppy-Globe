import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../utils/cartSlice';

function ProductItem(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Link to={`/product/${props.data.id}`}>
        <div id={props.data.id} className='flex flex-col min-h-[450px] bg-white justify-between hover:scale-105 transition shadow-[0px_0px_2px_black] md:hover:shadow-[0px_4px_8px_gray] p-2 px-4 md:rounded-2xl text-center'>
          <h1 className='md:text-2xl font-semibold'>{props.data.title}</h1>
          <div className='flex justify-center my-4'>
            <img src={props.data.thumbnail} width={'150px'} loading='lazy' alt="product-img" />
          </div>
          <h1>{props.data.category}</h1>
          <p className='text-sm md:text-md text-gray-500 line-clamp-3'>{props.data.description}</p>
          <div className='text-center my-4'>

            <button
              onClick={(e) => {
                e.preventDefault();
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