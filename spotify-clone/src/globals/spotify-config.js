const CONFIG = {
  scope: 'playlist-modify-private',
  redirect_url: 'http://localhost:3000/',
  client_id: 'f5ac16cc1ea44fda9cbe7bb5662252bf',
};

const endpoint = `https://accounts.spotify.com/id/authorize?response_type=token&client_id=${CONFIG.client_id}&scope=${encodeURIComponent(CONFIG.scope)}&redirect_uri=${encodeURIComponent(CONFIG.redirect_url)}&show_dialog=true`

export default endpoint;