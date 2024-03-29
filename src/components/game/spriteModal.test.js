import { render, screen } from "@testing-library/react";
import SpriteModal from "./spriteModal";

const modalId = "hello";
const modalContent = {
  title: "title boo",
  question: "question boowahawa",
  answer: "hoohoohooo",
  hint: "this is a hinthoho",
};

beforeEach(() => {
  render(<SpriteModal modalId={modalId} modalContent={modalContent} />);
});
test("modalId props are passed to SpriteModal", async () => {
  // able to find component by its id
  expect((await screen.findByLabelText("modal")).id).toBe(modalId);
});

test("modal contents passed by props", async () => {
  // able to find component by its id
  expect(await screen.findByText(modalContent.question)).toBeInTheDocument();
});
