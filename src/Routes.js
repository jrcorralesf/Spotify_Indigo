import React from 'react';
import {Switch, Route } from "react-router-dom";

import SearchArtist from "./pages/SearchArtist";
import SearchSong from "./pages/SearchSong";
import Releases from "./pages/Releases";
import AlbumInfo from "./pages/AlbumInfo";

const Routes = (
        <Switch>
                    <Route exact path="/songs"  component={SearchSong} />
                    <Route exact path="/artists"  component={SearchArtist} />
                    <Route exact path="/info"  component={AlbumInfo} />
                    <Route exact path="/"  component={Releases} />
                </Switch>  
);

export default Routes;
