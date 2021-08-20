import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SpotifyAPI from '../../api/SpotifyAPI';
import Loading from '../../components/loading';
import CardList from '../../components/Search/CardList';
import styles from './Search.module.css';

function Search() {
  const { token } = useSelector((state) => state.playlist);
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSong = async () => {
    setLoading(true);

    const {
      data: { tracks },
    } = await SpotifyAPI.getSongs(query, token);

    setSongs(tracks.items);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSong();
    setQuery('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.search}>
      <h2 className={styles.search__title}>Search Song</h2>
      <p className={styles.search__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          className={styles.search__input}
          type="text"
          placeholder="Search"
          autoComplete="off"
        />
      </form>
      {loading ? <Loading /> : <CardList songs={songs} />}
    </div>
  );
}

export default Search;
