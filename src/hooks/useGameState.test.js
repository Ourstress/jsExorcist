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
