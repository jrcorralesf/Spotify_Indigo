import React from "react";

import "../styles/AlbumRow.css";

function AlbumRow({ track }) {
    return (
            <div className="AlbumRow" >
            <img className="AlbumRow__image" src={track.images[0]?.url} alt="" />
            <div className="AlbumRow__info">
                <h1>{track.name}</h1>
                <p>
                {track.release_date} 
                </p>
            </div>
            </div>
    );
}

export default AlbumRow;
