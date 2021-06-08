import { IAction } from "../../../common/interfaces/action";
import { counterActionTypes } from "./types";

const initialState = 0;

const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case counterActionTypes.ADD:
      return state + 1;
    case counterActionTypes.SUB:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
