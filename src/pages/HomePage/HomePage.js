import MainInformation from "../../component/MainInformation/MainInformation";
import Album from "../../component/Album/Album";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import styled from "styled-components";


const Title = styled.h2`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      <MainInformation />
      <Title>The Best Albums</Title>
      {albums.length > 0 && <Album albumInfo={albums[0].album} />}
      {albums.length > 0 && <Album albumInfo={albums[1].album} />}
      {albums.length > 0 && <Album albumInfo={albums[2].album} />}
      {albums.length > 0 && <Album albumInfo={albums[3].album} />}
      {albums.length > 0 && <Album albumInfo={albums[4].album} />}
      {albums.length > 0 && <Album albumInfo={albums[5].album} />}
    </>
  );
};
export default HomePage;
