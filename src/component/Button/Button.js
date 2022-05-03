import styled from "styled-components";

const PaginationButton = styled.button`
  height: 55px;
  width: 100px;
  background-color: white;
  color: black;
  border-radius: 20px;
  border-style: none;
  font-weight: bold;
  font-size: 20px;
`;

const FormButton = styled.button`
  height: 55px;
  width: 100px;
  background-color: grey;
  color: #ffffff;
  border-radius: 20px;
  border-style: none;
  font-weight: bold;
  font-size: 20px;
`;

const Button = ({ text, action, type }) => {
  return (
    <>
      {type === "pagination" && (
        <PaginationButton onClick={action}>{text}</PaginationButton>
      )}
      {type === "form" && <FormButton onClick={action}>{text}</FormButton>}
    </>
  );
};

export default Button;
