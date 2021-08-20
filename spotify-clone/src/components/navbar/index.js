import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setToken } from '../../store/playlist/playlist.slice';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const { token } = useSelector((state) => state.playlist);
  const [isNavActive, setIsNavActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem('token');
    history.push('/');
  };

  const handleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const nav = (
    <div>
      <nav className={styles.navbar} data-testid="nav">
        <div className={styles.navbar__brand}>
          <img src={logo} alt="logo" />
        </div>
        <button
          className={styles.navbar__toggler}
          type="button"
          onClick={handleNav}
        >
          ☰
        </button>
        <div
          className={`${styles.navbar__content} ${
            isNavActive && styles.navbar__show
          }`}
        >
          <ul className={styles.nav} onClick={handleNav} aria-hidden="true">
            <li className={styles.nav__item} data-testid="listitem">
              <Link className={styles.nav__link} to="/">
                Home
              </Link>
            </li>
            <li className={styles.nav__item} data-testid="listitem">
              <Link className={styles.nav__link} to="/search">
                Search Song
              </Link>
            </li>
            <li className={styles.nav__item} data-testid="listitem">
              <Link className={styles.nav__link} to="/create-playlist">
                Create Playlist
              </Link>
            </li>
            <li className={styles.nav__item} data-testid="listitem">
              <Link className={styles.nav__link} to="/favorite">
                Favorite Song
              </Link>
            </li>
            <li className={styles.nav__item} data-testid="listitem">
              <Link className={styles.nav__link} to="/profile">
                Profile
              </Link>
            </li>
            <li className={styles.nav__item} data-testid="listitem">
              <button
                className={styles.logout}
                onClick={handleLogout}
                type="button"
                role="logout"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  return token && nav;
}

export default Navbar;
