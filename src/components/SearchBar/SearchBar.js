import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Please, enter movie title!');
      return;
    }
    onSubmit(value);
    reset();
  };

  const reset = () => {
    setValue('');
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={s.searchFormInput}
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button className={s.searchFormButton} type="submit">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
