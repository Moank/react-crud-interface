import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
  }, [resource]);

  return (
    <ListContext.Provider value={listRecords}>
      {children}
    </ListContext.Provider>
  );
};

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
  resource: PropTypes.string.isRequired,
};

export default ListProvider;
