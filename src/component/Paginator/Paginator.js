import styled from "styled-components";
import { useContext } from "react";
import UiContext from "../../store/contexts/UiContext";
import {
  nextPageAction,
  previousPageAction,
} from "../../store/actions/UiActionCreator";

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  margin-bottom: 15px;
`;

const Paginator = () => {
  const { uiDispatch } = useContext(UiContext);

  return (
    <>
      <PaginatorContainer>
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => {
            uiDispatch(previousPageAction());
            window.scrollTo(0, 0);
          }}
        ></i>
        <i
          className="fa-solid fa-arrow-right"
          onClick={() => {
            uiDispatch(nextPageAction());
            window.scrollTo(0, 0);
          }}
        ></i>
      </PaginatorContainer>
    </>
  );
};

export default Paginator;
