import { useReducer } from "react";
import uiReducer from "../reducers/uiReducer";
import UiContext from "./uiContext";

const initialUi = {
  currentPage: 0,
  albumsPerPage: 4,
  firstPage: true,
  lastPage: false,
};

export const UiProvider = ({ children }) => {
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
