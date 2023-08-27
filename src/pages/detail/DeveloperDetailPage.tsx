import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

import {
  useGetDeveloperDetailsQuery,
  useGetDeveloperReposQuery,
  useGetDeveloperOrgsQuery,
  useGetDeveloperFollowersQuery,
} from "../../services/github";
import Navbar from "../../components/navbar/Navbar";
import ReposList from "../../components/repos-list/ReposList";
import OrgsList from "../../components/orgs-list/OrgsList";
import FollowersList from "../../components/followers-list/FollowersList";
import Follower from "../../types/Follower";

import {
  Column,
  GrayText,
  LayOutGrid,
  Main,
  WhiteContainer,
} from "./DeveloperPage.styles";

const selectRandomFollowers = (followers: Follower[], count: number) => {
  const shuffledFollowers = followers.slice().sort(() => 0.5 - Math.random());
  return shuffledFollowers.slice(0, count);
};

const DeveloperDetailPage: React.FC = () => {
  const { username } = useParams();
  const { data: developer } = useGetDeveloperDetailsQuery(username);
  const { data: repos } = useGetDeveloperReposQuery(username);
  const { data: orgs } = useGetDeveloperOrgsQuery(username);
  const { data: followers } = useGetDeveloperFollowersQuery(username);

  if (!developer || !repos || !orgs || !followers) {
    return <Spinner data-testid="spinner" />;
  }
  const sixFollowers = selectRandomFollowers(followers, 6);

  return (
    <>
      <Navbar />
      <Main>
        <WhiteContainer className="animate-slide-in">
          <LayOutGrid>
            <Column>
              <img
                className={`w-full mx-auto`}
                src={developer.avatar_url}
                alt="Avatar"
              />
              <GrayText>
                <FollowersList followers={sixFollowers} />
              </GrayText>
              <GrayText>
                <OrgsList developer={developer} org={orgs} />
              </GrayText>
            </Column>
            <Column>
              <ReposList developer={developer} repos={repos} />
            </Column>
          </LayOutGrid>
        </WhiteContainer>
      </Main>
    </>
  );
};

export default DeveloperDetailPage;
