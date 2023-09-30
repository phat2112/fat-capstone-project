import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./";

describe("Footer", () => {
  it("renders Footer", () => {
    const rendered = render(<Footer />);

    expect(rendered).toMatchSnapshot();
    // check if Footer components renders headline
  });
});
