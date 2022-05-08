import { useReducer } from "react";
import uiReducer from "../reducers/uiReducer";
import UiContext from "./UiContext";

const initialUi = {
  currentPage: 0,
  albumsPerPage: 4,
  firstPage: true,
  lastPage: false,
  totalPages: 1,
};

const UiProvider = ({ children }) => {
  const [ui, uiDispatch] = useReducer(uiReducer, initialUi);

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
