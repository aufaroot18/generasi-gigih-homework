/* Styles */
import styles from './Gif.module.css';

function SearchBar({ handleClick, handleInput }) {
  return(
    <div>
      <input type="text" onChange={handleInput} className={styles.search} />
      <button onClick={handleClick} className={styles.button}>Search</button>
    </div>
  );
}

export default SearchBar;