import React from 'react';
import CardItem from './CardItem';
import styles from './Card.module.css';

function CardList({ playlists, uris, setUris }) {
  const cardItems = playlists.map((playlist) => (
    <CardItem
      playlist={playlist}
      key={playlist.id}
      uris={uris}
      setUris={setUris}
    />
  ));

  return (
    <div className={styles.container}>
      <h2>Songs</h2>
      <div className={styles.cards}>{cardItems}</div>
    </div>
  );
}

export default CardList;
