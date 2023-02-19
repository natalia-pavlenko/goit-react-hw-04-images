import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handelSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;

    onSubmit(value);
    this.setState({ value: '' });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="search"
            value={value}
            onChange={this.handleChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string,
};
