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
