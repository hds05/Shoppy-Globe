import React, { useEffect, useState } from 'react'
import { useCustomHook } from '../utils/useCustomHook';
import ProductItem from './ProductItem';
import Loader from './Loader';
import NotFoundPage from './NotFoundPage';
import Search from './Search';
import { useSelector } from 'react-redux';
import { selectSearchText } from '../utils/searchSlice';
import { selectedCategory } from '../utils/categorySlice';

function ProductList() {

  // custom hook to fetch all data of products
  const { data, loading, error } = useCustomHook();

  // getting selected category from redux store
  const category = useSelector(selectedCategory)

  // getting search text from redux store
  const searchedText = useSelector(selectSearchText)

  // local state to store products data
  const [productData, setProductData] = useState([])

  // whenever fetched data changes, save it in local state
  useEffect(() => {
    if (data) {
      setProductData(data)
    }
  }, [data])

  // show loader till data is fetching
  if (loading) return <Loader />

  // show error if somethi;ng goes wrong
  if (error) return <div className='flex justify-center items-center m-2'>
    <div className='flex flex-col items-center w-fit p-4 shadow-[0px_0px_2px_gray] rounded-4xl'>
      <img src="/404.gif" width={'250px'} alt="" />
      <p>{error}</p>
    </div>
  </div>

  // filter products based on selected category and search text
  const finalData = productData.filter((el) => {

    // if category is selected, match product category
    const matchesCatgry = category ? el.category === category : true

    // match search text with title or category
    const matchesSrch = el.title.toLowerCase().includes(searchedText.toLowerCase()) ||
      el.category.toLowerCase().includes(searchedText.toLowerCase())

    // return only products that satisfy both conditions
    return matchesCatgry && matchesSrch
  })

  return (
    <>
      {/* search component */}
      <Search />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-4 justify-center gap-0 md:gap-6'>
        {
          // loop through filtered products and show each product card
          finalData.map((el) => (
            <ProductItem key={el.id} data={el} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList;