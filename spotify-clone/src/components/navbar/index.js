import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setToken } from '../../store/playlist/playlist.slice';
import styles from './navbar.module.css';

function Navbar() {
  const { token } = useSelector(state => state.playlist);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken(null));
  }

  return(
    <div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to="/">Home</Link>
          </li>
          {
            token && (
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} to="/create-playlist">Create Playlist</Link>
              </li>
            )
          }
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to="/gif">Gif</Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} to="/gif/trending">Gif Trending</Link>
          </li>
          {
            token && (
              <li className={styles.nav_item}>
                <button className={styles.logout} onClick={handleLogout}>Logout</button>
              </li>
            )
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
