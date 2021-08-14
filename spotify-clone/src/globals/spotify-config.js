const CONFIG = {
  scope: 'playlist-read-private playlist-modify-private',
  client_id: 'f5ac16cc1ea44fda9cbe7bb5662252bf',
};

const endpoint = `https://accounts.spotify.com/id/authorize?response_type=token&client_id=${CONFIG.client_id}&scope=${encodeURIComponent(CONFIG.scope)}&redirect_uri=${encodeURIComponent(process.env.REACT_APP_REDIRECT_URL)}`;

export default endpoint;
