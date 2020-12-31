import { renderHook, act } from "@testing-library/react-hooks";
import useGameState from "./useGameState";
import { QUESTIONSTATUS } from "../data/constants";

const originalChapter1 = {
  name: "chapter 1",
  story: "Welcome",
  questions: [
    { id: 2, title: "chapter 1 question", question: "", answer: ["", "correct answer"], hint: "a" },
  ],
};

const originalGameState = {
  overall: { currentChapter: 0 },
  chapters: { "chapter 1": { 1: { status: "in progress" } } },
};

let result;
let chapter1;
let gameState;
beforeEach(() => {
  chapter1 = JSON.parse(JSON.stringify(originalChapter1));
  gameState = JSON.parse(JSON.stringify(originalGameState));
  const renderedHook = renderHook(() => useGameState(chapter1, gameState));
  result = renderedHook.result;
});

test("return questions that combines gameState and gameData", () => {
  const updatedQuestion1 = {
    ...originalChapter1.questions[0],
    status: QUESTIONSTATUS.pending,
  };
  expect(result.current[0]).toStrictEqual([updatedQuestion1]);
});

test("checkanswer changes status to in progress if answer wrong", () => {
  act(() => {
    result.current[1](chapter1.questions[0], "wrong");
  });
  const updatedQuestion1 = {
    ...originalChapter1.questions[0],
    status: QUESTIONSTATUS.trying,
  };
  expect(result.current[0]).toStrictEqual([updatedQuestion1]);
});

test("checkanswer checks for alternate answers", () => {
  act(() => {
    result.current[1](chapter1.questions[0], "correct answer");
  });
  const updatedQuestion1 = {
    ...originalChapter1.questions[0],
    status: QUESTIONSTATUS.correct,
  };

  expect(result.current[0]).toStrictEqual([updatedQuestion1]);
});

test("readyNextChapter changes to true when all questions correct", () => {
  expect(result.current[2]).toBe(false);

  act(() => {
    // this will get the question correct
    result.current[1](chapter1.questions[0], "");
  });
  expect(result.current[2]).toBe(true);
});
