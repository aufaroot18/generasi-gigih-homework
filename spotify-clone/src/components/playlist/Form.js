import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './Playlist.module.css';

function Form({ uris }) {
  const { token: myToken } = useSelector((state) => state.playlist);

  const [fields, setFields] = useState({
    title: '',
    description: '',
  });
  const [userId, setUserId] = useState('');
  const [playlistId, setPlaylistId] = useState(null);

  const getUserProfile = async () => {
    const endpoint = 'https://api.spotify.com/v1/me';

    const config = {
      method: 'get',
      url: endpoint,
      headers: { Authorization: `Bearer ${myToken}` },
    };

    try {
      const result = await axios(config);
      setUserId(result.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const addItemsToPlaylist = async () => {
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    const config = {
      method: 'post',
      url: endpoint,
      headers: { Authorization: `Bearer ${myToken}` },
      data: {
        uris,
      },
    };

    try {
      await axios(config);
    } catch (err) {
      console.log(err);
    }
  };

  const createPlaylist = async () => {
    const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

    const config = {
      method: 'post',
      url: endpoint,
      headers: { Authorization: `Bearer ${myToken}` },
      data: {
        name: fields.title,
        description: fields.description,
        public: false,
      },
    };

    try {
      const result = await axios(config);
      setPlaylistId(result.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const clearInput = () => {
    setFields({ title: '', description: '' });
    console.log('ok');
    console.log(fields);
  };

  useEffect(() => {
    getUserProfile();

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
    <div>
      <h2>Create Playlist</h2>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" onChange={handleFields} className={styles.input} value={fields.title} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" name="description" onChange={handleFields} className={styles.input} value={fields.description} />
        </div>
        <button className={styles.button} type="button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
