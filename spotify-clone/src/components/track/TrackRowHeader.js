import styles from './Track.module.css';

function TrackRowHeader() {
  return(
    <tr>
      <th className={styles.table__header}>Name</th>
      <th className={styles.table__header}>Type</th>
      <th className={styles.table__header}>Action</th>
    </tr>
  );
};

export default TrackRowHeader;