import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function useCustomHook() {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                let data = await axios.get('https://dummyjson.com/products')
                console.log(data.data.products)
                setProductData(data.data.products)
            } catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {productData, loading}
}
