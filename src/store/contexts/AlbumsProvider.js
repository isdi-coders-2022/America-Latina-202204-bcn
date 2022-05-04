import AlbumsContext from "./AlbumsContext";
import { useReducer } from "react";
import albumReducer from "../reducers/albumsReducer";

const AlbumProvider = ({ children }) => {
  const [albums, dispatch] = useReducer(albumReducer, { test: 1 });
  return (
    <AlbumsContext.Provider value={{ albums, dispatch }}>
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumProvider;
