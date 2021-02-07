import { useContext } from 'react';
import { RecordContext } from '../record/RecordProvider';

const useRecord = () => {
  const recordData = useContext(RecordContext);

  return recordData;
}

export default useRecord;
