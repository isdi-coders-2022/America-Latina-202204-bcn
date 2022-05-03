import styled from "styled-components";

const AlbumContainer = styled.div`
  padding: 15px;
  width: 40px;
  display: flex;
  flex-direction: column;
  width: 261px;
  align-items: center;
  img {
    width: 100%;
  }
  h5 h6 {
    margin: 0;
    padding: 10px 0;
  }
`;

const Album = () => {
  return (
    <AlbumContainer>
      <img
        src="https://m.media-amazon.com/images/I/810+gKHBoXL._SL1500_.jpg"
        alt="Bob"
      />
      <h5>Bob Dylan</h5>
      <h6>The Freewheelin' Bob Dylan</h6>
    </AlbumContainer>
  );
};

export default Album;
