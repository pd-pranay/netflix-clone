import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from './axios'
export default function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original/'
    useEffect(() => {
        async function fetchData() {
            const response = axios.get(fetchUrl);
            setMovies((await response).data.results);
            return response;
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>
            <div className='row-posters'>

                {
                    movies.map(
                        (movie) =>
                            ((isLargeRow && movie.poster_path) ||
                                (!isLargeRow && movie.backdrop_path)) && (
                                <img
                                    key={movie.id}
                                    className={`row-poster ${isLargeRow && "row-poster-large"}`}
                                    src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                        }`}
                                    alt={movie.name}
                                />
                            )

                    )}
            </div>
        </div>
    )
}
