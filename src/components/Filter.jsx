import { useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
import { updateFilter } from '../redux/filterSlice';

export const Filter = props => {
  const dispatch = useDispatch();
  const handleFilterUpdate = evt => dispatch(updateFilter(evt.target.value));

  return (
    <Input
      {...props}
      maxW={64}
      type="text"
      name="filter"
      onChange={handleFilterUpdate}
    />
  );
};
