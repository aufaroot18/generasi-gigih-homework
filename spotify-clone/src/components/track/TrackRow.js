const TrackRow = (props) => {
  const {
    album: {
      artists: [
        {
          name: artist_name
        }
      ],
      release_date,
      total_tracks
    },
    name: album_name,
  } = props.track;
  console.log(props.track);
  return(
    <tbody>
      <tr>
        <td>{artist_name}</td>
        <td>{album_name}</td>
        <td>{release_date}</td>
        <td>{total_tracks}</td>
      </tr>
    </tbody>
  );
};

export default TrackRow;
