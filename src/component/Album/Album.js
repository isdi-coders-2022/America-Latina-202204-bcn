import styled from "styled-components";

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

const Album = ({ albumInfo }) => {
  return (
    <AlbumContainer>
      <img src={albumInfo.image[2]["#text"]} alt={albumInfo.name} />
      <h5>{albumInfo.artist}</h5>
      <h5>{albumInfo.name}</h5>
    </AlbumContainer>
  );
};

export default Album;
