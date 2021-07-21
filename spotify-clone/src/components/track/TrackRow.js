import { useState } from 'react';

import styles from './Track.module.css';

function TrackRow(props) {
  const { name, type } = props.track;
  const [ isSelected, setIsSelected ] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  }
  
  return(
    <tr className={styles.table__row}>
      <td className={styles.table__data}>{name}</td>
      <td className={styles.table__data}>{type}</td>
      <td className={styles.table__data}>
        <button className={styles.button} onClick={handleSelect}>
          {
            isSelected ? 'Deselect' : 'Select'
          }
        </button>
      </td>
    </tr>
  );
};

export default TrackRow;
