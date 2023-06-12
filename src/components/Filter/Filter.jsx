import { FilterArea, FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = e => dispatch(filterContact(e.target.value));

  return (
    <FilterWrap>
      <span>Find contacts by name</span>
      <FilterArea type="text" value={filter} onChange={onFilter} />
    </FilterWrap>
  );
};
