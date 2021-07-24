/* Styles */
import styles from './Gif.module.css';

function CardItem({ gif }) {
  return(
    <div className={styles.image}>
      <img src={gif.images.original.url} alt="gif" width="100" />
    </div>
  );
}

export default CardItem;