import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import DeveloperDetailPage from '../pages/detail/DeveloperDetailPage';
import App from './App';

jest.mock('react-router-dom');
jest.mock('../pages/home/HomePage');
jest.mock('../pages/detail/DeveloperDetailPage');

describe('<App>', () => {
  it('should render component', () => {
    const { asFragment } = render(
      <Router>
        <App />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
