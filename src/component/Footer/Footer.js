import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  background-color: #fd6262;
  border: 0px solid;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  top: 0;
  margin: 0px;
  width: 100vh;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h6>© 2022 By America Latina</h6>
      </FooterContainer>
    </>
  );
};

export default Footer;
