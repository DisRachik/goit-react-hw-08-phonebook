import { useContacts } from 'redux/contacts/useContacts';

import { FilterArea, FilterWrap } from './Filter.styled';

export const Filter = () => {
  const { filter, filterContacts } = useContacts();

  const handleFilter = e => filterContacts(e.target.value);

  return (
    <FilterWrap>
      <span>Find contacts by name</span>
      <FilterArea type="text" value={filter} onChange={handleFilter} />
    </FilterWrap>
  );
};
