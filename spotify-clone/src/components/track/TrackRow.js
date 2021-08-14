import React, { useState } from 'react';
import styles from './Track.module.css';

function TrackRow({ track, uris, setUris }) {
  const { uri, name, type } = track;
  const [isSelected, setIsSelected] = useState(false);

  const manipulateUris = () => {
    // jika uri udah ada, hapus
    if (uris.includes(uri)) {
      const index = uris.indexOf(uri);
      uris.splice(index, 1);
    } else { // // jika uri belum ada, maka tambahkan
      setUris((prevState) => [...prevState, uri]);
    }
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
    manipulateUris();
  };

  return (
    <tr className={styles.table__row}>
      <td className={styles.table__data}>{uri}</td>
      <td className={styles.table__data}>{name}</td>
      <td className={styles.table__data}>{type}</td>
      <td className={styles.table__data}>
        <button className={styles.button} onClick={handleSelect} type="button">
          {
            isSelected ? 'Deselect' : 'Select'
          }
        </button>
      </td>
    </tr>
  );
}

export default TrackRow;
