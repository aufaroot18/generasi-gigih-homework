const SPOTIFY_ENDPOINT = {
  profile() {
    return 'https://api.spotify.com/v1/me';
  },

  search(query) {
    return `https://api.spotify.com/v1/search?q=${query}&type=track&market=ID&limit=10`;
  },

  create_playlist(userId) {
    return `https://api.spotify.com/v1/users/${userId}/playlists`;
  },

  add_item_to_playlist(playlistId) {
    return `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  },
};

export default SPOTIFY_ENDPOINT;
