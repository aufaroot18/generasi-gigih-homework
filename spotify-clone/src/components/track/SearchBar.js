/* Package */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import TrackTable from './TrackTable';
import styles from './Track.module.css';

function SearchBar({ uris, setUris, setIsSearched }) {
  /* state */
  const [search, setSearch] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const { token } = useSelector((state) => state.playlist);

  const clearInput = () => {
    setSearch('');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    const config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/search',
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: search,
        type: 'track',
      },
    };

    const result = await axios(config);
    const playlistItems = result.data.tracks.items;
    setPlaylists((prevState) => [...prevState, ...playlistItems]);
    setIsSearched(true);

    clearInput();
  };

  return (
    <div>
      <h2>Search Track</h2>
      <input type="text" name="search" onChange={handleChange} className={styles.search} value={search} />
      <button onClick={handleClick} className={styles.button} type="button">Search</button>
      {
        !!playlists.length && <TrackTable playlists={playlists} uris={uris} setUris={setUris} />
      }
    </div>
  );
}

export default SearchBar;
