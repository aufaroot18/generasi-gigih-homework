import React from 'react';
import endpoint from '../../globals/spotify-config';
import styles from './Login.module.css';

function Login() {
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
