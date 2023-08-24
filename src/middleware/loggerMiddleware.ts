/* eslint-disable @typescript-eslint/no-explicit-any */
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Updated state:', store.getState());
  return result;
};

export default loggerMiddleware;
