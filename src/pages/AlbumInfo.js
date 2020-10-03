import React, { useEffect  }  from 'react';

import "../styles/AlbumInfo.css";
import SongRow from "../components/SongRow";
import AlbumRow from "../components/AlbumRow";

import { useStateValue } from "../components/StateProvider";


function AlbumInfo() {
    const [{item, spotify, artistTop,artistRelated,artistAlbum}, dispatch] = useStateValue();
    useEffect(() => {
        spotify.getArtistTopTracks(item.id, 'CO').then((response) =>
        dispatch({
        type: "GET_ARTIST_TOP",
        artistTop:response,
        })
        );

        spotify.getArtistRelatedArtists(item.id,{ limit : 4}).then((response) =>
        dispatch({
        type: "GET_ARTIST_RELATED",
        artistRelated:response,
        })
        );

        spotify.getArtistAlbums(item.id,{ limit : 5}).then((response) =>
        dispatch({
        type: "GET_ARTIST_ALBUM",
        artistAlbum:response,
        })
        );

    }, [item, dispatch]);

    return (
        <div className="info_body">
            <div className="info_left">
                <div className="artist_image_container"> 
                <img  className="artist_image" src={item.images[0]?.url} alt="" />
                <h2> {item.name} </h2>
                </div>
                <div className="artist_related_artist_container"> 
                <hr />
                <h4> Similars to {item.name} </h4>
                <br />
                <img  className="artist_related_artist" src={artistRelated?.artists[0]?.images[0]?.url} alt="" />
                <img  className="artist_related_artist" src={artistRelated?.artists[1]?.images[0]?.url} alt="" />
                <img  className="artist_related_artist" src={artistRelated?.artists[2]?.images[0]?.url} alt="" />
                <img  className="artist_related_artist" src={artistRelated?.artists[3]?.images[0]?.url} alt="" />
                </div>
            </div>

            <div className="info_right">
                <h4> Albums </h4>
                <div className="artist_albums"> 
                {artistAlbum?.items.map((itemMap) => (
                <AlbumRow  track={itemMap} />
                ))}
                </div>

                <hr />
                <br />
                <br />
                <div className="pop_tracks"> 
                <h4> Most Popular Tracks </h4>
                <hr />
                </div>
                <div className="artist_top_songs"> 
                {artistTop?.tracks.map((itemMap) => (
                <SongRow track={itemMap} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default AlbumInfo;