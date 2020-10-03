import React from "react";

import "../styles/SongRow.css";

function msToTime(duration) {
  let 
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60);

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return  minutes + ":" + seconds;
}

function SongRow({ track }) {
  console.log(track);
  return (
    <div className="songRow" >
      <img className="songRow__album" src={track?.album?.images[0]?.url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.album.name}</p>
      </div>
      <div className="songRow__time">
          <p>{msToTime(track.duration_ms)}</p>
      </div>      
    </div>
  );
}

export default SongRow;
