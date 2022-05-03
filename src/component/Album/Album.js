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

const Album = (imageRoute, artist, title) => {
  return (
    <AlbumContainer>
      <img
        src="https://m.media-amazon.com/images/I/810+gKHBoXL._SL1500_.jpg"
        alt="Bob Dylan"
      />
      <h5>Bob Dylan</h5>
      <h5>The Freewheelin' Bob Dylan</h5>
    </AlbumContainer>
  );
};

export default Album;
