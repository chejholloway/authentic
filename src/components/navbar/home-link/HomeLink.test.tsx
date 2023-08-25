import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";

jest.mock("react-router-dom");

describe('<HomeLink>', () => {
  it('should render component', () => {
    const { container } = render(<HomeLink />);

    expect(container).toMatchSnapshot();
  });
});
