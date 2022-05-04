import MainInformation from "../../component/MainInformation/MainInformation";
import Album from "../../component/Album/Album";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";

const HomePage = () => {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      esta es la pagina del home
      <MainInformation />
      {albums.length > 0 && <Album albumInfo={albums[0].album} />}
      {albums.length > 0 && <Album albumInfo={albums[1].album} />}
      {albums.length > 0 && <Album albumInfo={albums[2].album} />}
      {albums.length > 0 && <Album albumInfo={albums[3].album} />}
    </>
  );
};
export default HomePage;
