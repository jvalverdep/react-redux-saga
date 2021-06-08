import { render, screen } from "../../utils/tests/redux";
import RandomPlayerContainer from "./RandomPlayer.container";

describe("RandomPlayerContainer", () => {
  it("should render loading", async () => {
    render(<RandomPlayerContainer />, {});
    const button = await screen.findByTestId("get-player-btn");
    button.click();

    expect(await screen.findByTestId("loading")).toBeInTheDocument();
  });

  it("should render error", async () => {
    render(<RandomPlayerContainer />, {
      initialState: {
        playerReducer: {
          randomPlayer: { value: undefined, loading: false, error: "Error" },
        },
      },
    });
    await screen.findByTestId("error");
  });
});
