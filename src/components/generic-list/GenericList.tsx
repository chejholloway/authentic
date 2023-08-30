/* eslint no-unused-vars: "off" */
import React, { ReactNode } from "react";
import { GrayText, Title } from "../../styles/TwinStyles.styles";
import ListCard from "../cards/ListCard";

interface ListItemProps {
  id: number;
}

interface ListProps<T extends ListItemProps, U extends ReactNode> {
  title: string;
  data: T[] | undefined;
  renderItem: (item: T) => React.ReactNode;
  emptyMessage: string;
  mapToLink: (item: T) => string;
  renderCard: (item: T) => U;
}

function GenericList<T extends ListItemProps, U extends ReactNode>({
  title,
  data,
  renderItem,
  emptyMessage,
  mapToLink,
  renderCard,
}: ListProps<T, U>) {
  return (
    <GrayText>
      <Title className="font-normal">{title}</Title>
      <div className="flex flex-wrap space-x-4">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="m-4">
              <ListCard
                to={mapToLink(item)}
                item={item}
                renderItem={renderItem}
                cardItem={renderCard}
              />
            </div>
          ))
        ) : (
          <p>{emptyMessage}</p>
        )}
      </div>
    </GrayText>
  );
}

export default GenericList;
