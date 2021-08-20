import React from 'react';
import styles from './CardItem.module.css';

function CardItem({ song }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img
          className={styles.card__images}
          src={song.album.images[0].url}
          alt=""
        />
      </div>
      <div className={styles.card__body}>
        <h3 className={styles.card__name}>
          {song.artists[0].name} - {song.name}
        </h3>
        <h4 className={styles.card__album}>{song.album.album_type}</h4>
        <a
          className={styles.card__link}
          href={song.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
      </div>
    </div>
  );
}

export default CardItem;
