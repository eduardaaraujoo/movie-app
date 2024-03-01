import axios from 'axios';
import { apiKey } from '../constants';
import React from 'react';

//endpoints 
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoints =  `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upComingMoviesEndpoint =  `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint =  `${apiBaseUrl}/movie/top_rated?api_keys=${apiKey}`;

const apiCall = async (endpoint: any, params: any) => {
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

    export const fetchTrendingMovies = () => {
        return apiCall(trendingMoviesEndpoint);
    }

}
