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
        <TextField id="standard-basic" label="Keyword" onChange={handleInput} />
      </Box>
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Search
        </Button>
      </Box>
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
