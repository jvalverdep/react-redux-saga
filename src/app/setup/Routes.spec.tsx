import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Routes from "./Routes";

test("should render", () => {
  render(
    <MemoryRouter>
      <Routes />
    </MemoryRouter>
  );
});
