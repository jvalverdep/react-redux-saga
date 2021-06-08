import { render } from "../utils/tests/redux";
import Setup from "./App";

test("wrap Provider", () => {
  render(<Setup />, {});
});
