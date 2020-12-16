import { render, screen } from "@testing-library/react";
import ChaptersModal from "./index";

test("render bootstrap modal", async () => {
  render(<ChaptersModal />);

  // renders accordion element
  expect(screen.getByLabelText("modal")).toBeInTheDocument();
});

test("modal contains chapters component", async () => {
  render(<ChaptersModal />);

  // renders accordion element
  expect(screen.getByLabelText("accordion")).toBeInTheDocument();
});
