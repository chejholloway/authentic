import { render } from '@testing-library/react';
import React from 'react';
import github from "../../assets/images/github-full-svgrepo-com.svg";
import GithubIcon from "./GithubIcon";

jest.mock("../../assets/images/github-full-svgrepo-com.svg");

describe('<GithubIcon>', () => {
  it('should render component', () => {
    const { container } = render(<GithubIcon />);

    expect(container).toMatchSnapshot();
  });

  it('should render component with props', () => {
    const { container } = render(<GithubIcon className="dummy-class" />);

    expect(container).toMatchSnapshot();
  });
});
