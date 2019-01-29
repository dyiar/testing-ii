import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./display/display";
import Dashboard from "./dashboard/dashboard";

describe("<Display />", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Display />);

    const hello = getByTestId(/hello/i);

    expect(hello).toHaveTextContent(/hello/i);
  });

  describe("ball button", () => {
    it("should select the button", () => {
      const { getByText, getByTestId } = render(<Dashboard />, <Display />);

      const button = getByTestId("balls-button");
      const ballsTotal = getByTestId("balls-total");
      fireEvent.click(button);
      expect(ballsTotal).toHaveTextContent(1);
    });
  });

  describe("strike button", () => {
    it("should select the strike button", () => {
      const { getByTestId } = render(<Dashboard />, <Display />);

      const button = getByTestId("strike-button");
      const strikeTotal = getByTestId("strike-total");
      fireEvent.click(button);
      expect(strikeTotal).toHaveTextContent(1);
    });
  });

  describe("hit button", () => {
    it("should select the hit button", () => {
      const { getByTestId } = render(<Dashboard />, <Display />);

      const button = getByTestId("hit-button");
      const strikeTotal = getByTestId("strike-total");
      fireEvent.click(button);
      expect(strikeTotal).toHaveTextContent(0);
    });
  });

  describe("balls should not be > 4", () => {
    it("should not be greater than 4", () => {
      const { getByTestId } = render(<Display />);

      const ballsTotal = getByTestId("balls-total");
      const button = getByTestId("balls-button");
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      expect(ballsTotal).not.toHaveTextContent(5);
    });
  });

  describe("strikes should not be > 3", () => {
    it("should not be greater than 3", () => {
      const { getByTestId } = render(<Display />);

      const strikesTotal = getByTestId("strike-total");
      const button = getByTestId("strike-button");
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      expect(strikesTotal).not.toHaveTextContent(4);
    });
  });


});
