import { render, screen } from "@testing-library/react";
import SpriteModal from "./spriteModal";

test("modalId props are passed to SpriteModal", async () => {
  const modalId = "hello";
  render(<SpriteModal modalId={modalId} modalContent="boo" />);

  // able to find component by its id
  expect((await screen.findByLabelText("modal")).id).toBe(modalId);
});

test("modal contents passed by props", async () => {
  const modalId = "hello";
  const modalContent = "boo";
  render(<SpriteModal modalId={modalId} modalContent={modalContent} />);

  // able to find component by its id
  expect(await screen.findByText(modalContent)).toBeInTheDocument();
});
