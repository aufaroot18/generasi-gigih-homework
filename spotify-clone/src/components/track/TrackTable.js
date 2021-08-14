import React from 'react';
import TrackRowHeader from './TrackRowHeader';
import TrackRow from './TrackRow';
import styles from './Track.module.css';

function TrackTable({ playlists: tracks, uris, setUris }) {
  const trackRow = tracks.map((track) => (
    <TrackRow track={track} key={track.id} uris={uris} setUris={setUris} />
  ));

  return (
    <div className={styles.container}>
      <h2>Tracks</h2>
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
}

export default TrackTable;
