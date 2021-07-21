/* Package */
import React from 'react';
import axios from 'axios';

/* Components */
import TrackTable from './TrackTable';

/* Styles */
import styles from './Track.module.css';

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