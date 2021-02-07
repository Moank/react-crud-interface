import React, { useState, useEffect, useContext } from 'react';

export const RecordContext = React.createContext();

export const ListContext = React.createContext();

export const ListProvider = ({
  children,
  resource,
}) => {
  const [listRecords, setListRecords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${resource}`)
      .then((response) => response.json())
      .then((data) => setListRecords(data));
  }, [resource])

  return (
    <ListContext.Provider value={listRecords}>
      {children}
    </ListContext.Provider>
  );
};

export const ListIterator = ({
  children
}) => {
  const listRecords = useContext(ListContext);

  if (!listRecords) return null;

  return listRecords.map((record) => (
    <RecordContext.Provider value={record} key={record.id}>
      {children}
    </RecordContext.Provider>
  ))
};