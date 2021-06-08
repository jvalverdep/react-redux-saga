import CounterContainer from "./Counter.container";
import { render, screen } from "../utils/tests/redux";

describe("CounterContainer", () => {
  it("should render", () => {
    render(<CounterContainer />, {});
    expect(screen).toBeTruthy();
  });
});
