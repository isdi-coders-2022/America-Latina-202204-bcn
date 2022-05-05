import styled from "styled-components";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import Album from "../../component/Album/Album";
import { Link } from "react-router-dom";
const Container = styled.div`
  i {
    display: block;
  }
`;
const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const MyPlaylistPage = () => {
  const { myCollection } = useContext(AlbumContext);
  return (
    <>
      <Title>My Playlist</Title>
      <Container>
        {myCollection.length > 0 &&
          myCollection.map((album, index) => (
            <Link key={index} to="/detail-page">
              <Album key={index} albumInfo={album} />
            </Link>
          ))}
      </Container>
    </>
  );
};
export default MyPlaylistPage;
