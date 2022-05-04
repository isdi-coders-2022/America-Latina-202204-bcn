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
const Informatio = styled.div`
  @media (max-width: 600px) {
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
      <Informatio>
        <p>hola</p>
        <p>
          Bienvenido a la colección de álbumes que marcaron época en la música y
          que no pueden faltar en la playlist de un Hombre Esquire. ¿Cuántos has
          escuchado?
        </p>
        <p>
          Seguro que muchos de los integrantes de este top no te sorprenden, no
          vamos a descubrir la pólvora a estas alturas ni menospreciar a The
          Beatles o Elvis Presley. Pero quizá alguno te sorprenda o haga que lo
          revisites con una sonrisa en los labios mientras subes un poquito más
          el volumen. Eso estaría muy bien.
        </p>
      </Informatio>
    </>
  );
};
export default MainInformation;
