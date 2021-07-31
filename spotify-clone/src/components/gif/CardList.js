import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import styles from './Gif.module.css';

function CardList({ data }) {
  const cardItems = data.map((gif) => <CardItem gif={gif} key={gif.id} />);

  return (
    <div className={styles.images}>
      {cardItems}
    </div>
  );
}

CardList.defaultProps = {
  data: PropTypes.instanceOf(Array),
};

CardList.propTypes = {
  data: PropTypes.instanceOf(Array),
};

export default CardList;
