const Playlist = (props) => {
  const {
    name: title,
    artists: [
      {
        name: artist,
      }
    ],
    images: [, mediumImage],
  } = props.playlist.album;

  return(
    <div className="playlist">
      <h2>Playlist Component</h2>
      <div className="playlist-image-container">
        <img src={mediumImage.url} alt="" />
      </div>
      <p>Title: {title}</p>
      <p>Artits: {artist}</p>
      <button>Select</button>
    </div>
  );
};

export default Playlist;