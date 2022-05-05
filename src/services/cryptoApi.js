import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ce7d4b65ffmsha911ee8e3b3dd4fp13f6c6jsne6b12b1476ce'
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder) => ({
     getCryptos:builder.query({
       query:(count) => createRequest(`/coins?limit=${count}`)
     })
  })
});
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
//     params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': 'ce7d4b65ffmsha911ee8e3b3dd4fp13f6c6jsne6b12b1476ce'
//     }
//   };
  

export const {
  useGetCryptosQuery
} = cryptoApi;