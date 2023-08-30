import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { githubApi } from "../services/github";
import loggerMiddleware from "../middleware/loggerMiddleware";
import paginationReducer from "../slices/paginationSlice"; // Adjust the path

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    pagination: paginationReducer, // Add the pagination reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware, loggerMiddleware),
});

setupListeners(store.dispatch);

export default store;
