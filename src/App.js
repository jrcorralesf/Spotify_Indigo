import React, { useEffect  } from "react";
import SpotifyWebApi from "spotify-web-api-js";


import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./components/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Authorization #1: Refreshable user authorization: Authorization Code Flow
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
        
      });
    }
    }, [token,  dispatch]);

  return (
    <div className="app">
      {!token && <Login />} 
      {token && <Home spotify={spotify} />}
  </div>
  );
}

export default App;
