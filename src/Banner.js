import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from "./Requests";

const Banner = () => {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }

        fetchData()
    }, []);

    console.log(movie);


    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        }}>
            <div className="banner__content">
                <h1 className="banner__title">
                {
                    movie?.title || movie?.name || movie?.original_name
                }
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button" >Play</button>
                    <button className="banner__button" >My List</button>
                </div>
                <h1 className="banner__description">
                    {movie.overview}
                </h1>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
