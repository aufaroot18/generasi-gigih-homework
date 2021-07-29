import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Gif from '../components/gif';
import Playlist from '../components/playlist';

function Routes() {
  const { token } = useSelector(state => state.playlist);

  return(
    <div>
      <Switch>
        <Route path="/" exact>
          <Playlist />
        </Route>
        <Route path="/create-playlist">
          { token ? <Playlist /> : <Redirect to="/" /> }
        </Route>
        <Route path="/gif" exact>
          <Gif />
        </Route>
        <Route path="/gif/trending">
          <Gif trending />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;