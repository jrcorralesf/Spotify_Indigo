import React from 'react';

import "../styles/SearchSong.css";
import TracksPost from "../components/TracksPost";
import { useStateValue } from "../components/StateProvider";

function SearchSong() {
    const [{ songs }, dispatch] = useStateValue();
    
    return (
        <div className="releaseBody" >
                <div className="titleRelease"> <h2>Tracks Found</h2></div>
                <div className="sliderContainer"  >
                    <div className="body__songs">
                        {songs?.tracks.items.map((item) => (
                        <TracksPost  track={item} />
                        ))}
                    </div>
                </div>
        </div>
    );
}

export default SearchSong;