import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import CompleteCollection from "./pages/CompleteCollectionPage/CompleteColection";
import MyPlaylistPage from "./pages/MyPlaylist/MyPlaylist";
import DetailPage from "./pages/DetailPage/DetailsPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my-playlist" element={<MyPlaylistPage />} />
        <Route path="/complete-collection" element={<CompleteCollection />} />
        <Route path="/detail-page" element={<DetailPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
