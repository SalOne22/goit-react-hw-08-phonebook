import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterUpdate = evt => dispatch(updateFilter(evt.target.value));

  return <input type="text" name="filter" onChange={handleFilterUpdate} />;
};
