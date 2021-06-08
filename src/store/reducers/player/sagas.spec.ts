import { call, put } from "@redux-saga/core/effects";
import { getRandomPlayer } from "../../../services/player";
import { getPlayer } from "./sagas";
import { getPlayerError, getPlayerSuccess } from "./actions";
import { messages } from "../../../common/constants/messages";
import randomPlayerData from "../../../../__mock__/randomPlayer.json";

describe("getPlayer saga success", () => {
  const generator = getPlayer();

  it("getRandomPlayer should yield an Effect call(getRandomPlayer)", () => {
    expect(generator.next().value).toStrictEqual(call(getRandomPlayer));
  });

  it("getRandomPlayer should yield an Effect put(getPlayerSuccess(randomPlayers))", () => {
    expect(
      generator.next({ data: { results: [randomPlayerData] } }).value
    ).toStrictEqual(put(getPlayerSuccess(randomPlayerData)));
  });

  it("should be done on the next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe("getPlayer saga error", () => {
  const generator = getPlayer();

  it("getRandomPlayer should yield an Effect call(getRandomPlayer)", () => {
    expect(generator.next().value).toStrictEqual(call(getRandomPlayer));
  });

  it("should throw an error on the next iteration", () => {
    expect(generator.throw(messages.GENERAL_ERROR).value).toStrictEqual(
      put(getPlayerError(messages.GENERAL_ERROR))
    );
  });
});
