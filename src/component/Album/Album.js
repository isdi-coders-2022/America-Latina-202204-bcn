import styled from "styled-components";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import {
  deleteAlbumsAction,
  updateLocalAlbumAction,
} from "../../store/actions/AlbumsActionCreator";

const AlbumContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-bottom: 15px;
  padding-left: 0px;
  padding-right: 0px;
  width: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  i {
    display: none;
  }
  img {
    width: 200px;
    border: 1px solid;
  }
  h5 {
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 20px;
    margin: 0;
    padding: 7px 0 0 0;
    &:last-child {
      color: rgb(196, 196, 196);
    }
  }
`;

const Album = ({ albumInfo }) => {
  const { detailDispatch, myCollectionDispatch } = useContext(AlbumContext);

  return (
    <AlbumContainer>
      <img
        src={albumInfo.image[2]["#text"]}
        alt={albumInfo.name}
        onClick={() => {
          detailDispatch(updateLocalAlbumAction(albumInfo));
        }}
      />
      <i
        className="fa-solid fa-trash-can"
        onClick={() => {
          myCollectionDispatch(
            deleteAlbumsAction(`${albumInfo.artist}-${albumInfo.name}`)
          );
        }}
      ></i>
      <h5
        onClick={() => {
          detailDispatch(updateLocalAlbumAction(albumInfo));
        }}
      >
        {albumInfo.artist}
      </h5>
      <h5
        onClick={() => {
          detailDispatch(updateLocalAlbumAction(albumInfo));
        }}
      >
        {albumInfo.name}
      </h5>
    </AlbumContainer>
  );
};

export default Album;
