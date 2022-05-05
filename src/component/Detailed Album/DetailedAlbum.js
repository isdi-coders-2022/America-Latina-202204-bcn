import Button from "../Button/Button";
import styled from "styled-components";

const DetailedAlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;

  img {
    width: 300px;
  }
  h6.detailed_album--info {
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    width: 100%;
    font-size: 15px;
  }

  .detailed_album--title span {
    padding-bottom: 10px;
  }

  h5 {
    margin: 15px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .pagination_buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  p {
    border: 2px solid;
    font-size: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h6.detailed_album--tracklist {
    font-size: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const DetailedAlbum = ({ albumInfo }) => {
  return (
    <>
      {albumInfo.image !== undefined && (
        <DetailedAlbumContainer>
          <h5 className="detailed_album--title">
            <span>{albumInfo.artist}</span>
            <span>{albumInfo.name}</span>
          </h5>
          <img src={albumInfo.image[2]["#text"]} alt={albumInfo.name} />
          <h6 className="detailed_album--info">
            <span>Genre: {albumInfo.tags.tag[2].name}</span>
            <span>Release Date: {albumInfo.wiki.published}</span>
          </h6>
          <h6 className="detailed_album--tracklist">Tracklist</h6>
          <p>{albumInfo.wiki.summary}</p>
          <Button type="modifyInfo" text="Modify information" />
          <div className="pagination_buttons">
            <Button type="pagination" text="Previous Page" />
            <Button type="pagination" text="Next Page" />
          </div>
        </DetailedAlbumContainer>
      )}
    </>
  );
};

export default DetailedAlbum;
