import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { githubApi } from "../services/github";
import loggerMiddleware from "../middleware/loggerMiddleware";

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware, loggerMiddleware), // Add logger middleware
});

setupListeners(store.dispatch);

export default store;
