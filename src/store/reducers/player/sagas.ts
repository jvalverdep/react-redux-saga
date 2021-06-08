import { all, call, put, takeEvery } from "redux-saga/effects";
import { playerActionTypes } from "./types";
import { getPlayerError, getPlayerSuccess } from "./actions";
import { getRandomPlayer } from "../../../services/player";
import { IPlayer } from "../../../common/interfaces/entities";

export function* getPlayer(): Generator<
  any,
  void,
  { data: { results: IPlayer[] } }
> {
  try {
    const response = yield call(getRandomPlayer);
    yield put(getPlayerSuccess(response.data.results[0]));
  } catch (error) {
    yield put(getPlayerError(error));
  }
}

function* watchFetchPlayer() {
  yield takeEvery(playerActionTypes.PLAYER_REQUESTED, getPlayer);
}

export default function* rootPlayers() {
  yield all([watchFetchPlayer()]);
}
