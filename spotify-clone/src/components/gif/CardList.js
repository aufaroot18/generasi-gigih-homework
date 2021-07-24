/* Components */
import CardItem from "./CardItem";

/* Styles */
import styles from './Gif.module.css';

function CardList({ data }) {
  const cardItems = data.map(gif => <CardItem gif={gif} key={gif.id} />);
  
  return(
    <div className={styles.images}>
      {cardItems}
    </div>
  );
}

export default CardList;