import React, { useState } from 'react'
import { useCustomHook } from '../utils/useCustomHook';

function ProductList() {
  const data = useCustomHook();
  console.log(data);
  // const [productData, setProductData] = useState(data)
  
  return (
    <>
      <div>ProductList</div>
      {
        data.map((el)=>{
          return (
            <div key={el.id}>
              Product List
                <h1>{el.brand}</h1>
                <h1>{el.category}</h1>
                <img src={el.thumbnail} alt="" />
                <p>{el.description}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default ProductList;