/*eslint no-unused-vars: "off"*/
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, List, ListItem } from "@material-tailwind/react";

interface ListCardProps<T, U extends ReactNode> {
  to: string;
  item: T;
  renderItem: (item: T) => ReactNode;
  cardItem: (item: T) => U;
}

function ListCard<T, U extends ReactNode>({
  to,
  item,
  // eslint-disable-next-line no-unused-vars
  renderItem,
  cardItem,
}: ListCardProps<T, U>) {
  return (
    <RouterLink to={to}>
      <Card className="m-2">
        <List>
          <ListItem>{cardItem(item)}</ListItem>
        </List>
      </Card>
    </RouterLink>
  );
}

export default ListCard;
