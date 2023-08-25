import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import GithubIcon from "../../icons/GithubIcon";
import OctocatIcon from "../../icons/OctocatIcon";
import NavbarIconContainer from "./NavbarIconContainer";

jest.mock("react-router-dom");
jest.mock("../../icons/GithubIcon");
jest.mock("../../icons/OctocatIcon");

describe('<NavbarIconContainer>', () => {
  it('should render component', () => {
    const { container } = render(<NavbarIconContainer />);

    expect(container).toMatchSnapshot();
  });
});
