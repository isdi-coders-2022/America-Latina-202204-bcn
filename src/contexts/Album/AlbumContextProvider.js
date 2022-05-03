import AlbumContext from "./AlbumContext";
import { useEffect, useState } from "react";

const AlbumContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const apiKey = `0ceed9a664f141e91291c54a6c867b86`;
    const getAlbumData = async (tag) => {
      const responseAlbums = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${apiKey}&limit=1&format=json`
      );
      const responseAlbumsJson = await responseAlbums.json();
      const filteredAlbums = responseAlbumsJson.albums.album.filter(
        (albumToCheck) => albumToCheck.mbid !== ""
      );
      const albumList = await Promise.all(
        filteredAlbums.map(async (albumId) => {
          const responseAlbum = await fetch(
            `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&mbid=${albumId.mbid}&format=json`
          );
          return responseAlbum.json();
        })
      );
      setAlbums(albumList);
    };
    getAlbumData("rock");
  }, []);

  return (
    <AlbumContext.Provider value={{ albums }}>{children}</AlbumContext.Provider>
  );
};

export default AlbumContextProvider;
