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
  const pageData = {
    currentPage: 0,
    albumsPerPage: 4,
    firstPage: true,
    lastPage: false,
  };
  return (
    <>
      <H1>Complete Collection</H1>
      {albums.length > 0 &&
        albums
          .slice(
            pageData.currentPage * pageData.albumsPerPage,
            (pageData.currentPage + 1) * pageData.albumsPerPage
          )
          .map((album, index) => (
            <Link key={index} to="/detail-page">
              <Album albumInfo={album.album} />
            </Link>
          ))}
    </>
  );
};
export default CompleteCollection;
