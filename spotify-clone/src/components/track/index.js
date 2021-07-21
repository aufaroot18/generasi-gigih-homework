import React from 'react';

/* Components */
import SearchBar from './SearchBar';

import styles from './Track.module.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.scope = 'playlist-modify-private';
    this.client_id = 'f5ac16cc1ea44fda9cbe7bb5662252bf';
    this.redirect_uri = 'http://localhost:3000/';
    this.link = `https://accounts.spotify.com/id/authorize?response_type=token&client_id=${this.client_id}&scope=${encodeURIComponent(this.scope)}&redirect_uri=${encodeURIComponent(this.redirect_uri)}&show_dialog=true`;

    this.state = {
      token: null,
    }
  }

  getParams = () => {
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);
    return params;
  }

  componentDidMount() {
    const params = this.getParams();
    const token = params.get('access_token');

    if (token) {
      this.setState({
        token
      })
    }
  }

  render() {
    const { token } = this.state;
    return(
      <div className={styles.container}>
        {
          this.state.token === null
          ? <a href={this.link} onClick={this.handleLogin} className={styles.button}>Login Spotify</a>
          : <SearchBar token={token} />
        }
      </div>
    );
  }
}

export default Track;