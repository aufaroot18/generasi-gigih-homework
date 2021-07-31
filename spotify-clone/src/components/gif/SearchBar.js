import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gif.module.css';

function SearchBar({ handleClick, handleInput }) {
  return (
    <div>
      <input type="text" onChange={handleInput} className={styles.search} />
      <button onClick={handleClick} className={styles.button} type="button">Search</button>
    </div>
  );
}

SearchBar.defaultProps = {
  handleClick: PropTypes.func,
  handleInput: PropTypes.func,
};

SearchBar.propTypes = {
  handleClick: PropTypes.func,
  handleInput: PropTypes.func,
};

export default SearchBar;
