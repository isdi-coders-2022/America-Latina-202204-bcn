import { useContext } from "react";
import styled from "styled-components";
import AlbumContext from "../../contexts/Album/AlbumContext";

const AlbumContainer = styled.div`
  padding: 15px;
  width: 40px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  img {
    width: 100vw;
  }
  h5 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    margin: 0;
    padding: 7px 0 0 0;
    &:last-child {
      color: rgb(196, 196, 196);
    }
  }
`;

const Album = () => {
  const { albums } = useContext(AlbumContext);
  if (albums.length > 0) {
    return (
      <AlbumContainer>
        <img
          src={albums[0].album.image[3]["#text"]}
          alt={albums[0].album.name}
        />
        <h5>{albums[0].album.artist}</h5>
        <h5>{albums[0].album.name}</h5>
      </AlbumContainer>
    );
  }
};

export default Album;
