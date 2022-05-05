import styled from "styled-components";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import { updateLocalAlbumAction } from "../../store/actions/AlbumsActionCreator";

const AlbumContainer = styled.div`
  padding-bottom: 15px;
  padding-left: 0px;
  padding-right: 0px;
  width: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  img {
    width: 200px;
    border: 1px solid;
  }
  h5 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 7px 0 0 0;
    &:last-child {
      color: rgb(196, 196, 196);
    }
  }
`;

const Album = ({ albumInfo }) => {
  const { detailDispatch } = useContext(AlbumContext);

  return (
    <AlbumContainer>
      <img
        src={albumInfo.image[2]["#text"]}
        alt={albumInfo.name}
        onClick={() => {
          detailDispatch(updateLocalAlbumAction(albumInfo));
        }}
      />
      <h5>{albumInfo.artist}</h5>
      <h5>{albumInfo.name}</h5>
    </AlbumContainer>
  );
};

export default Album;
