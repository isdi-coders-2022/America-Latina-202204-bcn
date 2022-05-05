import AlbumsContext from "./AlbumContext";
import { useEffect, useReducer } from "react";
import albumReducer from "../reducers/albumReducer";
import { loadAlbumsAction } from "../actions/AlbumsActionCreator";

const AlbumProvider = ({ children }) => {
  const [albums, dispatch] = useReducer(albumReducer, []);
  const [detail, detailDispatch] = useReducer(albumReducer, [1]);
  const [myCollection, myCollectionDispatch] = useReducer(albumReducer, []);
  useEffect(() => {
    const apiKey = `0ceed9a664f141e91291c54a6c867b86`;
    const getAlbumData = async (tag) => {
      const responseAlbums = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${apiKey}&limit=100&format=json`
      );
      const responseAlbumsJson = await responseAlbums.json();
      const filteredAlbums = responseAlbumsJson.albums.album.filter(
        (albumToCheck) => albumToCheck.mbid !== ""
      );
      const albumList = await Promise.all(
        filteredAlbums.map(async (albumId) => {
          const responseAlbum = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&mbid=${albumId.mbid}&format=json`
          );
          return responseAlbum.json();
        })
      );
      dispatch(loadAlbumsAction(albumList));
    };
    getAlbumData("blues");
  }, []);
  return (
    <AlbumsContext.Provider
      value={{
        albums,
        dispatch,
        detail,
        detailDispatch,
        myCollection,
        myCollectionDispatch,
      }}
    >
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumProvider;
