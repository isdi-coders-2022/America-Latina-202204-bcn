import {
  previousPageType,
  nextPageType,
  modifyPropertyType,
} from "./UiActionTypes";

export const previousPageAction = () => ({
  type: previousPageType,
});

export const nextPageAction = () => ({
  type: nextPageType,
});

export const modifyPropertyAction = (propertyToModify) => ({
  type: modifyPropertyType,
  propertyToModify: propertyToModify,
});
