import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";

const DetailPage = () => {
  const { detail } = useContext(AlbumContext);

  return (
    <>
      <h2> Detail Page </h2>
    </>
  );
};
export default DetailPage;
