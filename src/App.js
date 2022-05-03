import Footer from "./component/Footer/Footer";

import Header from "./component/Header/Header";
import Album from "./component/Album/Album";
import AlbumContext from "./contexts/Album/AlbumContext";
import { useContext } from "react";

function App() {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      <AlbumContext.Provider value={albums}>
        <Header />
        {albums.length && <Album albumInfo={albums[0]} />}
        <Footer />
      </AlbumContext.Provider>
    </>
  );
}

export default App;
