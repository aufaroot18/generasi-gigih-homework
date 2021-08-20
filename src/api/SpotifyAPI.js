import axios from 'axios';
import SPOTIFY_ENDPOINT from '../globals/spotify-endpoint';

const SpotifyAPI = {
  getNewReleases(token) {
    const endpoint = process.env.REACT_APP_API_BROWSE;

    const config = {
      method: 'get',
      url: endpoint,
      headers: { Authorization: `Bearer ${token}` },
    };

    return axios(config);
  },

  getUserProfile(token) {
    const config = {
      method: 'get',
      url: SPOTIFY_ENDPOINT.profile(),
      headers: { Authorization: `Bearer ${token}` },
    };

    return axios(config);
  },

  getSongs(query, token) {
    const config = {
      method: 'get',
      url: SPOTIFY_ENDPOINT.search(query),
      headers: { Authorization: `Bearer ${token}` },
    };

    return axios(config);
  },

  createPlaylist(userId, fields, token) {
    const config = {
      method: 'post',
      url: SPOTIFY_ENDPOINT.create_playlist(userId),
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: fields.title,
        description: fields.description,
        public: false,
      },
    };

    return axios(config);
  },

  addItemToPlaylist(uris, playlistId, token) {
    const config = {
      method: 'post',
      url: SPOTIFY_ENDPOINT.add_item_to_playlist,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        uris,
      },
    };

    return axios(config);
  },
};

export default SpotifyAPI;
