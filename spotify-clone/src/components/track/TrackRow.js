import styles from './Track.module.css';

const TrackRow = (props) => {
  const { name, description, type } = props.track;
  
  return(
    <tr className={styles.table__row}>
      <td className={styles.table__data}>{name}</td>
      <td className={styles.table__data}>{description}</td>
      <td className={styles.table__data}>{type}</td>
    </tr>
  );
};

export default TrackRow;
