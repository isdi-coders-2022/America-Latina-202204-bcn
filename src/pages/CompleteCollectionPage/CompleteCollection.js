import { useContext } from "react";
import { Link } from "react-router-dom";
import Album from "../../component/Album/Album";
import styled from "styled-components";
import AlbumContext from "../../store/contexts/AlbumContext";
import UiContext from "../../store/contexts/UiContext";
import Button from "../../component/Button/Button";
import {
  nextPageAction,
  previousPageAction,
} from "../../store/actions/UiActionCreator";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
`;

const CompleteCollection = () => {
  const { albums } = useContext(AlbumContext);
  const { ui, uiDispatch } = useContext(UiContext);
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
      {ui.currentPage >= 1 && (
        <Button
          type="pagination"
          text="Previous Page"
          action={() => {
            uiDispatch(previousPageAction(albums));
          }}
        />
      )}
      <Button
        type="pagination"
        text="Next Page"
        action={() => {
          uiDispatch(nextPageAction(albums));
        }}
      />
    </>
  );
};
export default CompleteCollection;
