import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./";

describe("Navbar", () => {
  it("renders Navbar", () => {
    const { asFragment } = render(<Navbar />);
    const rendered = asFragment();

    console.log(rendered);
    expect(rendered).toMatchSnapshot();
    // check if App components renders headline
  });
});
