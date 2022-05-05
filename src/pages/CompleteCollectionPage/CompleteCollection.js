import { useContext } from "react";
import { Link } from "react-router-dom";
import Album from "../../component/Album/Album";
import styled from "styled-components";
import AlbumContext from "../../store/contexts/AlbumContext";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
`;

const CompleteCollection = () => {
  const { albums } = useContext(AlbumContext);
  return (
    <>
      <H1>Complete Collection</H1>

      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[0].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[1].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[2].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[3].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[4].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[5].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[6].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[7].album} />}
      </Link>
      <Link to="/detail-page">
        {albums.length > 0 && <Album albumInfo={albums[8].album} />}
      </Link>
    </>
  );
};
export default CompleteCollection;
