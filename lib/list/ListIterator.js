import React, { useContext } from 'react';

import { ListContext } from './ListProvider';
import RecordProvider from '../record/RecordProvider';

const ListIterator = ({
  children
}) => {
  const listRecords = useContext(ListContext);

  if (!listRecords) return null;

  return listRecords.map((record) => (
    <RecordProvider record={record} key={record.id}>
      {children}
    </RecordProvider>
  ))
};

export default ListIterator;
