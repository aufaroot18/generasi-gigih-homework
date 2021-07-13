import './App.css';
import { data } from './data/album-source';

const App = () => {
  const {
    name: title,
    artists: [
      {
        name: artist,
      }
    ],
    images: [, mediumImage],
  } = data.album;

  return (
    <div className="App">
      <div className="playlists">
        <div className="playlist">
          <div className="playlist-image-container">
            <img src={mediumImage.url} alt="" />
          </div>
          <p>Title: {title}</p>
          <p>Artits: {artist}</p>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}

export default App;
