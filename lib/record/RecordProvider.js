import React from 'react';
import PropTypes from 'prop-types';

export const RecordContext = React.createContext();

const RecordProvider = ({
  children,
  record,
}) => (
  <RecordContext.Provider value={record}>
    {children}
  </RecordContext.Provider>
);

RecordProvider.propTypes = {
  children: PropTypes.node.isRequired,
  record: PropTypes.shape({}).isRequired,
};

export default RecordProvider;
