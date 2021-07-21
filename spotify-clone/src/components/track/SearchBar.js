/* Package */
import React, { useState } from 'react';
import axios from 'axios';

/* Components */
import TrackTable from './TrackTable';

/* Styles */
import styles from './Track.module.css';

function SearchBar({ token }) {
  /* state */
  const [search, setSearch] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = async (e) => {
    const config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: search,
        type: 'playlist',
      }
    };
    
    const result = await axios(config);
    const playlists = result.data.playlists.items;
    setPlaylists(prevState => [...prevState, ...playlists]);

    _clearInput();
  }

  const _clearInput = () => {
    setSearch('');
  }

  return(
    <div>
      <input type="text" name="search" onChange={handleChange} className={styles.search} value={search} />
      <button onClick={handleClick} className={styles.button}>Search</button>
      {
        !!playlists.length && <TrackTable playlists={playlists} />
      }
    </div>
  );
}

export default SearchBar;