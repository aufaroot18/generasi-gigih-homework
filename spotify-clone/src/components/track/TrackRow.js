/* Package */
import { useState } from 'react';

/* Styles */
import styles from './Track.module.css';

function TrackRow(props) {
  const { uri, name, type } = props.track;
  const { uris, setUris } = props;
  const [ isSelected, setIsSelected ] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    _manipulateUris();
  };

  const _manipulateUris = () => {
    // jika uri udah ada, hapus
    if (uris.includes(uri)) {
      const index = uris.indexOf(uri);
      uris.splice(index, 1);
    }
    // jika uri belum ada, maka tambahkan
    else {
      setUris(prevState => [...prevState, uri]);
    }
  }
  
  return(
    <tr className={styles.table__row}>
      <td className={styles.table__data}>{uri}</td>
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
