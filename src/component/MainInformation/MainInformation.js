import styled from "styled-components";
const Image = styled.img`
  @media (max-width: 600px) {
    width: 100%;
    padding-top: 20px;
  }
  @media (min-width: 601px) {
    display: none;
  }
`;

const MainInformation = () => {
  return (
    <>
      <Image
        src="img/persona-escuchando-musica.jpg"
        alt="personas alegres escuchadno musica"
      />
    </>
  );
};
export default MainInformation;
