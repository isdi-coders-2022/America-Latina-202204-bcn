import {
  nextPageType,
  previousPageType,
  modifyPropertyType,
} from "../actions/UiActionTypes";

const uiReducer = (currentUi, action) => {
  let newUi;

  switch (action.type) {
    case nextPageType:
      if (!currentUi.lastPage) {
        currentUi.currentPage += 1;
      }
      newUi = { ...currentUi };
      break;
    case previousPageType:
      if (!currentUi.firstPage) {
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
