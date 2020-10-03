
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  new_releases: null,
  discover_weekly: null,
  top_artists: null,
  item: null,
  songs: null,
  artist: null,
  artistTop: null,
  artistRelated:null,
  artistAlbum: null,
  typeArtist: "",
  typeSong: "",};

const reducer = (state, action) => {
   //console.log(action); //helpful for develop, uncomment
  //console.log(state);   //and see console in browser
  switch (action.type) {
    
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

      case "SET_NEW_RELEASES":
        return {
          ...state,
          new_releases: action.new_releases,
        };

    case "SEARCH_ARTIST":
      return {
        ...state,
        artist: action.artist,
      };

    case "SEARCH_SONGS":
      return {
        ...state,
        songs: action.songs,
      };
  

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "GET_ARTIST_TOP":
      return {
        ...state,
        artistTop: action.artistTop,
      };

    case "GET_ARTIST_RELATED":
      return {
        ...state,
        artistRelated: action.artistRelated,
      };

    case "GET_ARTIST_ALBUM":
      return {
        ...state,
        artistAlbum: action.artistAlbum,
      };

      case "SEARCH_NEW_ARTIST":
      return {
        ...state,
        typeArtist: action.typeArtist,
      };

      case "SEARCH_NEW_SONG":
      return {
        ...state,
        typeSong: action.typeSong,
      };

    default:
      return state;
  }
};

export default reducer;
