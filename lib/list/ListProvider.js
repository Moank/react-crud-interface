import React, { useState, useEffect } from 'react';

export const ListContext = React.createContext();

const ListProvider = ({
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

export default ListProvider;
