import Button from "../Button/Button";
import styled from "styled-components";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import { addAlbumsAction } from "../../store/actions/AlbumsActionCreator";

const DetailedAlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;

  img {
    width: 100%;
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
    padding-top: 10px;
  }

  h5 {
    margin: 15px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .pagination_buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  p {
    font-size: 15px;
  }
  h6.detailed_album--tracklist {
    font-size: 20px;
  }
`;

const DetailedAlbum = ({ albumInfo }) => {
  const { myCollectionDispatch } = useContext(AlbumContext);
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
          <Button
            action={() => {
              myCollectionDispatch(addAlbumsAction(albumInfo));
            }}
            type="modifyInfo"
            text="Add to My Collection"
          />
        </DetailedAlbumContainer>
      )}
    </>
  );
};

export default DetailedAlbum;
