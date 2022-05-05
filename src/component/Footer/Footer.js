import styled from "styled-components";

const FooterContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  color: white;
  background-color: #fd6262;
  display: flex;
  bottom: 0;
  justify-content: center;
  margin: 0px;
  right: 0px;
  left: 0px;
  height: 60px;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h6>© 2022 BY AMERICA LATINA</h6>
      </FooterContainer>
    </>
  );
};

export default Footer;
