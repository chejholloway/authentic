# Generic List Component

## Here's how you can structure it:

```tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import Repo from "../../types/Repo";
import Org from "../../types/Org";
import Follower from "../../types/Follower";
import Developer from "../../types/Developer";

import { Title, GrayText } from "../../styles/TwinStyles.styles";

interface ListProps<T> {
  title: string;
  data: T[] | undefined;
  renderItem: (item: T) => React.ReactNode;
  emptyMessage: string;
}

function ListComponent<T>({
  title,
  data,
  renderItem,
  emptyMessage,
}: ListProps<T>) {
  return (
    <GrayText>
      <Title className="font-normal">{title}</Title>
      <div className="flex flex-wrap space-x-4">
        {data ? (
          data.map((item) => (
            <div key={getItemKey(item)} className="m-4">
              {renderItem(item)}
            </div>
          ))
        ) : (
          <p>{emptyMessage}</p>
        )}
      </div>
    </GrayText>
  );
}

function getItemKey(item: Repo | Org | Follower) {
  return item.id;
}

const ListComponentWrapper = ListComponent as React.FC<ListProps<any>>;

export { ListComponentWrapper as ListComponent };
export { getItemKey };
```

You can then use this generic `ListComponent` in your code like this:

For Repositories:

tsx

```tsx
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";

import Repo from "../../types/Repo";
import Developer from "../../types/Developer";

import { ListComponent, getItemKey } from "./List";
import { Title } from "../../styles/TwinStyles.styles";

interface ReposListProps {
  developer: Developer | undefined;
  repos: Repo[] | undefined;
}

const ReposList: React.FC<ReposListProps> = ({ developer, repos }) => {
  const renderItem = (repo: Repo) => (
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
            <Typography variant="small" color="gray" className="font-normal text-xs text-gray">
              {repo.name}
            </Typography>
          </ListItem>
        </List>
      </Card>
    </Link>
  );

  return (
    <ListComponent
      title="Repositories"
      data={repos}
      renderItem={renderItem}
      emptyMessage="No repositories available."
    />
  );
};

export default ReposList;
```

For Organizations:

tsx

```tsx
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";

import Org from "../../types/Org";
import Developer from "../../types/Developer";

import { ListComponent, getItemKey } from "./List";
import { Title } from "../../styles/TwinStyles.styles";

interface OrgsListProps {
  developer: Developer | undefined;
  org: Org[] | undefined;
}

const OrgsList: React.FC<OrgsListProps> = ({ org }) => {
  const renderItem = (org: Org) => (
    <Link to={`${process.env.REACT_APP_GITHUB_URL}/${org.login}`}>
      <Card className="m-2">
        <List>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt={org?.login} src={org?.avatar_url} />
            </ListItemPrefix>
            <Typography variant="small" color="gray" className="font-normal">
              {org.login}
            </Typography>
          </ListItem>
        </List>
      </Card>
    </Link>
  );

  return (
    <ListComponent
      title="Organizations"
      data={org}
      renderItem={renderItem}
      emptyMessage="No organizations available."
    />
  );
};

export default OrgsList;
```

For Followers:

tsx

```tsx
import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

import Follower from "../../types/Follower";

import { ListComponent, getItemKey } from "./List";
import { GrayText, Title } from "../../styles/TwinStyles.styles";

interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  const renderItem = (follower: Follower) => (
    <Link to={follower?.html_url}>
      <Avatar
        variant="circular"
        title={`${follower?.login}'s Avatar`}
        alt={follower?.login}
        src={follower?.avatar_url}
      />
    </Link>
  );

  return (
    <ListComponent
      title="Followers"
      data={followers}
      renderItem={renderItem}
      emptyMessage="No followers available."
    />
  );
};

export default FollowersList;
```

This structure creates a reusable and generic `ListComponent` that can be used for different types of lists, reducing code duplication.