import './App.css';
/* Components */
import Gif from './components/gif';
import Playlist from './components/playlist';
import Track from './components/track';

/* Data */
import gif from './data/gif-source';
import { data as playlist } from './data/album-source';
import { data as tracks } from './data/albums-source';

const App = () => {
  return (
    <div className="App">
      <Gif gif={gif} />
      <Playlist playlist={playlist} />
      <Track tracks={tracks} />
    </div>
  );
}

export default App;
