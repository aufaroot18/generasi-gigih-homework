import styles from './Track.module.css';

const TrackRowHeader = () => {
  return(
    <tr>
      <th className={styles.table__header}>Name</th>
      <th className={styles.table__header}>Description</th>
      <th className={styles.table__header}>Type</th>
    </tr>
  );
};

export default TrackRowHeader;