import React from 'react';
import styles from './FavoriteSong.module.css';

function FavoriteSong() {
  return (
    <div className={styles.favorite}>
      <h2 className={styles.favorite__title}>Favorite Song</h2>
      <p className={styles.favorite__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      <p>
        Coming Soon ...
      </p>
    </div>
  );
}

export default FavoriteSong;
