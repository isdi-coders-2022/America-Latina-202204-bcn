import { useContext } from "react";
import { Link } from "react-router-dom";
import Album from "../../component/Album/Album";
import Paginator from "../../component/Paginator/Paginator";
import styled from "styled-components";
import AlbumContext from "../../store/contexts/AlbumContext";
import UiContext from "../../store/contexts/UiContext";
import {
  previousPageAction,
  nextPageAction,
} from "../../store/actions/UiActionCreator";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
`;

const CompleteCollection = () => {
  const { albums } = useContext(AlbumContext);
  const { ui, uiDispatch } = useContext(UiContext);
  const previousPage = () => {
    uiDispatch(previousPageAction());
  };
  const nextPage = () => {
    uiDispatch(nextPageAction());
  };

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
      <Paginator
        firstAction={() => previousPage()}
        secondAction={() => nextPage()}
      />
    </>
  );
};
export default CompleteCollection;
