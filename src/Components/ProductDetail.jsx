import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomHook } from '../utils/useCustomHook';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cartItems } from '../utils/cartSlice';

function ProductDetail() {
  const [productDetail, setProductDetail] = useState([])
  const { data, loading, error } = useCustomHook()

  const dispatch = useDispatch()

  const { id } = useParams()
  console.log(id, "id from detail");


  useEffect(() => {
    if (data) {
      const detailOfProduct = data.find((e) => e.id == Number(id))
      console.log(detailOfProduct, "detail of product form detail page");
      setProductDetail(detailOfProduct)
    }
  }, [data])
  if (loading) return <Loader />
  if (error) return <div className='flex justify-center items-center m-2'>
    <div className='flex flex-col items-center w-fit p-4 shadow-[0px_0px_2px_gray] rounded-4xl'>
      <img src="/404.gif" width={'250px'} alt="" />
      <p>Something went wrong while fetching the data...{error}</p>
    </div>
  </div>

  const ValidId = data.map((e) => e.id)
  console.log(ValidId, 'valid ID');

  if (id && !ValidId.includes(Number(id))) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white p-6 rounded-3xl shadow-[0px_0px_5px_gray] text-center">
          <h1 className="text-xl font-semibold">
            There is no product with this ID 😬
          </h1>
        </div>
      </div>
    )
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div className="m-6">
      <div className="bg-white p-6 rounded-4xl flex flex-col lg:flex-row gap-8">

        <div className="lg:w-1/2 flex flex-col items-center ">
          <img
            src={productDetail?.thumbnail}
            alt={productDetail?.title}
            className="w-[350px] rounded-2xl object-cover"
          />

          <div className="flex mt-4 gap-2 flex-wrap justify-center">
            {productDetail?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-20 h-20 object-cover rounded-xl border"
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4 items-center md:items-start lg:border-l-1 lg:border-gray-400 lg:p-6 overflow-auto ">
          <h1 className="text-lg md:text-3xl font-bold text-gray-800">
            {productDetail?.title}
          </h1>
          <p className="text-gray-500">
            Brand: <span className="font-medium">{productDetail?.brand}</span>
          </p>

          <p className="text-gray-500">
            Category: <span className="capitalize">{productDetail?.category}</span>
          </p>
          <div className="flex items-center gap-2">
            <span>⭐</span>
            <span>{productDetail?.rating} / 5</span>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="md:text-3xl font-bold text-green-600">
              ${productDetail?.price}
            </h2>

            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs md:text-sm">
              {productDetail?.discountPercentage}% OFF
            </span>
          </div>
          <p
            className={`font-semibold ${productDetail?.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
          >
            {productDetail?.availabilityStatus}
          </p>
          <div>
            <h3 className="font-bold text-lg mb-1">Description</h3>
            <p className="text-gray-600">{productDetail?.description}</p>
          </div>
          <div className="bg-gray-200 rounded-2xl p-4 flex flex-col gap-2">
            <p>🚚 {productDetail?.shippingInformation}</p>
            <p>↩️ {productDetail?.returnPolicy}</p>
            <p>🛡️ {productDetail?.warrantyInformation}</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={() => dispatch(addToCart(productDetail))} className="bg-black hover:bg-gray-700 cursor-pointer text-white px-6 py-3 rounded-2xl font-bold">
              Add to Cart
            </button>

            <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold">
              Buy Now
            </button>
          </div>
          <div className="mt-8 bg-white rounded-3xl shadow-[0px_0px_12px_gray_inset] p-6 w-full">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

            {productDetail?.reviews?.map((e, index) => (
              <div key={index} className="border-b py-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{e.reviewerName}</h3>
                  <span>⭐ {e.rating}</span>
                </div>

                <p className="text-gray-600 mt-1">{e.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetail