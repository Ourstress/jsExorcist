import { renderHook, act } from "@testing-library/react-hooks";
import useGameState from "./useGameState";

const chapter1 = {
  name: "chapter 1",
  story: "Welcome",
  questions: [
    { id: 2, title: "chapter 1 question", question: "", answer: "", hint: "a" },
  ],
};

const chapter2 = {
  name: "chapter 2",
  story: "hey yoyo",
  questions: [
    { id: 2, title: "chapter 2 question", question: "", answer: "", hint: "a" },
  ],
};

const gameState = {
  overall: {
    currentChapter: 0,
  },
  chapters: {
    "chapter 1": {
      1: { status: "in progress" },
    },
  },
};

test("return questions that combines gameState and gameData", () => {
  const { result } = renderHook(() => useGameState(chapter1, gameState));
  const updatedQuestion1 = {
    ...chapter1.questions[0],
    status: "pending attempts",
  };
  expect(result.current[0]).toStrictEqual([updatedQuestion1]);
});

test("checkanswer changes status to in progress if answer wrong", () => {
  const { result } = renderHook(() => useGameState(chapter1, gameState));
  act(() => {
    result.current[1](chapter1.questions[0], "wrong");
  });
  const updatedQuestion1 = {
    ...chapter1.questions[0],
    status: "in progress",
  };
  expect(result.current[0]).toStrictEqual([updatedQuestion1]);
});

test("readyNextChapter changes to true when all questions correct", () => {
  const { result } = renderHook(() => useGameState(chapter1, gameState));
  expect(result.current[2]).toBe(false);

  act(() => {
    // this will get the question correct
    result.current[1](chapter1.questions[0], "");
  });
  expect(result.current[2]).toBe(true);
});
