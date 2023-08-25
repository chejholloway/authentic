import React from "react";
import octocat from "../../assets/images/github-octocat-svgrepo-com.svg";
/**
 * Renders the Octocat icon as an image.
 *
 * This component displays the Octocat logo as an image. You can provide an optional
 * CSS class name to style the icon as needed.
 *
 * @component
 * @example
 * ```tsx
 * <OctocatIcon className="text-gray-600" />
 * ```
 * @defaultprops
 * @param {object} props - The component props.
 * @param {string} [props.className] - An optional CSS class name to apply custom styling.
 */
interface OctocatIconProps {
  className?: string;
}

const OctocatIcon: React.FC<OctocatIconProps> = ({ className }) => {
  return (
    <img
      className={`h-10 object-cover ${className}`}
      src={octocat}
      alt="Github Octocat"
    />
  );
};

export default OctocatIcon;
