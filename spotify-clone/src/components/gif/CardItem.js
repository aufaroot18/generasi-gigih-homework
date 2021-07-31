import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gif.module.css';

function CardItem({ gif }) {
  return (
    <div className={styles.image}>
      <img src={gif.images.original.url} alt="gif" width="100" />
    </div>
  );
}

CardItem.defaultProps = {
  gif: PropTypes.string,
};

CardItem.propTypes = {
  gif: PropTypes.string,
};

export default CardItem;
