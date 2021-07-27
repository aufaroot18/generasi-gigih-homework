/* Package */
import React, { useState } from 'react';
import axios from 'axios';

/* Components */
import TrackTable from './TrackTable';

/* Styles */
import styles from './Track.module.css';
import { useSelector } from 'react-redux';

function SearchBar({ uris, setUris, setIsSearched }) {
  /* state */
  const [search, setSearch] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const { token } = useSelector(state => state.playlist);

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
        type: 'track',
      }
    };
    
    const result = await axios(config);
    const playlists = result.data.tracks.items;
    setPlaylists(prevState => [...prevState, ...playlists]);
    setIsSearched(true);

    _clearInput();
  }

  const _clearInput = () => {
    setSearch('');
  }

  return(
    <div>
      <h2>Search Track</h2>
      <input type="text" name="search" onChange={handleChange} className={styles.search} value={search} />
      <button onClick={handleClick} className={styles.button}>Search</button>
      {
        !!playlists.length && <TrackTable playlists={playlists} uris={uris} setUris={setUris} />
      }
    </div>
  );
}

export default SearchBar;