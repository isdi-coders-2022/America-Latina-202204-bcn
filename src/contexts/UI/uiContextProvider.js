import uiContext from "./uiContext";
import { useState } from "react";

const UiContextProvider = ({ children }) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [addedAlbum, setAddedAlbum] = useState(false);
  const [incompleteInformation, setIncompleteInformation] = useState(true);
  const [removedAlbum, setRemovedAlbum] = useState(false);
  const [modifiedAlbum, setModifiedAlbum] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  return (
    <uiContext.Provider
      value={{
        loadingStatus,
        setLoadingStatus,
        errorStatus,
        setErrorStatus,
        addedAlbum,
        setAddedAlbum,
        incompleteInformation,
        setIncompleteInformation,
        removedAlbum,
        setRemovedAlbum,
        modifiedAlbum,
        setModifiedAlbum,
        notFound,
        setNotFound,
        formStatus,
        setFormStatus,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};

export default UiContextProvider;
