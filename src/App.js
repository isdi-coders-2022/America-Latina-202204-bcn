import Footer from "./component/Footer/Footer";

import Header from "./component/Header/Header";
import Album from "./component/Album/Album";
<<<<<<< HEAD
import AlbumContext from "./contexts/Album/AlbumContext";
import { useContext } from "react";
=======
import MainInformation from "./component/MainInformation/MainInformation";
>>>>>>> d67b30c9e1aef2dc26e3d8276d2045e9e4f3cb82

function App() {
  const { albums } = useContext(AlbumContext);
  return (
    <>
<<<<<<< HEAD
      <AlbumContext.Provider value={albums}>
        <Header />
        {albums.length && <Album albumInfo={albums[0]} />}
        <Footer />
      </AlbumContext.Provider>
=======
      <Header />

      <MainInformation />

      <Album albumInfo={album} />

      <Footer />
>>>>>>> d67b30c9e1aef2dc26e3d8276d2045e9e4f3cb82
    </>
  );
}

export default App;
