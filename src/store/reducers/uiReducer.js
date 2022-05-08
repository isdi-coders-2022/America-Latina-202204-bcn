import {
  nextPageType,
  previousPageType,
  modifyPropertyType,
} from "../actions/UiActionTypes";

const uiReducer = (currentUi, action) => {
  let newUi;

  switch (action.type) {
    case nextPageType:
      if (currentUi.currentPage + 1 !== currentUi.totalPages) {
        currentUi.currentPage += 1;
      }
      newUi = { ...currentUi };
      break;
    case previousPageType:
      if (currentUi.currentPage > 0) {
        currentUi.currentPage -= 1;
      }
      newUi = { ...currentUi };
      break;
    case modifyPropertyType:
      newUi = { ...currentUi, ...action.propertyToModify };
      break;
    default:
      newUi = { ...currentUi };
      break;
  }
  return newUi;
};

export default uiReducer;
