import React from 'react';
import styles from './CardItem.module.css';

function CardItem({ playlist }) {
  return (
    <div className={styles.card} role={`card-${playlist.id}`}>
      <div>
        <img
          className={styles.card__image}
          src={playlist.images[0].url}
          alt="card"
        />
      </div>
      <p className={styles.card__album}>{playlist.album_type.toUpperCase()}</p>
      <h3 className={styles.card__name}>{playlist.name}</h3>
      <a
        className={styles.card__button}
        href={playlist.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
    </div>
  );
}

export default CardItem;
