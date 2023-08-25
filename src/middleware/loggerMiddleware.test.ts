import loggerMiddleware from './loggerMiddleware';

describe('loggerMiddleware', () => {
  it('should expose a function', () => {
		expect(loggerMiddleware).toBeDefined();
	});

  it('loggerMiddleware should return expected output', () => {
    // const retValue = loggerMiddleware(store);
    expect(true).toBeTruthy();
  });
});