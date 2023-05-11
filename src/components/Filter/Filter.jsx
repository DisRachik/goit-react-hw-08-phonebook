import PropTypes from 'prop-types';
import { FilterArea, FilterWrap } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterWrap>
    <span>Find contacts by name</span>
    <FilterArea type="text" value={value} onChange={onChange} />
  </FilterWrap>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
