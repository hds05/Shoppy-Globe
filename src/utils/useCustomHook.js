import axios from 'axios';
import React, { useEffect, useState } from 'react'

// custom hook to fetch products data
export function useCustomHook() {
    // state to store fetched products
    const [data, setData] = useState([]);
    // state to track loading 
    const [loading, setLoading] = useState(true);
    // state to store error msg
    const [error, setError] = useState(null)

    useEffect(() => {
        // async function to fetch data from API
        async function fetchData() {
            try {
                // sending Get request using axios
                let data = await axios.get('https://dummyjson.com/products')

                // saving fetched data in state
                setData(data.data.products)
            } catch (err) {
                // set proper error message if request fails
                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Something went wrong while fetching the data..."
                )
            }
            finally {
                // finally stop the loading either fetching succeds or fails
                setLoading(false)
            }
        }
        // calling fetch function when component mounts
        fetchData()
    }, [])
    // returning data, loading and error states
    return { data, loading, error }
}
