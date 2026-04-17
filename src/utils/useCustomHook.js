import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function useCustomHook() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    console.log(data, loading, error, 'from custom hook');
    
    useEffect(() => {
        async function fetchData() {
            try {
                let data = await axios.get('https://dummyjson.com/products')
                console.log(data.data.products)
                setData(data.data.products)
            } catch (err) {
                setError(err)
                console.error(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {data, loading, error}
}
