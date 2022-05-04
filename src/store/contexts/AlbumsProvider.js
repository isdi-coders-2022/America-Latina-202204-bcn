import AlbumsContext from "./AlbumsContext";
import { useReducer } from "react";
import albumReducer from "../reducers/albumsReducer";
import useApi from "../hooks/useApi";

const AlbumProvider = ({ children }) => {
  const [albums, dispatch] = useReducer(albumReducer, useApi("rock"));
  return (
    <AlbumsContext.Provider value={{ albums, dispatch }}>
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumProvider;
