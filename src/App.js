/*import Album from "./component/Album/Album";
import AlbumContext from "./contexts/Album/AlbumContext";
import { useContext } from "react";*/
import MyCollectionPage from "./pages/MyCollectionPage/MyCollectonsPage";
import Button from "./component/Button/Button";
import { useContext } from "react";
import AlbumContext from "./store/contexts/AlbumsContext";

function App() {
  const { dispatch } = useContext(AlbumContext);

  return (
    <>
      <MyCollectionPage />
      <Button type="modifyInfo" text="test button" />
    </>
  );
}

export default App;
