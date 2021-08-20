import React from 'react';
import styles from './CardList.module.css';
import CardItem from '../CardItem';

function CardList({ playlists }) {
  const cardItems = playlists.map((playlist) => (
    <CardItem playlist={playlist} key={playlist.id} />
  ));

  return <div className={styles.cards}>{cardItems}</div>;
}

export default CardList;
