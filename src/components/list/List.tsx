import React from 'react';
import { Link } from 'react-router-dom';
import {
  List as MaterialList,
  ListItem,
  ListItemPrefix,
  Card,
  Typography,
} from '@material-tailwind/react';
import { v4 as uuidv4 } from 'uuid';

interface ListProps<T, D> {
  data: T[] | undefined;
  renderItem: (item: T, developer: D | undefined) => JSX.Element;
  developer: D | undefined;
  title: string;
}

function List<T, D>({ data, renderItem, developer, title }: ListProps<T, D>) {
  return (
    <div className='text-gray-700'>
      <h3 className='text-center'>
        <Typography className='font-normal'>{title}</Typography>
      </h3>
      {data ? (
        data.map((item) => (
          <div key={uuidv4()}>
            <Link to={'/'}>
              <Card className='w-full'>
                <MaterialList>
                  <ListItem>
                    <ListItemPrefix>
                      {renderItem(item, developer)}
                    </ListItemPrefix>
                  </ListItem>
                </MaterialList>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <p>No {title.toLowerCase()} available.</p>
      )}
    </div>
  );
}

export default List;
