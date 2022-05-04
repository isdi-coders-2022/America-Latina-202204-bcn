import Button from "../Button/Button";
import styled from "styled-components";

const DetailedAlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  padding: 10px;

  img {
    width: auto;
  }
  .detailed_album--info {
    display: inline-block;
  }
  h5 {
    margin: 5px;
  }
  .pagination_buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const DetailedAlbum = ({ albumInfo }) => {
  return (
    <>
      <DetailedAlbumContainer>
        <h5>{albumInfo.artist}</h5>
        <h5>{albumInfo.name}</h5>
        <img src={albumInfo.image[2]["#text"]} alt={albumInfo.name} />
        <div className="detailed_album--info">
          <h6>Genre: {albumInfo.tags.tag[0].name}</h6>
          <h6>Release Date: {albumInfo.wiki.published}</h6>
        </div>
        <h5>Tracklist</h5>
        <h6>{albumInfo.wiki.summary}</h6>
        <Button type="modifyInfo" text="Modify information" />
        <div className="pagination_buttons">
          <Button type="pagination" text="Previous Page" />
          <Button type="pagination" text="Next Page" />
        </div>
      </DetailedAlbumContainer>
    </>
  );
};

export default DetailedAlbum;
