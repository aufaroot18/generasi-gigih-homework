import React from 'react';
import CardItem from '../CardItem';
import styles from './CardList.module.css';

function CardList({ songs }) {
  const cardItems = songs.map((song) => <CardItem song={song} key={song.id} />);

  return <div className={styles.cards}>{cardItems}</div>;
}

export default CardList;
