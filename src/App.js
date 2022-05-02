import { useContext } from "react";
import Header from "./component/Header/Header";
import AlbumContext from "./contexts/Album/AlbumContext";

function App() {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
