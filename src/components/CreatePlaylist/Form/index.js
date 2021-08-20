import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SpotifyAPI from '../../../api/SpotifyAPI';
import styles from './Form.module.css';

function Form({ uris }) {
  const { token: myToken } = useSelector((state) => state.playlist);

  const [fields, setFields] = useState({
    title: '',
    description: '',
  });
  const [userId, setUserId] = useState('');
  const [playlistId, setPlaylistId] = useState(null);

  const fetchUser = async () => {
    try {
      const result = await SpotifyAPI.getUserProfile(myToken);
      setUserId(result.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const addItemsToPlaylist = async () => {
    try {
      await SpotifyAPI.addItemToPlaylist(uris, playlistId, myToken);
    } catch (err) {
      console.log(err);
    }
  };

  const createPlaylist = async () => {
    try {
      const result = await SpotifyAPI.createPlaylist(userId, fields, myToken);
      setPlaylistId(result.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const clearInput = () => {
    setFields({ title: '', description: '' });
  };

  useEffect(() => {
    fetchUser();

    if (!!playlistId) {
      addItemsToPlaylist();
    }
  }, [playlistId]);

  const handleFields = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    createPlaylist();
    clearInput();
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.form__title}>Create Playlist</h3>
      <form onSubmit={handleForm}>
        <div>
          <input
            type="text"
            name="title"
            onChange={handleFields}
            className={styles.form__input}
            value={fields.title}
            placeholder="Title"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            onChange={handleFields}
            className={styles.form__input}
            value={fields.description}
            placeholder="Desciption"
            required
            autoComplete="off"
          />
        </div>
        <button className={styles.form__button} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;
