import { createSelector } from "reselect";
import { IRootState } from "../../common/interfaces/root-state";

const getCounter = (state: IRootState) => state.counterReducer;

export const counterSelector = createSelector(getCounter, (state) => state);
