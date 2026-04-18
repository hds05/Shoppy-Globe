import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomHook } from '../utils/useCustomHook';
import Loader from './Loader';

function ProductDetail() {
  const [productDetail, setProductDetail] = useState([])
  const { data, loading, error } = useCustomHook()
  // console.log(data);

  const { id } = useParams()
  console.log(id, "id from detail");
  useEffect(() => {
    if (data) {
      const detailOfProduct = data.find((e) => e.id == id)
      console.log(detailOfProduct, "detail of product form detail page");
      setProductDetail(detailOfProduct)
    }
  }, [data])
  // console.log(productDetail);
  if (loading) return <Loader />
  if (error) return <div className='flex justify-center items-center m-2'>
    <div className='flex flex-col items-center w-fit p-4 shadow-[0px_0px_2px_gray] rounded-4xl'>
      <img src="/404.gif" width={'250px'} alt="" />
      <p>Something went wrong while fetching the data...{error}</p>
    </div>
  </div>

  return (
    <div className="m-6">
      <div className="bg-white rounded-3xl p-6 flex flex-col lg:flex-row gap-8">
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={productDetail?.thumbnail}
            alt={productDetail?.title}
            loading='lazy'
            className="w-[350px] rounded-2xl object-cover"
          />
        </div>
        <div className='w-1/2 flex flex-col gap-3 p-4'>
          <h1 className='text-3xl font-bold text-gray-800'>
            {productDetail?.title}
          </h1>
          <p className='text-gray-600'>
            Brand: <span className='font-medium'>{productDetail?.brand}</span>
          </p>
          <p className='text-gray-600'>
            Category: <span className='capitalize'>{productDetail?.category}</span>
          </p>
          <p className='text-gray-600'>
            Rating: {productDetail?.rating}
          </p>
          <div className='flex items-center gap-4'>
            <p className='text-2xl font-bold'>
              ${productDetail?.price}
            </p>
            <p >
              {productDetail?.discountPercentage}% OFF
            </p>
          </div>
          <p className='text-gray-700'>
            {productDetail?.description}
          </p>
          <p className='text-gray-600'>
            Stock: <span className='font-medium'>{productDetail?.stock}</span>
          </p>
          <p>
            {productDetail?.availabilityStatus}
          </p>

          <div className="bg-gray-200 rounded-2xl p-4 flex flex-col gap-2">
            <p>{productDetail?.shippingInformation}</p>
            <p> {productDetail?.returnPolicy}</p>
            <p> {productDetail?.warrantyInformation}</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ProductDetail