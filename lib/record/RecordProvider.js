import React from 'react';

export const RecordContext = React.createContext();

const RecordProvider = ({
  children,
  record,
}) => (
  <RecordContext.Provider value={record}>
    {children}
  </RecordContext.Provider>
);

export default RecordProvider;
