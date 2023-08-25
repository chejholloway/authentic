import React from "react";
import github from "../../assets/images/github-full-svgrepo-com.svg";
/**
 * Renders the GitHub icon as an image.
 *
 * This component displays the GitHub logo as an image. You can provide an optional
 * CSS class name to style the icon as needed.
 *
 * @component
 * @example
 * ```tsx
 * <GithubIcon className="text-gray-600" />
 * ```
 * @defaultprops
 * @param {object} props - The component props.
 * @param {string} [props.className] - An optional CSS class name to apply custom styling.
 */
interface GithubIconProps {
  className?: string;
}


const GithubIcon: React.FC<GithubIconProps> = ({ className }) => {
  return (
    <img
      className={`h-10 object-cover ${className}`}
      src={github}
      alt="Github Text Logo"
    />
  );
};

export default GithubIcon;
