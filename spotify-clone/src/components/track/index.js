import React, { useState, useEffect } from 'react';

/* Components */
import SearchBar from './SearchBar';

import endpoint from '../../globals/spotify-config';

import styles from './Track.module.css';

function Track(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const params = getParams();
    setToken(params.get('access_token'));
  }, []);

  const getParams = () => {
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);
    return params;
  }

  return(
    <div className={styles.container}>
      {
        token === null
        ? <a href={endpoint} className={styles.button}>Login Spotify</a>
        : <SearchBar token={token} />
      }
    </div>
  );
}

export default Track;