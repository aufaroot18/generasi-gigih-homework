import TrackRowHeader from "./TrackRowHeader";
import TrackRow from "./TrackRow";

const Track = (props) => {
  const { tracks } = props;
  const trackRow = tracks.map(track => <TrackRow track={track} key={track.id} />)
  
  return(
    <>
      <h2>Track Component</h2>
      <table>
        <TrackRowHeader />
        {trackRow}
      </table>
    </>
  );
};

export default Track;