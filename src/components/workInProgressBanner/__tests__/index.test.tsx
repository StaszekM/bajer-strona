import { render, screen } from "@testing-library/react";
import { WorkInProgressBanner } from "../WorkInProgressBanner";

test("renders construction info and a link to our Facebook", () => {
  render(<WorkInProgressBanner />);
  const constructionInfo = screen.getByText(/Strona w budowie/i);
  expect(constructionInfo).toBeInTheDocument();

  const link = screen.getByRole("link", { name: /facebook/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute(
    "href",
    "https://www.facebook.com/Klub.Studencki.Bajer/"
  );
});
