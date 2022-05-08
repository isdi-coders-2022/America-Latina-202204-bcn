import styled from "styled-components";

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  margin-bottom: 15px;
`;

const Paginator = ({ firstAction, secondAction }) => {
  return (
    <>
      <PaginatorContainer>
        <i className="fa-solid fa-arrow-left" onClick={firstAction}>
          Previous
        </i>
        <i className="fa-solid fa-arrow-right" onClick={secondAction}>
          Next
        </i>
      </PaginatorContainer>
    </>
  );
};

export default Paginator;
