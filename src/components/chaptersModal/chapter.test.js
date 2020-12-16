import { render, screen } from "@testing-library/react";
import Chapter from "./chapter";

test("render bootstrap accordion", async () => {
  render(<Chapter />);

  // renders dummy data
  const dummyDisplayData = "Chapter 1";
  expect(
    await screen.findByText(new RegExp(dummyDisplayData))
  ).toBeInTheDocument();

  // renders accordion element
  expect(screen.getByLabelText("accordion")).toBeInTheDocument();
});
