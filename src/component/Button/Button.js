import styled from "styled-components";

const PaginationButton = styled.button`
  width: 100px;
  background-color: white;
  color: black;
  border-radius: 20px;
  border-style: none;
  font-weight: bold;
  font-size: 20px;
`;

const ModifyInfoButton = styled.button`
  height: 33px;
  width: 185px;
  background-color: #adb69f;
  color: black;
  border-radius: 5px;
  border-style: none;
  font-size: 20px;
`;

const Button = ({ text, action, type }) => {
  return (
    <>
      {type === "pagination" && (
        <PaginationButton onClick={action}>{text}</PaginationButton>
      )}
      {type === "modifyInfo" && (
        <ModifyInfoButton onClick={action}>{text}</ModifyInfoButton>
      )}
    </>
  );
};

export default Button;
