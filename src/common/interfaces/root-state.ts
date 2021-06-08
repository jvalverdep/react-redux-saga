import { IState as IPlayerState } from "../../store/reducers/player/types";

export interface IRootState {
  playerReducer: IPlayerState;
  counterReducer: number;
}
