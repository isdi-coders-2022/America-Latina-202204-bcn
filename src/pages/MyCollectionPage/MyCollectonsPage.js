import Album from "../../component/Album/Album";
import Button from "../../component/Button/Button";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import MainInformation from "../../component/MainInformation/MainInformation";

const MyCollectionPage = () => {
  return (
    <>
      <Header />
      <MainInformation />
      <Album />
      <Button type="pagination" />
      <Footer />
    </>
  );
};
export default MyCollectionPage;
