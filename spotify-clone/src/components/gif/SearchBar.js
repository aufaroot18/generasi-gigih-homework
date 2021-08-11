/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
// import styles from './Gif.module.css';

function SearchBar({ handleClick, handleInput }) {
  return (
    <div>
      <Box mb={2}>
        <TextField
          id="keyword"
          label="Keyword"
          onChange={handleInput}
          data-testid="input"
        />
      </Box>
      <Box mb={2}>
        <Button
          aria-label="search"
          id="search"
          variant="contained"
          color="primary"
          onClick={handleClick}
          data-testid="search"
        >
          Search
        </Button>
      </Box>
    </div>
  );
}

SearchBar.propTypes = {
  handleClick: PropTypes.func,
  handleInput: PropTypes.func,
};

export default SearchBar;
