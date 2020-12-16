import { render, screen } from "@testing-library/react";
import Game from "./index";

test("render images", async () => {
  render(<Game />);

  // renders 10 ghosts
  const ghosts = await screen.findAllByLabelText("ghost");
  expect(ghosts).toHaveLength(10);
});

test("clicking on image shows modal", async () => {
  render(<Game />);

  // renders 10 ghosts
  expect(await screen.findAllByLabelText("modal")).not.toBeNull();
});
