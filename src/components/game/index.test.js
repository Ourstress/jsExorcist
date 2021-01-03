import { render, screen, fireEvent, act } from "@testing-library/react";
import Game from "./index";

let currentChapter;
const checkAnswer = jest.fn();
beforeEach(() => {
  global["bootstrap"] = {
    Popover: jest.fn().mockImplementation(() => {
      // Works and lets you check for constructor calls
      return { popover: () => {} };
    }),
  };
  currentChapter = {
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
  render(<Game questions={currentChapter.questions} checkAnswer={checkAnswer} />);
});
test("render images", async () => {
  // renders 1 ghost
  const ghosts = await screen.findAllByLabelText("ghost");
  expect(ghosts).toHaveLength(1);
});

test("modal in the document", async () => {
  expect(await screen.findAllByLabelText("modal")).not.toBeNull();
});

test("clicking on sprite shows modal with related content", async () => {
  await act(async () => {
    fireEvent.click(await screen.findByLabelText("ghost"));
  });
  expect(screen.getByText("What is displayed", { exact: false })).toBeInTheDocument();
});

test("checkAnswer from parent was called", async () => {
  await act(async () => {
    fireEvent.click(await screen.findByLabelText("ghost"));
    fireEvent.click(screen.getByText(/Submit/i));
  });
  expect(checkAnswer).toHaveBeenCalled();
});
