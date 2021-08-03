import React, { useState } from 'react';
import Track from '../track';
import Form from './Form';
import styles from './Playlist.module.css';

function Playlist() {
  const [uris, setUris] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  return (
    <div className={styles.container}>
      {
        isSearched && <Form uris={uris} />
      }
      <Track uris={uris} setUris={setUris} setIsSearched={setIsSearched} />
    </div>
  );
}

export default Playlist;
