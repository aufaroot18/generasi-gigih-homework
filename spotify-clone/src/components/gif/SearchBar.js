/* Styles */
import styles from './Gif.module.css';

function SearchBar({ handleClick, handleSearch }) {
  return(
    <div>
      <input type="text" onChange={handleSearch} className={styles.search} />
      <button onClick={handleClick} className={styles.button}>Search</button>
    </div>
  );
}

export default SearchBar;