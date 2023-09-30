import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Food from "./";

describe("Food", () => {
  it("renders Food", () => {
    const rendered = render(<Food />);

    expect(rendered).toMatchSnapshot();
    // check if App components renders headline
  });
});
