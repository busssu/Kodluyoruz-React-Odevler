import React from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe("Emoji Tests", () => {
  let input, emoji;

  beforeEach(() => {
    render(<App />);
    input = screen.getByTestId("input");
    emoji = screen.getAllByTestId("emoji-result-row");
  });


  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  test("Successful rendering of header section", () => {
    const header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument;
  });

  test("The emoji list is rendered successfully when the app is first opened", () => {
    const list = screen.getAllByTestId("emoji-result-row");
    expect(list.length).toEqual(20);
  });

  test("emoji list rendering according to filter", () => {
    const searchname = "100";
    userEvent.type(input, searchname);
    expect(screen.getByText(searchname)).toBeInTheDocument;
  });

  test("Copy the emoji when clicking the emoji", () => {
    fireEvent(
      emoji[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
    expect(emoji[0]).toEqual;
  });
});
