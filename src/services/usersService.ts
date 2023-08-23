import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import User from '../types/User';

export const usersApi = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getUserByLogin: builder.query({
      query: (login) => `users/${login}`
    }),
    getTopDevelopers: builder.query({
      query: () => ({
        url: `users/?q=type:user&sort=followers&order=desc&per_page=20`
      })
    })
  })
});

export const { useGetUserByLoginQuery } = usersApi;
