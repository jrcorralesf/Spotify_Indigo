import React from 'react';

import "../styles/Releases.css";
import { useStateValue } from "../components/StateProvider";

function Releases() {
    const [{ new_releases }, dispatch] = useStateValue();

    return (
        
            <div className="releaseBody" >
                <div className="titleRelease"> <h2>New Releases</h2></div>
                <div className="sliderContainer"  >
                    <div className="body__songs">
                        {new_releases?.albums.items.map((item) => (
                        console.log(item)
                        ))}
                    </div>
                    
                </div>
            </div>
            );
}

export default Releases;