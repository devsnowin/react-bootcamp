import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petApi = createApi({
  reducerPath: 'pathApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pets-v2.dev-apis.com' }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => ({ url: 'pets', params: { id } }),
      transformResponse: (response: { pets: Pet[] }) => response.pets[0],
    }),
    getBreeds: builder.query({
      query: (animal) => ({ url: 'breeds', params: { animal } }),
      transformResponse: (res: { breeds: string[] }) => res.breeds,
    }),
    search: builder.query({
      query: ({ animal, location, breed }) => ({
        url: 'pets',
        params: { animal, location, breed },
      }),
      transformResponse: (res: { pets: Pet[] }) => res.pets,
    }),
  }),
});

export const { useGetPetQuery, useGetBreedsQuery, useSearchQuery } = petApi;
