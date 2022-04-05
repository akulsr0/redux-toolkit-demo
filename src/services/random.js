import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomAPI = createApi({
  reducerPath: "randomAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/" }),
  endpoints: function (builder) {
    return {
      getRandomBeer: builder.query({
        query: () => `beer/random_beer`
      }),
      getRandomFood: builder.query({
        query: () => `food/random_food`
      })
    };
  }
});

export const { useGetRandomBeerQuery, useGetRandomFoodQuery } = randomAPI;
