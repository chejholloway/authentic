/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Middleware for logging actions and updated state in the Redux store.
 *
 * This middleware logs information about dispatched actions and the updated state
 * after the action has been processed by the reducers. It's commonly used for debugging
 * and monitoring the flow of actions and state changes in a Redux application.
 *
 * @param {object} store - The Redux store.
 * @returns {function} - A middleware function that takes the `next` function and returns
 *                      a function that takes an `action` and logs information.
 *
 * @example
 * ```tsx
 * import { applyMiddleware, createStore } from 'redux';
 * import loggerMiddleware from './path-to-loggerMiddleware';
 * import rootReducer from './reducers';
 *
 * const store = createStore(
 *   rootReducer,
 *   applyMiddleware(loggerMiddleware)
 * );
 * ```
 */
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Updated state:', store.getState());
  return result;
};

export default loggerMiddleware;
