import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import DeveloperDetailPage from '../pages/detail/DeveloperDetailPage';
import App from './App';

jest.mock('react-router-dom');
jest.mock('../pages/home/HomePage');
jest.mock('../pages/detail/DeveloperDetailPage');

describe('<App>', () => {
  it('should render component', () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
