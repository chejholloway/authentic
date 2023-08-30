import React from "react";

import Org from "../../types/Org";
import OrgCard from "../cards/OrgCard";
import ListCard from "../cards/ListCard";

import Developer from "../../types/Developer";

import { Title } from "../../styles/TwinStyles.styles";

interface OrgsListProps {
  developer: Developer | undefined;
  org: Org[] | undefined;
}

const OrgsList: React.FC<OrgsListProps> = ({ org }) => {
  return (
    <div className="text-gray-700">
      <Title className="font-normal text-center">Organizations</Title>
      {org ? (
        org.map((org: Org) => (
          <div key={org.id}>
            <ListCard
              to={`${process.env.REACT_APP_GITHUB_URL}${org.login}`}
              item={org}
              renderItem={(org) => <OrgCard org={org} />}
            />
          </div>
        ))
      ) : (
        <p>No organizations available.</p>
      )}
    </div>
  );
};

export default OrgsList;
