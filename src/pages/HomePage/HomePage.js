import MainInformation from "../../component/MainInformation/MainInformation";
import Album from "../../component/Album/Album";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
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
      {albums.length > 0 &&
        albums.slice(0, 4).map((album, index) => (
          <Link key={index} to="/detail-page">
            <Album albumInfo={album.album} />
          </Link>
        ))}
    </>
  );
};
export default HomePage;
