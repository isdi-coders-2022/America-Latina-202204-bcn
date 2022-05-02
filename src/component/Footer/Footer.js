import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #fd6262;
  display: flex;
  border: 0px solid;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  margin: 0px;
  right: 0px;
  left: 0px;
  flex-direction: column;

  text-align: center;
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
