import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from './axios'
export default function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = axios.get(fetchUrl);
            setMovies((await response).data.results);
            return response;
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies)
    return (
        <div className='row'>
            <h1>
                {title}
            </h1>
        </div>
    )
}
