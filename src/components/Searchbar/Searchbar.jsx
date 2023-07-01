import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchForm, HeaderSearch } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleNameChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      toast.error('Enter a value');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <HeaderSearch className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <BsSearch />
          </button>

          <input
            className="input"
            value={value}
            onChange={this.handleNameChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearch>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
