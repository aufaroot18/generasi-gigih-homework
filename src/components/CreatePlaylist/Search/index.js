import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SpotifyAPI from '../../../api/SpotifyAPI';
import Loading from '../../loading';
import Form from '../Form';
import CardList from '../CardList';
import styles from './Search.module.css';

function Search({ uris, setUris }) {
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const { token } = useSelector((state) => state.playlist);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      data: { tracks },
    } = await SpotifyAPI.getSongs(search, token);

    setSongs(tracks.items);
    setSearch('');
    setLoading(false);
    setIsSearched(true);
  };

  return (
    <div className={styles.search}>
      <div>
        <h3 className={styles.search__title}>Search Song</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Track"
            type="text"
            name="search"
            onChange={handleChange}
            className={styles.search__input}
            value={search}
            autoComplete="off"
          />
        </form>
        { isSearched && <Form uris={uris} /> }
        { loading ? <Loading /> : <CardList songs={songs} uris={uris} setUris={setUris} /> }
      </div>
    </div>
  );
}

export default Search;
