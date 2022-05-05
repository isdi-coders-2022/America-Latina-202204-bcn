import MainInformation from "../../component/MainInformation/MainInformation";
import styled from "styled-components";
const MyPlaylistPage = () => {
  const Title = styled.h2`
    text-align: center;
    display: flex;
    justify-content: center;
  `;
  return (
    <>
      <Title>My Playlist</Title>
      <MainInformation />
    </>
  );
};
export default MyPlaylistPage;
