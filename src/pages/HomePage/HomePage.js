import MainInformation from "../../component/MainInformation/MainInformation";
import Album from "../../component/Album/Album";
import { useContext, useEffect } from "react";
import { loadAlbumsAction } from "../../store/actions/AlbumsActionCreator";
import AlbumContext from "../../store/contexts/AlbumContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h2`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  const { albums } = useContext(AlbumContext);
  const { detail, detailDispatch } = useContext(AlbumContext);
  useEffect(() => {
    detailDispatch(loadAlbumsAction(["logró cambiar"]));
  }, [detailDispatch]);
  //;
  return (
    <>
      <MainInformation />
      <Title>The Best Albums</Title>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[0].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[1].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[2].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[3].album} />}
      </Link>
    </>
  );
};
export default HomePage;
