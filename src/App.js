import Footer from "./component/Footer/Footer";

import Header from "./component/Header/Header";
import Album from "./component/Album/Album";
import AlbumContext from "./contexts/Album/AlbumContext";
import { useContext } from "react";

function App() {
  // const album = {
  //   artist: "Linkin Park",
  //   name: "Minutes to Midnight",
  //   image: [
  //     {
  //       size: "small",
  //       "#text":
  //         "https://lastfm.freetls.fastly.net/i/u/34s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
  //     },
  //     {
  //       size: "medium",
  //       "#text":
  //         "https://lastfm.freetls.fastly.net/i/u/64s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
  //     },
  //     {
  //       size: "large",
  //       "#text":
  //         "https://lastfm.freetls.fastly.net/i/u/174s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
  //     },
  //     {
  //       size: "extralarge",
  //       "#text":
  //         "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
  //     },
  //     {
  //       size: "mega",
  //       "#text":
  //         "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
  //     },
  //     {
  //       size: "",
  //       "#text":
  //         "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
  //     },
  //   ],
  // };
  const { albums } = useContext(AlbumContext);
  return (
    <>
      <AlbumContext.Provider value={albums}>
        <Header />
        {albums.length && <Album albumInfo={albums[0].album} />}
        <Footer />
      </AlbumContext.Provider>
    </>
  );
}

export default App;
