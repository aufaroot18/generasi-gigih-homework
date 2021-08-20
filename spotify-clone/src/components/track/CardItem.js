/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styles from './Card.module.css';

function CardItem({ playlist, uris, setUris }) {
  const [isSelected, setIsSelected] = useState(false);
  const { uri, album, artists } = playlist;

  const manipulateUris = () => {
    // jika uri udah ada, hapus
    if (uris.includes(uri)) {
      const index = uris.indexOf(uri);
      uris.splice(index, 1);
    } else {
      // // jika uri belum ada, maka tambahkan
      setUris((prevState) => [...prevState, uri]);
    }
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
    manipulateUris();
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img
          className={styles.card__images}
          src={album.images[0].url}
          alt={album.name}
        />
      </div>
      <div className={styles.card__body}>
        <h2 className={styles.card__name}>{artists[0].name}</h2>
        <p className={styles.card__album}>Album - {album.name}</p>
        <button
          className={styles.card__button}
          onClick={handleSelect}
          type="button"
        >
          {isSelected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
}

export default CardItem;
