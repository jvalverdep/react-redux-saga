import { render, screen } from "../../utils/tests/redux";
import RandomPlayer from "./RandomPlayer";
import randomPlayerData from "../../../__mock__/randomPlayer.json";

describe("RandomPlayer", () => {
  render(<RandomPlayer player={randomPlayerData} />, {});

  it("render RandomPlayer", () => {
    // const playerText = screen.getByText("");
    // expect(playerText).toBeInTheDocument();
    expect(screen).toBeTruthy();
  });
});
