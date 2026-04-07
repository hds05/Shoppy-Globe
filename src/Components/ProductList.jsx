import React, { useState } from 'react'
import { useCustomHook } from '../utils/useCustomHook';
import ProductItem from './ProductItem';
import Loader from './Loader';

function ProductList() {
  const { productData, loading } = useCustomHook();
  console.log([productData, loading, 'data from custom hook']);
  // const [productData, setProductData] = useState(data)
  // can i use useEffect here to use setTimeOut for loader???
  if (loading) return <Loader />
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