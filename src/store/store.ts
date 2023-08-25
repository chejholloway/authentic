import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { githubApi } from "../services/github";
import loggerMiddleware from "../middleware/loggerMiddleware";

/**
 * Redux store configuration.
 *
 * This configuration uses the `configureStore` function from `@reduxjs/toolkit` to create
 * a Redux store. It sets up the GitHub API reducer and middleware, as well as a custom logger middleware.
 *
 * @example
 * ```tsx
 * import store from './path-to-store';
 *
 * // Use the Redux store in your app
 * <Provider store={store}>
 *   Your app components
 * </Provider>
 *
 **/

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware, loggerMiddleware), // Add logger middleware
});
/**
 * Sets up listeners for Redux store actions.
 *
 * This function sets up listeners for actions dispatched from the Redux store. It should
 * be called after creating the store to enable the automatic handling of API actions.
 */
setupListeners(store.dispatch);

export default store;
