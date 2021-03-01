import { useContext } from 'react';
import { ListContext } from '../list/ListProvider';

const useList = () => {
  const listData = useContext(ListContext);

  return listData;
};

export default useList;
