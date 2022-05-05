import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import DetailedAlbum from "../../component/Detailed Album/DetailedAlbum";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const DetailPage = () => {
  const { detail } = useContext(AlbumContext);

  return (
    <>
      <Title> Detail Page </Title>
      <DetailedAlbum albumInfo={detail[0]} />
    </>
  );
};
export default DetailPage;
