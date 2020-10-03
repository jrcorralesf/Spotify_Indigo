import React from 'react';
import {Link} from "react-router-dom";

import "../styles/ArtistPost.css";
import { useStateValue } from "./StateProvider";

function ArtistPost({ track }) {
    const [{item}, dispatch] = useStateValue();
    
    return (
        <Link className="link"  to="/info"
        onClick={()=>dispatch(
            {type: "SET_ITEM",
            item: track})}
        > 
            <div className="SongPost" >
                <img className="songPost__image" src={track.images[0]?.url} alt="" />
                <div className="songPost__info">
                    <h1>
                        {track.name} 
                    </h1>
                </div>
            </div>
        </Link>
    );
}

export default ArtistPost;