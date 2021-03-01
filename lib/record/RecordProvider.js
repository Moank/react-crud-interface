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
  record: (props) => {
    if (!props.record && !props.resource && !props.id) throw new Error('"record" is required if "resource" and "id" are not defined');
  },
  resource: (props, propName) => {
    const value = props[propName];
    if (props.id && !value) throw new Error('"resource" is required when "id" is defined');
    if (value && typeof value !== 'string') throw Error('"ressource" must be a string');
  },
  id: (props, propName) => {
    const value = props[propName];
    if (props.resource && !value) throw new Error('"id" is required when "resource" is defined');
    if (value && typeof value !== 'string') throw Error('"id" must be a string');
  },
};

RecordProvider.defaultProps = {
  record: undefined,
  resource: undefined,
  id: undefined,
};

export default RecordProvider;
