import React, { useEffect, useState } from 'react'

function ProductItem(props) { 
  return (
    <>
      <div id={props.data.id} className='flex flex-col justify-between shadow-[0px_0px_3px_black] p-2 px-4 rounded-2xl'>
        <h1 className='text-2xl font-semibold'>{props.data.title}</h1>
        <img src={props.data.thumbnail} width={'150px'} alt="" />
        <h1>{props.data.category}</h1>
        <p>{props.data.description}</p>
      </div>
    </>
  )
}

export default ProductItem