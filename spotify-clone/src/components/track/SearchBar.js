/* Package */
import React from 'react';
import axios from 'axios';

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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.token = props.token;
    this.state = {
      search: '',
      playlists: null,
    };
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  }

  handleClick = async (e) => {
    const { search } = this.state;

    const config = {
      headers: { Authorization: `Bearer ${this.token}` }
    };
    const result = await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=playlist`, config);
    
    this.setState({
      playlists: result.data.playlists.items,
    });
  }

  render() {
    console.log(this.token);
    const { playlists } = this.state;
    return(
      <div>
        <input type="text" name="search" onChange={this.handleChange} className={styles.search} />
        <button onClick={this.handleClick} className={styles.button}>Search</button>
        {
          playlists && <TrackTable playlists={playlists} />
        }
      </div>
    );
  }
}

export default SearchBar;