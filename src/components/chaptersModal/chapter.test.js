import { render, screen } from "@testing-library/react";
import Chapter from "./chapter";

test("render bootstrap accordion", async () => {
  const data = [
    {
      title: "Meet print!",
      question: 'What is displayed by `print("hello world")`?',
      answer: "hello world",
      hint:
        "The *print* function tells the computer to display the value of a python object given to it",
      status: "pending attempts",
    },
  ];
  render(<Chapter data={data} />);

  // renders dummy data
  const dummyDisplayData = "Meet print!";
  expect(
    await screen.findByText(new RegExp(dummyDisplayData))
  ).toBeInTheDocument();

  // renders accordion element
  expect(screen.getByLabelText("accordion")).toBeInTheDocument();
});
