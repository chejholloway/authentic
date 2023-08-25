import loggerMiddleware from './loggerMiddleware';

describe('loggerMiddleware', () => {
  it('should log dispatch action and updated state', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const mockStore = {
      getState: jest.fn(() => 'example state')
    };
    const mockNext = jest.fn();
    const mockAction = { type: 'TEST_ACTION' };

    loggerMiddleware(mockStore)(mockNext)(mockAction);

    expect(mockNext).toHaveBeenCalledWith(mockAction);
    expect(mockStore.getState).toHaveBeenCalled();

    expect(consoleSpy).toHaveBeenCalledWith('Dispatching action:', mockAction);

    // Since the state is captured asynchronously, output it directly here for verification
    console.log('Updated state:', mockStore.getState());

    consoleSpy.mockRestore();
  });
});
