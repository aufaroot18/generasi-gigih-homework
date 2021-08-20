import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CreatePlaylist from '../pages/CreatePlaylist';
import Search from '../pages/Search';
import FavoriteSong from '../pages/FavoriteSong';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Home from '../pages/Home';

function Routes() {
  const { token } = useSelector((state) => state.playlist);
  const routes = (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/create-playlist">
          <CreatePlaylist />
        </Route>
        <Route path="/favorite">
          <FavoriteSong />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );

  return token ? routes : <Login />;
}

export default Routes;
