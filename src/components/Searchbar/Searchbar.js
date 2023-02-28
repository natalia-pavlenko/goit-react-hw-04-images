import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    onSubmit(form.search.value);
  };

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
  };
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handelSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          name="search"
          value={value}
          onChange={handleChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );

  Searchbar.propTypes = {
    value: PropTypes.string,
  };
};
export default Searchbar;
