import Button from "../Button/Button";
import styled from "styled-components";
import { useContext } from "react";
import AlbumContext from "../../store/contexts/AlbumContext";
import { addAlbumsAction } from "../../store/actions/AlbumsActionCreator";

const DetailedAlbumContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 15px;

  img {
    width: 300px;
  }
  h6.detailed_album--info {
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    width: 100%;
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 0px;
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
    span {
      &.detailed_album--title__album {
        color: rgb(196, 196, 196);
      }
    }
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
  }
  h6.detailed_album--tracklist {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 1px;
  }
  .cpShLv {
    margin-bottom: 15px;
    background-color: powderblue;
    transition: background-color 0.5s;
  }
  .cpShLv:hover {
    background-color: grey;
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
            <span className="detailed_album--title__album">
              {albumInfo.name}
            </span>
          </h5>

          <img src={albumInfo.image[2]["#text"]} alt={albumInfo.name} />
          <h6 className="detailed_album--info">
            <span>Genre: {albumInfo.tags.tag[2].name}</span>
            <span>Release Date: {albumInfo.wiki.published}</span>
          </h6>
          <h6 className="detailed_album--tracklist">Summary</h6>
          <p>
            {albumInfo.wiki.summary.slice(
              0,
              -albumInfo.wiki.summary.length -
                albumInfo.wiki.summary.indexOf("<a href")
            )}
          </p>
          <Button
            className="Button__modify"
            action={() => {
              myCollectionDispatch(addAlbumsAction(albumInfo));
            }}
            type="modifyInfo"
            text="Add to My Playlist"
          />
        </DetailedAlbumContainer>
      )}
    </>
  );
};

export default DetailedAlbum;
