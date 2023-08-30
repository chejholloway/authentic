import React from "react";
import Repo from "../../types/Repo";
import RepoCard from "../cards/RepoCard";
import GenericList from "../generic-list/GenericList";
import Developer from "../../types/Developer";

interface ReposListProps {
  developer: Developer | undefined;
  repos: Repo[] | undefined;
}

const ReposList: React.FC<ReposListProps> = ({ developer, repos }) => {
  const mapToLink = (repo: Repo) => repo?.html_url || "";
  const renderItem = (repo: Repo) => (
    <RepoCard developer={developer} repo={repo} />
  );
  const renderCard = (repo: Repo) => (
    <RepoCard developer={developer} repo={repo} />
  );

  return (
    <GenericList
      title="Repositories"
      data={repos}
      renderItem={renderItem}
      emptyMessage="No repositories available."
      mapToLink={mapToLink}
      renderCard={renderCard}
    />
  );
};

export default ReposList;
