import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import DetailedAlbum from "../../component/Detailed Album/DetailedAlbum";

const DetailPage = () => {
  const { detail } = useContext(AlbumContext);

  return (
    <>
      <h2> Detail Page </h2>
      <DetailedAlbum albumInfo={detail[0]} />
    </>
  );
};
export default DetailPage;
