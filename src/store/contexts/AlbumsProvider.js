import AlbumsContext from "./AlbumsContext";
import { useEffect, useReducer } from "react";
import albumReducer from "../reducers/albumsReducer";
import { loadAlbumsAction } from "../actions/AlbumsActionCreator";

const AlbumProvider = ({ children }) => {
  const [albums, dispatch] = useReducer(albumReducer, []);
  useEffect(() => {
    const apiKey = `0ceed9a664f141e91291c54a6c867b86`;
    const getAlbumData = async (tag) => {
      const responseAlbums = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${apiKey}&limit=10&format=json`
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
    getAlbumData("rock");
  }, []);
  return (
    <AlbumsContext.Provider value={{ albums, dispatch }}>
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumProvider;
