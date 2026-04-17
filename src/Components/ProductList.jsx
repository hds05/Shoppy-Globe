import React, { useEffect, useState } from 'react'
import { useCustomHook } from '../utils/useCustomHook';
import ProductItem from './ProductItem';
import Loader from './Loader';
import NotFoundPage from './NotFoundPage';
import Search from './Search';
import { useSelector } from 'react-redux';

function ProductList() {
  const { data, loading, error } = useCustomHook();
  // console.log([productData, loading, error ,'fetched data from Product list']);

  const searchedText = useSelector((state) => state.search.text)

  const [productData, setProductData] = useState([])
  useEffect(() => {
    if (data) {
      setProductData(data)
    }
  }, [data])
  if (loading) return <Loader />
  if (error) return <div className='flex justify-center items-center m-2'>
    <div className='flex flex-col items-center w-fit p-4 shadow-[0px_0px_2px_gray] rounded-4xl'>
      <img src="/404.gif" width={'250px'} alt="" />
      <p>{error}</p>
    </div>
  </div>

  const filteredData = productData.filter((el) => {
    return (
      el.title.toLowerCase().includes(searchedText.toLowerCase()) ||
      el.category.toLowerCase().includes(searchedText.toLowerCase()) 
    )
  })
  return (
    <>
      <Search />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-4 justify-center gap-0 md:gap-6'>
        {
          filteredData.map((el) => (
            <ProductItem key={el.id} data={el} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList;