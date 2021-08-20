import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/playlist/playlist.slice';
import endpoint from '../../globals/spotify-config';
import styles from './Login.module.css';
import { getParams } from '../../utils';

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getParams();
    if (!!params.get('access_token')) {
      dispatch(setToken(params.get('access_token')));
    }
  }, []);

  return (
    <div className={styles.login}>
      <h2 className={styles.login__title}>Enjoy Your Life with Spotify</h2>
      <p className={styles.login__description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      <a className={styles.login__button} href={endpoint}>
        Login
      </a>
    </div>
  );
}

export default Login;
