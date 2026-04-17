import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {
  console.log(props, ' This is props room product item');

  return (
    <>
      <Link to={`/product/${props.data.id}`}>
        <div id={props.data.id} className='flex flex-col h-[450px] justify-between shadow-[0px_0px_3px_black] p-2 px-4 md:rounded-2xl'>
          <h1 className='text-2xl font-semibold'>{props.data.title}</h1>
          <div className='flex justify-center my-4'>
            <img src={props.data.thumbnail} width={'150px'} alt="" />
          </div>
          <h1>{props.data.category}</h1>
          <p className='text-sm md:text-md text-gray-500'>{props.data.description}</p>
          <div className='text-center my-4'>

            <button className='bg-black text-white rounded-4xl p-0 text-[12px] md:text-md px-2 md:px-4 py-2'>Add to cart</button>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductItem