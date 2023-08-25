import { render } from '@testing-library/react';
import React from 'react';
import octocat from "../../assets/images/github-octocat-svgrepo-com.svg";
import OctocatIcon from "./OctocatIcon";

jest.mock("../../assets/images/github-octocat-svgrepo-com.svg");

describe('<OctocatIcon>', () => {
  it('should render component', () => {
    const { container } = render(<OctocatIcon />);

    expect(container).toMatchSnapshot();
  });

  it('should render component with props', () => {
    const { container } = render(<OctocatIcon className="dummy-class" />);

    expect(container).toMatchSnapshot();
  });
});
