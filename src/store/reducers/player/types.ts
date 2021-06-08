import { IPlayer } from "../../../common/interfaces/entities";
import { IObjectState } from "../../../common/interfaces/reducer-state";

export const playerActionTypes = {
  PLAYER_REQUESTED: "@@player/PLAYER_REQUESTED",
  FETCH_PLAYER_SUCCESS: "@@player/FETCH_PLAYER_SUCCESS",
  FETCH_PLAYER_ERROR: "@@player/FETCH_PLAYER_ERROR",
  FETCH_PLAYER_RESET: "@@player/FETCH_PLAYER_RESET",
};

export interface IState {
  randomPlayer: IObjectState<IPlayer>;
}
