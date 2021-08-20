import React, { useState } from 'react';
import Search from '../../components/CreatePlaylist/Search';
import styles from './CreatePlaylist.module.css';

function CreatePlaylist() {
  const [uris, setUris] = useState([]);

  return (
    <div className={styles.createPlaylist}>
      <h2 className={styles.createPlaylist__title}>Enjoy Your Playlist</h2>
      <p className={styles.createPlaylist__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      <div>
        <Search uris={uris} setUris={setUris} />
      </div>
    </div>
  );
}

export default CreatePlaylist;
