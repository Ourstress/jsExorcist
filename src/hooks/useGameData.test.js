import { renderHook, act } from "@testing-library/react-hooks";
import useGameData from "./useGameData";

const chapter1 = {
  name: "chapter 1",
  story: "Welcome",
  questions: [{ id: 2, title: 2, question: "", answer: "", hint: "a" }],
};

const chapter2 = {
  name: "chapter 2",
  story: "hey yoyo",
  questions: [{ id: 2, title: 2, question: "", answer: "", hint: "a" }],
};

const gameState = {
  overall: {
    currentChapter: 0,
  },
};
const gameData = new Map([
  ["chapter 1", chapter1],
  ["chapter 2", chapter2],
]);
test("return first chapter as currentChapter by default", () => {
  const { result } = renderHook(() => useGameData(gameData, gameState));
  expect(result.current[0]).toBe(chapter1);
});

test("takes gameState currentChapter into account", () => {
  const currentChapter2GameState = {
    overall: {
      currentChapter: 1,
    },
  };
  const { result } = renderHook(() =>
    useGameData(gameData, currentChapter2GameState)
  );
  expect(result.current[0]).toBe(chapter2);
});

test("setCurrentChapterIndex causes currentChapterIndex to change", () => {
  const { result } = renderHook(() => useGameData(gameData, gameState));
  expect(result.current[1]).toBe(0);
  const newChapterIndex = 1;
  act(() => {
    result.current[2](newChapterIndex);
  });
  expect(result.current[1]).toBe(newChapterIndex);
});
