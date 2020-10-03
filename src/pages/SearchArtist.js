import React from 'react';

import "../styles/SearchArtist.css";
import ArtistPost from "../components/ArtistPost";
import { useStateValue } from "../components/StateProvider";

function SearchArtist() {
    const [{ artist }, dispatch] = useStateValue();
    return (
        <div className="releaseBody" >
                <div className="titleRelease"> <h2>Artists Found</h2></div>
                <div className="sliderContainer"  >
                    <div className="body__songs">
                        {artist?.artists.items.map((item) => (
                        <ArtistPost  track={item} />
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default SearchArtist;