import { renderHook, act } from "@testing-library/react-hooks";
import useGameData from "./useGameData";

const chapter1 = {
  name: "chapter 1",
  story: "Welcome",
  questions: [{ id: 2, title: 2, question: "", answer: "", hint: "a" }],
};

const gameState = {
  overall: {
    currentChapter: 0,
  },
};
const gameData = new Map([["chapter 1", chapter1]]);
test("return first chapter as currentChapter by default", () => {
  const { result } = renderHook(() => useGameData(gameData, gameState));
  expect(result.current[0]).toBe(chapter1);
});
