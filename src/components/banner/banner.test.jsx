import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Banner from "./";

describe("Food", () => {
  it("renders Food", () => {
    const rendered = render(<Banner onOpenReservationDialog={() => {}} />);

    expect(rendered).toMatchSnapshot();
    // check if App components renders headline
  });
});
