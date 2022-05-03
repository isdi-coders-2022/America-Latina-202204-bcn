import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Album from "./component/Album/Album";
import AlbumContext from "./contexts/Album/AlbumContext";
import { useContext } from "react";
import MainInformation from "./component/MainInformation/MainInformation";

function App() {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      <Header />
      <MainInformation />
      {albums.length && <Album albumInfo={albums[0]} />}
      <Footer />
    </>
  );
}

export default App;
