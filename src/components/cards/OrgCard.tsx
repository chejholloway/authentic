import React from "react";
import { Avatar, Typography, ListItemPrefix } from "@material-tailwind/react";

import Org from "../../types/Org";

interface OrgCardProps {
  org: Org;
}

const OrgCard: React.FC<OrgCardProps> = ({ org }) => {
  return (
    <>
      <ListItemPrefix>
        <Avatar variant="circular" alt={org?.login} src={org?.avatar_url} />
      </ListItemPrefix>
      <Typography variant="small" color="gray" className="font-normal">
        {org.login}
      </Typography>
    </>
  );
};

export default OrgCard;
