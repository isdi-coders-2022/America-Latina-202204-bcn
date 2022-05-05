import MainInformation from "../../component/MainInformation/MainInformation";
import Album from "../../component/Album/Album";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import styled from "styled-components";

const ImageRedirect = styled.a`
  text-decoration: none;
`;
const Title = styled.h2`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      esta es la pagina del home
      <MainInformation />
      <Title>Thes Best Albums</Title>
      {albums.length > 0 && (
        <ImageRedirect href=".">
          {" "}
          <Album albumInfo={albums[0].album} />{" "}
        </ImageRedirect>
      )}
      {albums.length > 0 && (
        <ImageRedirect href=".">
          {" "}
          <Album albumInfo={albums[1].album} />{" "}
        </ImageRedirect>
      )}
      {albums.length > 0 && (
        <ImageRedirect href=".">
          {" "}
          <Album albumInfo={albums[2].album} />{" "}
        </ImageRedirect>
      )}
      {albums.length > 0 && (
        <ImageRedirect href=".">
          <Album albumInfo={albums[3].album} />{" "}
        </ImageRedirect>
      )}
      {albums.length > 0 && (
        <ImageRedirect href=".">
          <Album albumInfo={albums[4].album} />{" "}
        </ImageRedirect>
      )}
      {albums.length > 0 && (
        <ImageRedirect href=".">
          <Album albumInfo={albums[5].album} />{" "}
        </ImageRedirect>
      )}
    </>
  );
};
export default HomePage;
