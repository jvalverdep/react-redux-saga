import { render as rtlRender } from "@testing-library/react";
import { Store } from "redux";
import { IRootState } from "../../common/interfaces/root-state";
import ReduxProvider from "./ReduxProvider";

interface RenderRtlOptions {
  initialState?: Partial<IRootState>;
  store?: Store;
}

function render(
  component: React.ReactElement,
  renderOptions: RenderRtlOptions
) {
  return rtlRender(
    <ReduxProvider {...renderOptions}>{component}</ReduxProvider>
  );
}

export * from "@testing-library/react";
export { render };
