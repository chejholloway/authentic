import React from "react";
import Org from "../../types/Org";
import OrgCard from "../cards/OrgCard";
import GenericList from "../generic-list/GenericList";
import Developer from "../../types/Developer";

interface OrgsListProps {
  developer: Developer | undefined;
  org: Org[] | undefined;
}

const OrgsList: React.FC<OrgsListProps> = ({ org }) => {
  const mapToLink = (org: Org) =>
    `${process.env.REACT_APP_GITHUB_URL}${org.login}`;
  const renderItem = (org: Org) => <OrgCard org={org} />;
  const renderCard = (org: Org) => <OrgCard org={org} />;

  return (
    <GenericList
      title="Organizations"
      data={org}
      renderItem={renderItem}
      emptyMessage="No organizations available."
      mapToLink={mapToLink}
      renderCard={renderCard}
    />
  );
};

export default OrgsList;
