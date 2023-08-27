/* eslint-enable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GITHUB_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTopDevelopers: builder.query({
      query: (limit = 20) =>
        process.env.REACT_APP_GITHUB_USERS_QUERY + `${limit}}`,
    }),
    getDeveloperDetails: builder.query({
      query: (username) => `/users/${username}`,
    }),
    getDeveloperRepos: builder.query({
      query: (username) => `/users/${username}/repos`,
    }),
    getDeveloperOrgs: builder.query({
      query: (username) => `/users/${username}/orgs`,
    }),
    getDeveloperFollowers: builder.query({
      query: (username) => `/users/${username}/followers`,
    }),
  }),
});

export const {
  useGetDeveloperDetailsQuery,
  useGetDeveloperFollowersQuery,
  useGetDeveloperOrgsQuery,
  useGetDeveloperReposQuery,
  useGetTopDevelopersQuery,
} = githubApi;
