import { useContext } from "react";
import { Link } from "react-router-dom";
import Album from "../../component/Album/Album";
import styled from "styled-components";
import AlbumContext from "../../store/contexts/AlbumContext";
import UiContext from "../../store/contexts/UiContext";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
`;

const CompleteCollection = () => {
  const { albums } = useContext(AlbumContext);
  const { ui } = useContext(UiContext);
  return (
    <>
      <H1>Complete Collection</H1>
      {albums.length > 0 &&
        albums
          .slice(
            ui.currentPage * ui.albumsPerPage,
            (ui.currentPage + 1) * ui.albumsPerPage
          )
          .map((album, index) => (
            <Link key={index} to="/detail-page">
              <Album albumInfo={album.album} />
            </Link>
          ))}
    </>
  );
};
export default CompleteCollection;
