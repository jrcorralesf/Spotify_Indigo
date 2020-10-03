import React from 'react';

import "../styles/ArtistPost.css";

function TracksPost({track}) {
    return (
        <div className="SongPost" >
        <img className="songPost__image" src={track.album.images[0]?.url} alt="" />
        <div className="songPost__info">
            <h1>{track.name}</h1>
            <p>
            {track.artists.map((artist) => artist.name).join(", ")} 
            </p>
        </div>
        </div>
    );
}

export default TracksPost;