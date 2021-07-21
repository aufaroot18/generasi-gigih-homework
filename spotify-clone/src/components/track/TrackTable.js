/* Components */
import TrackRowHeader from "./TrackRowHeader";
import TrackRow from "./TrackRow";

/* Styles */
import styles from './Track.module.css';

const TrackTable = (props) => {
  const { playlists: tracks } = props;
  const trackRow = tracks.map(track => <TrackRow track={track} key={track.id} />)
  
  return(
    <div className={styles.container}>
      <h2>Track Component</h2>
      <table className={styles.table}>
        <thead className={styles.table__head}>
          <TrackRowHeader />
        </thead>
        <tbody>
          {trackRow}
        </tbody>
      </table>
    </div>
  );
};

export default TrackTable;