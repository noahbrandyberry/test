import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Copyright } from "./copyright";
import { format } from "date-fns";

jest.useFakeTimers().setSystemTime(new Date(2020, 1, 1));

describe("<Copyright />", () => {
  test("it renders when built this year", () => {
    render(<Copyright appName="Hello World" yearBuilt={2020} />);
    expect(screen.getByText(`© 2020 Hello World`)).toBeTruthy();
  });

  test("it renders when built in past year", () => {
    render(<Copyright appName="Hello World" yearBuilt={2019} />);
    expect(screen.getByText(`© 2019 - 2020 Hello World`)).toBeTruthy();
  });
});
