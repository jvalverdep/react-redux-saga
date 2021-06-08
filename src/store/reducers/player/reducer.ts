import { Action } from "redux";
import { IState, playerActionTypes } from "./types";

const initialState: IState = {
  randomPlayer: { value: undefined, loading: false, error: undefined },
};

const playerReducer = (
  state = initialState,
  action: Action & { payload: any }
): IState => {
  switch (action.type) {
    case playerActionTypes.PLAYER_REQUESTED:
      return {
        ...state,
        randomPlayer: {
          ...state.randomPlayer,
          loading: true,
          error: undefined,
        },
      };
    case playerActionTypes.FETCH_PLAYER_SUCCESS:
      return {
        ...state,
        randomPlayer: {
          ...state.randomPlayer,
          loading: false,
          value: action.payload,
        },
      };
    case playerActionTypes.FETCH_PLAYER_ERROR:
      return {
        ...state,
        randomPlayer: {
          ...initialState.randomPlayer,
          error: "Ocurrió un error",
        },
      };
    case playerActionTypes.FETCH_PLAYER_RESET:
      return {
        ...state,
        randomPlayer: initialState.randomPlayer,
      };
    default:
      return state;
  }
};

export default playerReducer;
