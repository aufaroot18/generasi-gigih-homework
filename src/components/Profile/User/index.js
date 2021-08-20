import React from 'react';
import styles from './User.module.css';

function User({ user }) {
  return (
    <div className={styles.user}>
      <div className={styles.user__image}>
        <img src={user.images[0].url} alt="profile" />
      </div>
      <h3 className={styles.user__name}>{user.display_name}</h3>
      <p className={styles.user__id}>id: {user.id}</p>
      <div className={styles.user__info}>
        <div>
          <p className={styles.user__label}>Type</p>
          <p className={styles.user__type}>{user.type}</p>
        </div>
        <div>
          <p className={styles.user__label}>Follower</p>
          <p className={styles.user__followers}>{user.followers.total ?? ''}</p>
        </div>
        <div>
          <p className={styles.user__label}>Country</p>
          <p className={styles.user__country}>{user.country}</p>
        </div>
      </div>
      <a
        className={styles.user__link}
        href={user.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
      >
        See Profile
      </a>
    </div>
  );
}

export default User;
