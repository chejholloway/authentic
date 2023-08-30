import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, List, ListItem } from "@material-tailwind/react";

interface LinkCardProps<T> {
  to: string;
  item: T;
  // eslint-disable-next-line no-unused-vars
  renderItem: (item: T) => React.ReactNode;
}

function LinkCard<T>({ to, item, renderItem }: LinkCardProps<T>) {
  return (
    <RouterLink to={to}>
      <Card className="m-2">
        <List>
          <ListItem>{renderItem(item)}</ListItem>
        </List>
      </Card>
    </RouterLink>
  );
}

export default LinkCard;
