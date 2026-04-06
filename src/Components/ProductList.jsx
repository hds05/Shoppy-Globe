import React, { useState } from 'react'
import { useCustomHook } from '../utils/useCustomHook';
import ProductItem from './ProductItem';

function ProductList() {
  const { productData, loading } = useCustomHook();
  console.log([productData, loading, 'data from custom hook']);
  // const [productData, setProductData] = useState(data)
  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <div className='grid grid-cols-4 p-4 justify-center gap-6'>
        {
          productData.map((el) => (
            <ProductItem key={el.id} data={el} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList;