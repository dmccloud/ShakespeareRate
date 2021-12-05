import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Shakespeare's Stories", () => {
  render(<App />);
  const linkElement = screen.getByText("Shakespeare Rate");
  expect(linkElement).toBeInTheDocument();
});

test("renders Shakespeare's outline", () => {
  render(<App />);
  const imgElement = screen.getByLabelText("william's outline");
  expect(imgElement).toBeInTheDocument();
});

test("render's page for review list", () => {
  render(<App />);
  const pageElement = screen.getByLabelText("review-area");
  expect(pageElement).toBeInTheDocument();
});

test("loading message appears", () => {
  render(<App />);
  const loadingElement = screen.getByText("Loading...");
  expect(loadingElement).toBeInTheDocument();
});
