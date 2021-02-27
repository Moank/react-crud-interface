import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const RecordContext = React.createContext();

const RecordProvider = ({
  children,
  record,
  resource,
  id,
}) => {
  const [recordData, setRecordData] = useState();

  useEffect(() => {
    if (!record) {
      fetch(`http://localhost:3000/${resource}/${id}`)
        .then((response) => response.json())
        .then((data) => setRecordData(data));
    } else {
      setRecordData(record);
    }
  }, [record, resource, id]);

  return (
    <RecordContext.Provider value={recordData}>
      {children}
    </RecordContext.Provider>
  );
};

RecordProvider.propTypes = {
  children: PropTypes.node.isRequired,
  record: PropTypes.shape({}),
  resource: PropTypes.string,
  id: PropTypes.string,
};

RecordProvider.defaultProps = {
  record: undefined,
  resource: undefined,
  id: undefined,
};

export default RecordProvider;
