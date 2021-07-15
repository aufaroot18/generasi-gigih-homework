import './App.css';
import Gif from './components/gif';
import gif from './data/gif-source';
import Playlist from './components/playlist';
import { data as playlist } from './data/album-source';

const App = () => {
  return (
    <div className="App">
      <Gif gif={gif} />
      <Playlist playlist={playlist} />
    </div>
  );
}

export default App;
