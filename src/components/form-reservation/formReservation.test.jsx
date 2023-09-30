import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FormReservation from "./";

describe("FormReservation", () => {
  it("renders FormReservation", () => {
    const rendered = render(<FormReservation />);

    expect(rendered).toMatchSnapshot();
    // check if App components renders headline
  });
});
