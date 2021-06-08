import axios from "axios";
import * as playerServices from "../player";
import randomPlayerData from "../../../__mock__/randomPlayer.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("getRandomPlayer", async () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: { results: randomPlayerData } })
  );

  await expect(playerServices.getRandomPlayer()).resolves.toEqual({
    data: { results: randomPlayerData },
  });
});
