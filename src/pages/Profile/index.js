/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SpotifyAPI from '../../api/SpotifyAPI';
import { isObjectEmpty } from '../../utils';
import Loading from '../../components/loading';
import User from '../../components/Profile/User';
import styles from './Profile.module.css';

function Profile() {
  const { token } = useSelector((state) => state.playlist);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    const { data } = await SpotifyAPI.getUserProfile(token);

    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.profile}>
      <h2 className={styles.profile__title}>Profile</h2>
      <p className={styles.profile__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      {loading ? <Loading /> : !isObjectEmpty(user) && <User user={user} />}
    </div>
  );
}

export default Profile;
