import { useContext } from "react";
import UiContext from "../../store/contexts/UiContext";
import {
  nextPageAction,
  previousPageAction,
} from "../../store/actions/UiActionCreator";

const Paginator = () => {
  const { uiDispatch } = useContext(UiContext);

  return (
    <>
      <i
        className="fa-solid fa-arrow-left"
        onClick={() => {
          uiDispatch(previousPageAction());
        }}
      ></i>
      <i
        className="fa-solid fa-arrow-right"
        onClick={() => {
          uiDispatch(nextPageAction());
        }}
      ></i>
    </>
  );
};

export default Paginator;