import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";

const DetailPage = () => {
  const { detail } = useContext(AlbumContext);

  return (
    <>
      <h2> esta es la pagina de detalle </h2>
      <p>{detail[0]}</p>
    </>
  );
};
export default DetailPage;
