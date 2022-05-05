import MainInformation from "../../component/MainInformation/MainInformation";
import styled from "styled-components";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import Album from "../../component/Album/Album";

const Title = styled.h2`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const MyPlaylistPage = () => {
  const { myCollection } = useContext(AlbumContext);
  return (
    <>
      <Title>My Playlist</Title>
      <MainInformation />
      {myCollection.length > 0 &&
        myCollection.map((album) => <Album albumInfo={album} />)}
    </>
  );
};
export default MyPlaylistPage;
