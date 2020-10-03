import React from "react";

import "../styles/SongPost.css";

function SongPost({ track }) {
    //console.log(track); // ELIMINAR
    return (
            <div className="SongPost" >
            <img className="songPost__image" src={track.images[0]?.url} alt="" />
            <div className="songPost__info">
                <h1>{track.name}</h1>
                <p>
                {track.artists.map((artist) => artist.name).join(", ")} 
                </p>
            </div>
            </div>
    );
}

export default SongPost;
