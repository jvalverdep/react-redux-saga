import { playerActionTypes } from "./types";
import { IPlayer } from "../../../common/interfaces/entities";
import { IAction } from "../../../common/interfaces/action";

export const getPlayerRequest = () => ({
  type: playerActionTypes.PLAYER_REQUESTED,
});

export const getPlayerSuccess = (value: IPlayer): IAction => ({
  type: playerActionTypes.FETCH_PLAYER_SUCCESS,
  payload: value,
});

export const getPlayerError = (error: string) => ({
  type: playerActionTypes.FETCH_PLAYER_ERROR,
  payload: error,
});

export const getPlayerReset = () => ({
  type: playerActionTypes.FETCH_PLAYER_RESET,
});
