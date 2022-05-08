import { useContext, useEffect, useReducer } from "react";
import uiReducer from "../reducers/uiReducer";
import AlbumContext from "./AlbumContext";
import UiContext from "./UiContext";
import { modifyPropertyAction } from "../actions/UiActionCreator";

const initialUi = {
  currentPage: 0,
  albumsPerPage: 4,
  firstPage: true,
  lastPage: false,
  totalPages: 1,
};

const UiProvider = ({ children }) => {
  const [ui, uiDispatch] = useReducer(uiReducer, initialUi);
  const { albums } = useContext(AlbumContext);
  const totalPages = Math.ceil(albums.length / ui.albumsPerPage);
  useEffect(() => {
    uiDispatch(modifyPropertyAction({ totalPages: totalPages }));
  }, [totalPages]);
  return (
    <UiContext.Provider
      value={{
        ui,
        uiDispatch,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
