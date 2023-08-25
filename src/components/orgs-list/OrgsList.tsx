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

import Org from "../../types/Org";
import Developer from "../../types/Developer";

interface OrgsListProps {
  developer: Developer | undefined;
  org: Org[] | undefined;
}

const OrgsList: React.FC<OrgsListProps> = ({ org }) => {
  return (
    <div className="text-gray-700">
      <h3 className="text-center">
        <Typography className="font-normal">Organizations</Typography>
      </h3>
      {org ? (
        org.map((org) => (
          <div key={org.id}>
            <Link to={"/"}>
              <Card className="w-full">
                <List key={org.id}>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt={org?.login}
                        src={org?.avatar_url}
                      />
                    </ListItemPrefix>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {org.login}
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <p>No organizations available.</p>
      )}
    </div>
  );
};

export default OrgsList;
