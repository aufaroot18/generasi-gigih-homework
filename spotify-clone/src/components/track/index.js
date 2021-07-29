/* eslint-disable react-hooks/exhaustive-deps */

/* Package */
import React, { useEffect } from 'react';

/* Components */
import SearchBar from './SearchBar';

/* Styles */
import styles from './Track.module.css';

/* Config */
import endpoint from '../../globals/spotify-config';


import { useDispatch, useSelector } from 'react-redux';
import { setToken as storeToken } from '../../store/playlist/playlist.slice';

const getParams = () => {
  const hash = window.location.hash.substr(1);
  const params = new URLSearchParams(hash);
  return params;
};

function Track({ uris, setUris, setIsSearched }) {
  const { token } = useSelector(state => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getParams();
    if (!!params.get('access_token')) {
      dispatch(storeToken(params.get('access_token')));
    }
  }, []);

  return(
    <div className={styles.container}>
      {
        token === null
        ? <a href={endpoint} className={styles.button}>Login Spotify</a>
        : <SearchBar uris={uris} setUris={setUris} setIsSearched={setIsSearched} />
      }
    </div>
  );
}

export default Track;