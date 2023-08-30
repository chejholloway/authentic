import React from "react";
import { Title } from "../../styles/TwinStyles.styles";

import ListCard from "../cards/ListCard";
import Repo from "../../types/Repo";
import RepoCard from "../cards/RepoCard";
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
        repos.map((repo: Repo) => (
          <div key={repo.id}>
            <ListCard
              to={repo?.html_url || ""}
              item={repo}
              renderItem={(repo) => (
                <RepoCard developer={developer} repo={repo} />
              )}
            />
          </div>
        ))
      ) : (
        <p>No repositories available.</p>
      )}
    </div>
  );
};

export default ReposList;
