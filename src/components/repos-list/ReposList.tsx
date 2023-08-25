import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import Repo from "../../types/Repo";
import Developer from "../../types/Developer";

/**
 * Renders a list of repositories associated with a developer.
 *
 * This component takes an array of `Repo` objects and a `Developer` object
 * and displays a list of repositories with their names and the developer's avatar.
 * It's typically used to show the repositories owned by a developer.
 *
 * @component
 * @example
 * ```tsx
 * const developer: Developer = {
 *   id: 1,
 *   login: "exampleDev",
 *   avatar_url: "https://example.com/dev-avatar.jpg"
 *   // ...other properties
 * };
 *
 * const repos: Repo[] = [
 *   {
 *     id: 1,
 *     name: "example-repo",
 *     // ...other properties
 *   },
 *   // ...more repositories
 * ];
 *
 * <ReposList developer={developer} repos={repos} />
 * ```
 *
 * @param {object} props - The component props.
 * @param {Developer} props.developer - The `Developer` object associated with the repositories.
 * @param {Repo[]} props.repos - An array of `Repo` objects representing repositories.
 */

interface ReposListProps {
  developer: Developer | undefined;
  repos: Repo[] | undefined;
}

const ReposList: React.FC<ReposListProps> = ({ developer, repos }) => {
  return (
    <div className="text-gray-700">
      <h3 className="text-center">
        <Typography className="font-normal">Repositories</Typography>
      </h3>
      {repos ? (
        repos.map((repo) => (
          <div key={repo.id}>
            <Link to={"/"}>
              <Card className="w-full">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt={developer?.login}
                        src={developer?.avatar_url}
                      />
                    </ListItemPrefix>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {repo.name}
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <p>No repositories available.</p>
      )}
    </div>
  );
};

export default ReposList;
