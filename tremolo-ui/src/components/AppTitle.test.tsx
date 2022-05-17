/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import AppTitle from "./AppTitle";

test("AppTitle", () => {
  const { asFragment } = render(<AppTitle />);
  expect(asFragment()).toMatchSnapshot();
});
