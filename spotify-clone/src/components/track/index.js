import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken as storeToken } from '../../store/playlist/playlist.slice';
import SearchBar from './SearchBar';
import styles from './Track.module.css';
import endpoint from '../../globals/spotify-config';

const getParams = () => {
  const hash = window.location.hash.substr(1);
  const params = new URLSearchParams(hash);
  return params;
};

function Track({ uris, setUris, setIsSearched }) {
  const { token } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getParams();
    if (!!params.get('access_token')) {
      dispatch(storeToken(params.get('access_token')));
    }
  }, []);

  return (
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
