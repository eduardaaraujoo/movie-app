import axios from 'axios';
import { apiKey } from '../constants';
import React from 'react';

//endpoints 
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint =  `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upComingMoviesEndpoint =  `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint =  `${apiBaseUrl}/movie/top_rated?api_keys=${apiKey}`;

//dynamic endpoints =
const movieDetailsEndpoint = (id: string) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: string) => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const movieSimilarEndpoint = (id: string) => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;



export const image500 = (path: string) =>  `https://image.tmdb.org/t/p/w500${path}`
export const image342 = (path: string) =>  `https://image.tmdb.org/t/p/w342${path}`
export const image185 = (path: string) =>  `https://image.tmdb.org/t/p/w185${path}`


export const fallbackMoviePoster = 'https://www.movienewz.com/img/films/poster-holder.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HrKlpj9CgB10PH4EfObR0TOR_pT99Y8szryJU0zqiDrh_1xlVEzm0l07TmFwEs4STPA&usqp=CAU';


const apiCall = async (endpoint?: any, params?: any) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }

    try{

        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ', error);
            return{}
    }
}

export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpComingMovies = () => {
    return apiCall(upComingMoviesEndpoint);
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}
export const fetchMovieDetails = (id: string)=>{
    return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits = (id: string)=>{
    return apiCall(movieCreditsEndpoint(id));
}
export const fetchSimilarMovies = (id: string)=>{
    return apiCall(movieSimilarEndpoint(id));
}