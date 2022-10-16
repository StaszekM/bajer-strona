import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders construction info and a link to our Facebook", () => {
  render(<App />);
  const constructionInfo = screen.getByText(/Strona w budowie/i);
  expect(constructionInfo).toBeInTheDocument();

  const link = screen.getByRole("link", { name: /facebook/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute(
    "href",
    "https://www.facebook.com/Klub.Studencki.Bajer/"
  );
});
