import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SpotifyAPI from '../../api/SpotifyAPI';
import Loading from '../../components/loading';
import CardList from '../../components/Home/CardList';
import styles from './Home.module.css';

function Home() {
  const { token } = useSelector((state) => state.playlist);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaylists = async () => {
    setLoading(true);

    const {
      data: { albums },
    } = await SpotifyAPI.getNewReleases(token);

    setPlaylists(albums.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaylists();

    return (() => setPlaylists([]));
  }, []);

  return (
    <div className={styles.home}>
      <h2 className={styles.home__title}>Browse New Playlist</h2>
      <p className={styles.home__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      {loading ? <Loading /> : <CardList playlists={playlists} />}
    </div>
  );
}

export default Home;
