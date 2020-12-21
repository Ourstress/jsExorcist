import { render, screen } from "@testing-library/react";
import Game from "./index";

beforeEach(() => {
  global["bootstrap"] = {
    Popover: jest.fn().mockImplementation(() => {
      // Works and lets you check for constructor calls
      return { popover: () => {} };
    }),
  };
  const currentChapter = {
    story:
      "Welcome apprentice exorcist! The very basics are knowing console.log and javascript objects!",
    questions: [
      {
        title: "Meet print!",
        question: 'What is displayed by `print("hello world")`?',
        answer: "hello world",
        hint:
          "The *print* function tells the computer to display the value of a python object given to it",
        status: "pending attempts",
      },
    ],
  };
  render(<Game currentChapter={currentChapter} />);
});
test("render images", async () => {
  // renders 1 ghost
  const ghosts = await screen.findAllByLabelText("ghost");
  expect(ghosts).toHaveLength(1);
});

test("clicking on image shows modal", async () => {
  expect(await screen.findAllByLabelText("modal")).not.toBeNull();
});
