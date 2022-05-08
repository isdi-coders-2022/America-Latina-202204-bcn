import { previousPageType, nextPageType } from "./UiActionTypes";

export const previousPageAction = () => ({
  type: previousPageType,
});

export const nextPageAction = () => ({
  type: nextPageType,
});
