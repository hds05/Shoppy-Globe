import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function useCustomHook(URL) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    console.log(data, loading, error, 'from custom hook');
    
    useEffect(() => {
        async function fetchData() {
            try {
                let data = await axios.get(URL)
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
    }, [URL])
    return {data, loading, error}
}
