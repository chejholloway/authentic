import React from "react";
import { useParams } from "react-router-dom";

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

const selectRandomFollowers = (followers: Follower[], count: number) => {
  const shuffledFollowers = followers.slice().sort(() => 0.5 - Math.random());
  return shuffledFollowers.slice(0, count);
};
/**
 * Page component displaying detailed information about a developer.
 *
 * This component fetches and displays detailed information about a developer, including
 * their repositories, organizations, and followers. It uses various queries from the GitHub
 * service to fetch data. The UI is organized with repositories on the left and organizations
 * and selected random followers on the right.
 *
 * @component
 * @example
 * ```tsx
 * <DeveloperDetailPage />
 * ```
 */
const DeveloperDetailPage: React.FC = () => {
  const { username } = useParams();
  const { data: developer } = useGetDeveloperDetailsQuery(username);
  const { data: repos } = useGetDeveloperReposQuery(username);
  const { data: orgs } = useGetDeveloperOrgsQuery(username);
  const { data: followers } = useGetDeveloperFollowersQuery(username);

  if (!developer || !repos || !orgs || !followers) {
    return <div>Loading...</div>;
  }
  const fiveFollowers = selectRandomFollowers(followers, 5);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen py-8">
        <div className="bg-white mt-24 p-8 shadow-lg transform translate-y-20 animate-slide-in">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              {/* <!-- Left column content here --> */}
              <ReposList developer={developer} repos={repos}/>
            </div>
            <div className="col-span-1">
              {/* <!-- Right column content here -->*/}{" "}
              <div className="text-gray-700">
                <FollowersList followers={fiveFollowers} />
                <OrgsList developer={developer} orgs={orgs}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperDetailPage;
