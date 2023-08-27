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
import { Title } from "../../styles/TwinStyles.styles";

import Repo from "../../types/Repo";
import Developer from "../../types/Developer";

interface ReposListProps {
  developer: Developer | undefined;
  repos: Repo[] | undefined;
}

const ReposList: React.FC<ReposListProps> = ({ developer, repos }) => {
  return (
    <div className="text-gray-700">
      <Title className="font-normal text-center">Repositories</Title>
      {repos ? (
        repos.map((repo) => (
          <div key={repo.id}>
            <Link to={repo?.html_url || ""}>
              <Card className="m-2">
                <List>
                  <ListItem className="hover: xl:max-w-full lg:max-w-full md:max-w-[345px] sm:max-w-[75px]">
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt={developer?.login}
                        className="outline"
                        src="/assets/images/git-svgrepo-com.svg"
                      />
                    </ListItemPrefix>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-xs text-gray"
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
