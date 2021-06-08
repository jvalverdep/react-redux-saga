import { counterActionTypes } from "./types";

export const counterAdd = () => ({
  type: counterActionTypes.ADD,
});

export const counterSub = () => ({
  type: counterActionTypes.SUB,
});
